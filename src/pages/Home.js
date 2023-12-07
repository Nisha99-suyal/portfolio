import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai'
import { Container, Row, Col } from 'react-bootstrap';
import Img from "../Images/front.png";
import GlobeAnimation from "../components/GlobeAnimation";

export default function Home() {
  return (
    <>
      <GlobeAnimation />
      <Container className="home-section">
        <Row>
          <Col className="home-left">
            <div className="left-home-text">
              <h1>
                Hello <span class="wave">👋</span>
              </h1>
              <h1>I'm <span>Nisha Suyal</span></h1>
              <h1>
                <Typewriter options={{strings: ["Frontend Developer !!"],autoStart: true,loop: true,}}/>
              </h1>
              <div className="social-icons">
                <a href="https://github.com/Nisha99-suyal" target="_blank" className="github"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nishasuyal/" target="_blank" className="linkedIn"><FaLinkedinIn /></a>
                <a href="https://instagram.com/nisha_s1506?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="Instagram"><FaInstagram /></a>
                <a href="mailto: nishasuyal229@gmail.com" target="_blank" className="mail"><AiOutlineMail /></a>
              </div>
            </div>
          </Col>
          <Col className="home-right">
            <img className="home-img" src={Img} alt="alt" width={"100%"} height={"100%"} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
