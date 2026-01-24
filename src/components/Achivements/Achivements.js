import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchivementCards from "./AchivementCards";
import Particle from "../Particle";
import Github from "../../Assets/certifications/Intermediate github concepts.png";
import Python_1 from "../../Assets/certifications/Python_Essentials_1_certificate.png";
import Python_2 from "../../Assets/certifications/Python_Essentials_2_certificate.png";
import gitops from "../../Assets/certifications/lfs169-introduction-to-gitops.png";

function Achivements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Achivements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've gained recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath={Python_1}
              title="Python Essentials 1"
              description=""
              detailsLink="https://www.credly.com/badges/c1976fcc-5ad7-48a7-86f3-0215214fc68a/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath={Python_2}
              title="Python Essentials 2"
              description=""
              detailsLink="https://www.credly.com/badges/d294c6dd-e74d-42e0-8feb-62193979ce5c/public_url"
            />
          </Col>          

          <Col md={4} className="project-card">
            <AchivementCards
              imgPath={Github}
              title="Intermediate github concepts"
         //     description="This course is perfect for those who want to dive deeper into GitHub Projects, automation with GitHub Actions, and advanced security features. By the end, you'll be able to manage complex workflows, enhance team collaboration, and secure your projects more effectively."
              detailsLink="https://www.datacamp.com/completed/statement-of-accomplishment/course/4d5af1fc67343ec2a1f97d413d9e4dd6ccfa0a06"
            />
          </Col>

          <Col md={4} className="project-card">
            <AchivementCards
              imgPath={gitops}
              title="Introduction to GitOps"
//description="Introduction to GitOp badge can explain what GitOps is, along with its key principles, practices and technologies within the context of setting up Continuous Delivery on Kubernetes. They understand the two reconciliation models and three main tools used to implement GitOps on Kubernetes. They understand the benefits of GitOps: how to set up infrastructure, roll out applications and recover from a disaster, all using developer-friendly git-based workflows."
              detailsLink="https://www.credly.com/badges/54d1fdd2-95ee-4163-be80-a718d5fd3fea/public_url"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achivements;
