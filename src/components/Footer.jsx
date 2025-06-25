import React from 'react'
import "./footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
     <section id='footer'>
      <Container>
        <Row>
          <Col lg={2}>
            <div className="footer_left">
              <h2><a href="#">React-Bootstrap</a></h2>
              <h5>© Copyright Finsweet 2022</h5>
              <h6>(480) 555-0103</h6>
              <h6>4517 Washington Ave. </h6>
              <h6>finsweet@example.com</h6>
            </div>
          </Col>
          <Col lg={{span: 1, offset: 2}}>
            <div className="footer_middle">
              <h6>Quicklinks</h6>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Service</a>
              <a href="#">Blog</a>
            </div>
          </Col>
          <Col lg={2}>
          <div className="footer_icon">
             <h6>Connect</h6>
             <div className="ficon">
              <div className="ficon1">
              <a href="#"><FaFacebook /></a>
              </div>
              <div className="ficon2">
                <a href="#"><FaTwitterSquare /></a>
              </div>
              <div className="ficon3">
                <a href="#"><FaLinkedin /></a>
              </div>
             </div>
            </div>
          </Col>
          <Col lg={5}>
           <div className="footer_right">
            <h3>Subscribe to get Latest Updates and News</h3>
             <div className="subscribe-box">
               <input type="email" placeholder="Yourmail@gmail.com" className="email-input" />
               <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Footer