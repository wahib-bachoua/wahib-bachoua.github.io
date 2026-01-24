import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Wahib Bachoua</span>{" "}.
            <br />
            I'm a final-year  {" "}
            <span className="purple">Software Engineer</span> student at{" "}
            <span className="purple">TEK-UP University of Digital Sciences</span>.
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired such as :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new things 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Wahib Bachoua</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
