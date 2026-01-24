import React from "react";
import { Col, Row } from "react-bootstrap";
import Grafana from "../../Assets/TechIcons/Grafana.svg";
import Prometheus from "../../Assets/TechIcons/Prometheus.svg";
import Terraform from "../../Assets/TechIcons/Terraform.png";
import Jinkins from "../../Assets/TechIcons/Jenkins.svg";
import Gitlab from "../../Assets/TechIcons/Gitlab.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernetes from "../../Assets/TechIcons/Kubernetes.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Postman} alt="postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons ">
        <img src={Docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Kubernetes} alt="kubernetes" className="tech-icon-images" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Gitlab} alt="Gitlab" className="tech-icon-images" />
        <div className="tech-icons-text">Gitlab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jinkins} alt="Jinkins" className="tech-icon-images" />
        <div className="tech-icons-text">Jinkins</div>  
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Terraform} alt="Terraform" className="tech-icon-images" />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Prometheus} alt="Prometheus" className="tech-icon-images" />  
        <div className="tech-icons-text">Prometheus</div> 
      </Col>
   <Col xs={4} md={2} className="tech-icons ">
        <img src={Grafana} alt="Grafana" className="tech-icon-images" />
        <div className="tech-icons-text">Grafana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
