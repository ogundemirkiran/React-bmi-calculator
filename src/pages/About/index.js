import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div className="bgAbout">
      <div className="cardList">
        <Card className="card card1" border="primary">
          <Card.Header className="cardText">
            Diyet ve Sağlıklı Beslenme
          </Card.Header>
          <Card.Body className="cardText">
            <Card.Title> Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card2 " border="secondary">
          <Card.Header>Online Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            <Card.Title> Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card3 " border="success">
          <Card.Header>Sporcu Beslenmesi</Card.Header>
          <Card.Body>
            <Card.Title> Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card4 " border="danger">
          <Card.Header>Kurumsal Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            <Card.Title> Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the</Card.Text>
          </Card.Body>
        </Card>

        <br />
      </div>
    </div>
  );
}

export default About;
