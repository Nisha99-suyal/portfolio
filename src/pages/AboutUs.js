import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import AboutImg from "../Images/aboutImg.svg";

export default function AboutUs() {
  return (
    <Container className="my-4">
      <Row className="about-section">
        <Col className="about-img-section">
          <img className="about-img" src={AboutImg} alt="about image" />
        </Col>
        <Col className="about-text-section">
          <h1 className="about-heading">
            I'm a Front-end Developer with over 3+ years of experience.
          </h1>
          <p className="about-para my-4">
            Hey there! 👋 I'm a self-taught Front End developer from India with
            2+ years of expertise in HTML, CSS, Bootstrap, JavaScript, jQuery,
            React, NodeJS, MongoDB, ChakraUI, and Hubspot. I specialize in
            translating designs into pixel-perfect, responsive interfaces and am
            passionate about creating inclusive web experiences. A problem
            solver at heart, I'm dedicated to maintaining clean and scalable
            code. 🚀 Recently incorporating ReactJS, I stay updated on industry
            trends and thrive on collaborative projects that prioritize
            user-friendly and engaging web applications. Let's connect and build
            something extraordinary! 💻✨
          </p>
          <Button
            className="connect-btn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/nishasuyal/");
            }}
          >
            <span>
              Let's Connect😊 <FaArrowRight />{" "}
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
