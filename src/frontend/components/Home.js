import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        // Add item to items array
        items.push({
          totalPrice,
          collectionName: metadata.collectionName,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });
      }
    }
    setLoading(false);
    setItems(items);
  };

  useEffect(() => {
    loadMarketplaceItems();
  });

  if (loading)
    return (
      <div
        style={{
          padding: "1rem 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Spinner animation="grow" style={{ display: "flex" }} />
        <h2 className="mx-3 my-0">Loading...</h2>
      </div>
    );

  if (items.length === 0) {
    return <h2 style={{ marginTop: "20px" }}>No Marketplace Items</h2>;
  }

  const renderCollectionCards = () => {
    const collectionMap = {};
    console.log("items : ", items);
    items.forEach((item) => {
      if (!collectionMap[item.collectionName]) {
        collectionMap[item.collectionName] = [item];
      } else {
        collectionMap[item.collectionName].push(item);
      }
    });

    return Object.entries(collectionMap).map(
      ([collectionName, collectionItems]) => {
        const firstItem = collectionItems[0];
        console.log("collection name ", collectionName);
        return (
          <div className="flex justify-center">
            {/* <Row xs={1} md={2} lg={5} className="g-4 py-5"> */}
            <Col key={collectionName}>
              <Card>
                <Card.Img
                  variant="top"
                  class="img-size"
                  src={firstItem.image}
                />
                <Card.Body>
                  <Card.Title>{collectionName}</Card.Title>
                  <Link to={`/collection/${collectionName}`}>
                    <Button className="buy-nft" variant="primary">
                      View Collection
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* </Row> */}
          </div>
        );
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="px-5 container">
        <Row xs={1} md={2} lg={4} className="g-4 py-5">
          {renderCollectionCards()}
        </Row>
      </div>
    </div>
  );
};

export default Home;