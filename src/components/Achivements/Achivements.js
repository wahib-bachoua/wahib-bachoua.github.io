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
          
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://cdn.qwiklabs.com/KL76j4TVMguwIkrbJ%2FL3LOpCTYHAGjRiEv2dUHLbeFY%3D"
              title="Introduction to GenAI"
              detailsLink="https://www.skills.google/public_profiles/77876095-1e04-4cc2-89c7-3bb90f6c2b6a/badges/22769730"
            />
          </Col>
            <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://cdn.qwiklabs.com/k9QPlamtqAYqyBDn0hIOWr%2BBoJxznnibFblS%2Fsn%2Fgns%3D"
              title="Introduction to Large Language Models"
              detailsLink="https://www.skills.google/public_profiles/77876095-1e04-4cc2-89c7-3bb90f6c2b6a/badges/22801004"
            />
          </Col>
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://cdn.qwiklabs.com/KFb7gLKebthw1KJHf%2F88XmcqyUuizS6TppVyZ1AR9bA%3D"
              title="Introduction to Responsible AI"
              detailsLink="https://www.skills.google/public_profiles/77876095-1e04-4cc2-89c7-3bb90f6c2b6a/badges/22801091"
            />
          </Col>
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://cc.sj-cdn.net/certificate/3n2veylcj0hl/certificate-ph3orf9smuqh-1772859264.jpg?Expires=1773109805&Signature=BRPPgXONarxXv7obWd5F4upVcaAwlqEuLQEKcTO~8cc5ZGPQc1eldCFFFczf8onGoP~--IYfDTAc~fPsg40nrqTuqF1pYUa0Pcxm6CpTBoqN0FbWyob~7RjgHmA2Bj4P8~ejJrn~DjumHQCPDDFaJKXAMxi~Q9a1bx9ABxhKSQe6Sd1OCf6x-PCuzIL34na9sOBgP940jsMsgrLPlZx1YjxK4z9l8Weby4y3QNO48jrauIQ1wwXjFQGunzqIA9bOQc7sQsr-UqwxnmSqak18r2NxP81lja5I5Gjeb1e3LQOZkRmr3Z7-Ht0V~YYFf~vu50afD~iwSTI0RvO-hDaogw__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ"
              title="Claude Code in Action"
              detailsLink="https://verify.skilljar.com/c/ph3orf9smuqh"
            />
          </Col>

          <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://images.credly.com/images/234edfc5-0177-46e7-a61a-071f060af2f6/blob"
              title="Relational Document Model"
              detailsLink="https://www.credly.com/badges/227ab037-728d-4e83-8c3f-458c15d8a942/linked_in_profile"
            />
          </Col>
            <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://images.credly.com/images/2aff887d-ee1e-479f-b26f-dcb20d647bd6/blob"
              title="Building RAG Apps"
              detailsLink="https://www.credly.com/badges/c3110067-2098-499d-a62e-39b92d0f24a2/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <AchivementCards
              imgPath="https://images.credly.com/size/680x680/images/730e9c82-7869-4288-b580-9f8500a94465/blob"
              title="Vector Search Fundamentals"
              detailsLink="https://www.credly.com/badges/d267e8e5-3f24-454a-86df-2c427dd4d9cd/public_url"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Achivements;
