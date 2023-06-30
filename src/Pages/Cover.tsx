import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';



interface StorySummary {
  title: string;
  synopsis: string;
}

const initialStorySummary: StorySummary = {
  title: 'Comic Summary',
  synopsis: "a story of a man on a camping trip going fishing who catches a few fish and cooks em up"
};

const OffCanvasSummary: React.FC = () => {
  const [show, setShow] = useState(false);
  const [summary, setSummary] = useState(initialStorySummary);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='off-cover'>
        <button className='button' onClick={handleShow}>
          Open Summary
        </button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{summary.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Here is the summary text */}
            <p>{summary.synopsis}</p>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default OffCanvasSummary;
