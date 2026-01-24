import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-modified.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              I'm Software Engineer, Skilled in {" "}
              <i>
                <b className="purple">
                  Web Development {" "}
                </b>
              </i>
              using modern frameworks like
              <i>
                <b className="purple">
                  {" "}
                  (Node.js, Spring Boot, Next.js and Angular).{" "}
                </b>
              </i>
               Passionate about  
              <i>
                <b className="purple">
                  {" "}
                 integrating AI {" "}
                </b>
              </i>
               based solutions, with strong hands-on experience in  
              
              <i>
                <b className="purple">
                  {" "}
                  DevOps, CI/CD automation, container orchestration 
                </b>
                ,
                {" "}and{" "}
                <b className="purple">
                  AWS cloud infrastructure
                </b>  
                .
              </i>
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
