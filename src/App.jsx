import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
      <section>
      <Container fluid className="visual-board">
        {/* <Row className="">
          <Col lg={3} >
            <Image src="../../images/side1.jpg" />
            <Image src="../../images/side2.jpg" />
            <Image src="../../images/side3.jpg" />
          </Col> */}
        
         

          <Col lg={7}>
            <Container fluid>
              <Row className="">
                <Col lg={12}><Image src="../../images/hunterStart.jpg" /></Col>
                
              </Row>

              <Row className="">
                <Col lg={6}><Image src="../../images/walking.png" /></Col>
                <Col lg={6}><Image src="../../images/hunter.png" /></Col>
                <Col lg={6}><Image src="../../images/dead1.png" /></Col>
                <Col lg={6}><Image src="../../images/alone.png" /></Col>
                <Col lg={6}><Image src="../../images/young2.png" /></Col>
                <Col lg={6}><Image src="../../images/young1.png" /></Col>
              </Row>

              <Row className="">
              <Col lg={12}><Image src="../../images/picky.jpg" /></Col>              </Row>

              <Row className="">
              <Col lg={6}><Image src="../../images/one.png" /></Col>
                <Col lg={6}><Image src="../../images/two.png" /></Col>
                <Col lg={6}><Image src="../../images/three.png" /></Col>
                <Col lg={6}><Image src="../../images/tomb.png" /></Col>
              </Row>
            </Container>            
          </Col>
        {/* </Row>   */}

        <Row className="g-0">
          <Col>
            <Image  />
          </Col>
        </Row>    
      </Container>
      </section>
  );
}
export default App;
