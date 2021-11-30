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
            <Card.Title> Beslenme </Card.Title>
            <Card.Text>Beslenme ihtiyaçlarınızı karşılamak (tahıllar, meyveler, sebzeler, proteinler, süt ürünleri ve sağlıklı yağlar) tüketmelisiniz.</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card2 " border="secondary">
          <Card.Header>Online Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            <Card.Title> Uzaktan Takip </Card.Title>
            <Card.Text>Bizlere gün içerisinde hızlı bir şekilde ulaşabilir, zamandan tasarruf sağlayabilirsiniz.</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card3 " border="success">
          <Card.Header>Sporcu Beslenmesi</Card.Header>
          <Card.Body>
            <Card.Title>Sporda Enerji</Card.Title>
            <Card.Text>Spor esnasında kaslardaki glikojen depolarını dolu tutmak  spor yaparken kas kaybını önler.</Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="card card4 " border="danger">
          <Card.Header>Kurumsal Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            <Card.Title>Başarı ve Motivasyon</Card.Title>
            <Card.Text>Çalışanların sağlıklı yaşamaları için önemli bir yatırımdır.</Card.Text>
          </Card.Body>
        </Card>

        <br />
      </div>
    </div>
  );
}

export default About;
