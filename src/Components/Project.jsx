import Project1 from "../assets/images/project_1.jpg";
import Project2 from "../assets/images/project_2.jpg";
import Project3 from "../assets/images/project_3.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

const Project = () => {
  return (
    <Container>
      <Row>
        <Col className="my-5 text-center">
          <h1>MY PROJECTS</h1>
        </Col>
        <Row className="d-flex justify-content-center">
          <Col sm="12" lg="4" md="6" className="my-3">
            <Card className="shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Project1} />
              <Card.Body>
                <Card.Title>Lifestyle Medicine</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="4" md="6" className="my-3">
            <Card className="shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Project2} />
              <Card.Body>
                <Card.Title>Banking Technology</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="4" md="6" className="my-3">
            <Card className="shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Project3} />
              <Card.Body>
                <Card.Title>Marketplace Website</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Project;
