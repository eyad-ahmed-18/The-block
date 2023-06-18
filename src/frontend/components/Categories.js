import React from "react";
import { div, Row, Col, Card } from "react-bootstrap";

const Categories = () => {
  return (
    // <div>
   

    //   </div>
    // </div>
    // <div className="flex justify-center">
    //   <div className="px-5 container">
    //     <Row xs={1} md={2} lg={5} className="g-4 py-5">
    //       <Col>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
    <div className="flex justify-center">
      <div className="px-5 container">
      <h1
        style={{
          padding: "1rem 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Stay Tuned!
      </h1>
      <h4 style={{
          display: "flex",
          justifyContent: "center",
        }}>
        Collectibles, Rentables and Buyables. All sorts of NFTs will be
        available.
      </h4>
        <Row xs={2} md={2} lg={5} className="g-4 py-5">
          {/* <Col> */}
          <Card className="category">
            <h3 className="categoryname">
              CAR
              <br /> RENTAL
            </h3>
          </Card>
          <Card style={{backgroundColor: "#64DFDF"}}className="category">
            <h3 className="categoryname">
              SKILL
              <br /> SHARING
            </h3>
          </Card>
          <Card style={{backgroundColor: "black", color: "white"}} className="category">
            <h3 className="categoryname">COLLECTIBLES</h3>
          </Card>
          <Card style={{backgroundColor: "#234C3E", color: "white"}} className="category">
            <h3 className="categoryname">
              COWORKING
              <br /> SPACES
            </h3>
          </Card>
          <Card style={{backgroundColor: "#EEEEEE"}} className="category">
            <h4 style={{color: "black", fontSize: "20px", }}className="categoryname2">ENTERTAINMENT</h4>
          </Card>

          {/* </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default Categories;
