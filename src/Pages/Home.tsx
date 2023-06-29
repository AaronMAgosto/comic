import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import AppLayout from '../Layout/AppLayout';

interface ImageWithModalProps {
  src: string;
}

const ImageWithModal: React.FC<ImageWithModalProps> = ({src}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image fluid className="glowing-border" src={src} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
         <Image fluid src={src} />
      </Modal>
    </>
  );
}

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://comic-api-aa2.web.app/fisher')
      .then((response) => response.json())
      .then((data) => setImages(data.map((item: any) => item.image)));
  }, []);

  return (
    <AppLayout>
       <div style={{ marginBottom: '20px' }}>
  </div>
      <section>
        <Container fluid className="joker-cover">
          <Row className="g-0">
            {images.map((src, index) => (
              <Col key={index} lg={4} className="less-padding">
                <ImageWithModal src={src} />
              </Col>
            ))}
          </Row>

          
        </Container>
      </section>
    </AppLayout>
  );
}

export default Home;
