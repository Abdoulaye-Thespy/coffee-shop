import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header ({value}) {
  return (
      <Container>
          <Row>
              <Col>
                <h1 className="glitch">
                {value}
                </h1>
              </Col>
          </Row>
      </Container>

  );
}