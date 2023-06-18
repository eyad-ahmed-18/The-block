import { Row, Form, Button } from "react-bootstrap";


const CarRental = () => {
  return (
    <div>
      <Row className="g-4 rowform">
        <Form.Control
          type="file"
          className="form"
          required
          name="file"
          // onChange={uploadToIPFS}
        />
        <Form.Control
          className="form"
          // onChange={(e) => setName(e.target.value)}
          size="lg"
          required
          type="text"
          placeholder="Name"
        />
        <Form.Control
          className="form"
          // onChange={(e) => setCollectionName(e.target.value)}
          size="lg"
          required
          type="text"
          placeholder="Collection Name"
        />
        <Form.Control
          className="form"
          // onChange={(e) => setDescription(e.target.value)}
          size="lg"
          required
          as="textarea"
          placeholder="Description"
        />
        <Form.Control
          className="form"
          // onChange={(e) => setPrice(e.target.value)}
          size="lg"
          required
          type="number"
          placeholder="Price in ETH"
        />
        <div className="d-grid px-0">
          <Button
            className="create-nft"
            //   onClick={createNFT}
            variant="primary"
            size="lg"
          >
            Create & List NFT!
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default CarRental;