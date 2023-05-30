import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        paddingLeft: 25,
        paddingTop: 100,
        height: 400,
      }}
    >
      <Row>
        <Col style={{}}>
          <p style={{ fontSize: 11, fontWeight: "bold" }}>ELEPHANTAPPS</p>
          <p style={{ color: "gray", fontSize: 15 }}>Hayatını Kolaylaştırır.</p>
        </Col>
        <Col style={{}}>
          <p style={{ fontSize: 11, fontWeight: "bold" }}>HAKKIMIZDA</p>

          <Link
            to="/Hakkimizda"
            style={{ textDecoration: "none", color: "gray", fontSize: 15 }}
          >
            Hakkımızda
            <br />
          </Link>
          <Link
            to="/Hizmetlerimiz"
            style={{ textDecoration: "none", color: "gray", fontSize: 15 }}
          >
            Hizmetlerimiz
            <br />
          </Link>
          <Link
            to="/Islerimiz"
            style={{ textDecoration: "none", color: "gray", fontSize: 15 }}
          >
            İşlerimiz
          </Link>
        </Col>
        <Col style={{}}>
          <p style={{ fontSize: 11, fontWeight: "bold" }}>KARİYER</p>
          <Link
            to="/Kariyer"
            style={{ textDecoration: "none", color: "gray", fontSize: 15 }}
          >
            Açık Pozisyonlar
          </Link>
        </Col>
        <Col style={{}}>
          <p style={{ fontSize: 11, fontWeight: "bold" }}>İLETİŞİM</p>
          <p style={{ color: "gray", fontSize: 15 }}>
            Genel Merkez — TR: +90 (216) 225-8364
          </p>
          <p style={{ color: "gray", fontSize: 15 }}>
            ABD Ofis — USA: +1 305-521-3378
          </p>
          <p style={{ color: "gray", fontSize: 15 }}>info@elephantapps.co</p>
          <AiOutlineInstagram
            style={{ width: 30, height: 30, color: "gray" }}
          ></AiOutlineInstagram>
          <AiFillTwitterSquare
            style={{ width: 30, height: 30, color: "gray" }}
          ></AiFillTwitterSquare>
          <AiOutlineLinkedin
            style={{ width: 30, height: 30, color: "gray" }}
          ></AiOutlineLinkedin>
          <AiOutlineFacebook
            style={{ width: 30, height: 30, color: "gray" }}
          ></AiOutlineFacebook>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
