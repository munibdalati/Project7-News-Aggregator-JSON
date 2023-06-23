import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/index.css";
import { AllNews } from "../newsData";

function Story() {
  return (
    <div className="story-row ">
      {AllNews.map((e) => (
        <div className="story" key={e.id}>
          <img src={e.image} alt={e.name} />
          <span
            className="story-name "
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            {e.publisher}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Story;
