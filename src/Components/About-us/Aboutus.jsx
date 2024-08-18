import React from 'react';
import "./aboutus.css";
import image2 from "./../images/image2.png"
import { Row,Col,Container } from 'react-bootstrap';
import videoimage from './../images/videoimage.png';
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome';
// import {faArrowTrendUp} from '@fontawesome/free-solid-svg-icons';

const Aboutus = () => {
  return (
    <div className="aboutus">
                <div className="image">
                    <img src={videoimage} alt="404" width="400px" height="450px" />
                </div>
                <div className="content">
                    <h1>It's just a Click away , <br /> to create your <br /> Personalised Wedding invitation </h1>
                    <button>Create Now </button>
                </div>
            </div>
    // <div className="hero-section">
    //   <Container>
    //     <Row>
    //       <Col md={6}>
    //         <div className="content">
    //           <h1>DO-IT-YOURSELF</h1>
    //           <h2>
    //             Create & Download <br />
    //             <span className="highlight">Video/Card Invitation's</span> <br />
    //             in minutes
    //           </h2>
    //           <Form>
    //             <Form.Control type="text" placeholder="Search for any invitation template" />
    //             <Button variant="primary" className="search-button">Search</Button>
    //           </Form>
    //           <div className="categories">
    //             <Button variant="outline-secondary">Wedding</Button>
    //             <Button variant="outline-secondary">Birthday</Button>
    //             <Button variant="outline-secondary">Baby & Kids/ Naming Ceremony</Button>
    //             <Button variant="outline-secondary">House Warming</Button>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col md={6}>
    //         <div className="images">
    //           <img src={image2} alt="Left Image" className="left-image" />
    //           <img src={image2} alt="Right Image" className="right-image" />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  )
}

export default Aboutus