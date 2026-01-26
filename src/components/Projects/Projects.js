import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Devsecops from "../../Assets/Projects/Devsecops.png";
import CoworkingSpace from "../../Assets/Projects/CoworkingSpace.jpg";
import MovieApp from "../../Assets/Projects/MovieApp.png";
import CompetitorMonitor from "../../Assets/Projects/landing page.png";
import GestionEvenements from "../../Assets/Projects/gestion des événements.png";
import SupportTicket from "../../Assets/Projects/SupportTicket.png";
import portfolio from "../../Assets/Projects/portfolio.png";

import Django from "../../Assets/TechIcons/Django.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Angular from "../../Assets/TechIcons/Angular.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernetes from "../../Assets/TechIcons/Kubernetes.svg";
import Prometheus from "../../Assets/TechIcons/Prometheus.svg";
import Grafana from "../../Assets/TechIcons/Grafana.svg";
import Trivy from "../../Assets/TechIcons/Trivy.png";
import Sonarcube from "../../Assets/TechIcons/sonarcube.png";
import OWASP from "../../Assets/TechIcons/OWASP.png";
import NGINX from "../../Assets/TechIcons/NGINX.svg";
import GitHubActions from "../../Assets/TechIcons/GitHub Actions.svg";
import Selenium from "../../Assets/TechIcons/Selenium.svg";
import Ollama from "../../Assets/TechIcons/ollama.png";
import PostgresSQL from "../../Assets/TechIcons/PostgresSQL.svg";
import Express from "../../Assets/TechIcons/express-js.png";
import Swagger from "../../Assets/TechIcons/Swagger.svg"; 
import Jasmine from "../../Assets/TechIcons/Jasmine.svg";
//import Karma from "../../Assets/TechIcons/Karma.svg";
import MySQL from "../../Assets/TechIcons/MySQL.svg";
import SpringBoot from "../../Assets/TechIcons/Spring.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";
import GraphQL from "../../Assets/TechIcons/GraphQL.svg";
import Pytest from "../../Assets/TechIcons/pytest.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CompetitorMonitor}
              title="Competitor Monitor System"
              description="This project is a web-based application to monitor competitor websites for key changes like price updates and new product launches. The system uses intelligent web scraping coupled with a local Large Language Model (LLM) to automatically extract and analyze product data."
              ghLink="https://github.com/wahib-bachoua/Django-competitor-monitor-system.git"
              demoLink=""
              techStack={[Django, Selenium, Ollama, PostgresSQL, Bootstrap, Pytest]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SupportTicket}
              title="web application for managing support tickets"
              description="This project is an application developed in NodeJS with ExpressJS, Angular and MongoDB, designed for managing support tickets in a school. It allows teachers to create tickets to request help on various topics, which are automatically assigned to specialized agents, with real-time notifications and status tracking."
              ghLink="https://github.com/wahib-bachoua/Support-Ticket-Management-Frontend.git"
              demoLink=""
              techStack={[Node, Express, Angular, Mongo, Swagger, Jasmine ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devsecops}
              title="Design and Implementation of a Secure CI/CD Pipeline"
              description="This project presents the design and implementation of a complete CI/CD pipeline for a full-stack web application (Angular/Node.js). The project, carried out using the Agile SCRUM methodology, covers continuous integration with GitHub Actions, Docker containerization, deployment on Kubernetes (Minikube), and the implementation of a monitoring system with Prometheus and Grafana. Automated testing, code quality analysis (SonarCloud), and security scans (Trivy, OWASP) ensure reliable and secure releases."
              ghLink="https://github.com/wahib-bachoua/K8s-Deployments.git"
              demoLink=""
              techStack={[
                NGINX,
                Docker,
                GitHubActions,
                Trivy,
                Sonarcube,
                OWASP,
                Kubernetes,
                Prometheus,
                Grafana,
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieApp}
              title="Movies-App"
              description="Movies-App is a streaming platform built with Angular 19 and spring boot. It allows users to browse and watch movies with an intuitive interface, the backend API is designed to manage a movie collection, with the ability to add, modify, delete, and retrieve movies. Each movie can be associated with an image (poster) and a trailer URL. The project follows the MVC architecture with Spring Boot, JPA/Hibernate, and a relational database."
              ghLink="https://github.com/wahib-bachoua/MoviesApp.git"
              demoLink=""
              techStack={[ Node, Express, Angular, Bootstrap, MySQL]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CoworkingSpace}
              title="Smart Booking System for Coworking Spaces"
              description="This project is a complete GraphQL API for managing coworking space bookings, developed with Node.js, Apollo Server and MongoDB, enabling dynamic booking management with rigorous real-time availability validation. It allows users to create, modify, and cancel bookings while ensuring no scheduling conflicts occur."
              ghLink="https://github.com/wahib-bachoua/GraphQL-smart-reservation-frontend.git"
              demoLink=""
              techStack={[Node, Express, GraphQL, Angular, Bootstrap, Mongo]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GestionEvenements}
              title="Real-Time Event Management Web Application"
              description="This app allows users to create, join, and participate in real-time community events. It's ideal for local events, workshops, interest groups, or even virtual meetings. The goal is to provide an interactive space where participants can exchange ideas, follow event updates, and interact via live chat."
              ghLink="https://github.com/wahib-bachoua/gestionEvenements.git"
              demoLink=""
              techStack={[SpringBoot, Angular, Bootstrap, MySQL]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="My Portfolio"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/wahib-bachoua/portfolio.git"
              techStack={[ReactIcon, Node, Express]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
