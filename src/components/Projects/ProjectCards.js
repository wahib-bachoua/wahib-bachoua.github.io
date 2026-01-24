import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);
  const description = props.description;
  const isLongDescription = description.length > 150;
  const displayDescription =
    expanded || !isLongDescription
      ? description
      : description.substring(0, 150) + "...";

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {props.techStack && props.techStack.length > 0 && (
          <div
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {props.techStack.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="tech-icon"
                style={{ width: "30px", height: "30px" }}
              />
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify" }}>
          {displayDescription}
        </Card.Text>

        {isLongDescription && (
          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            <span
              onClick={() => setExpanded(!expanded)}
              style={{
                color: "#c770f0",
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {expanded ? "Read Less" : "Read More"}
            </span>
          </div>
        )}

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link  then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
