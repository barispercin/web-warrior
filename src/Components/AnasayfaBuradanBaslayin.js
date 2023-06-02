import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
const BuradanBaslayin = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Col style={{ paddingLeft: 140, marginBottom:50 }}>
        <p
          style={{
            fontsize: 11,
            color: "red",
            marginBottom: 30,
            paddingTop: 30,
          }}
        >
          BURADAN BAŞLAYIN
        </p>
        <p style={{ fontSize: 22, color:"dimgray", paddingTop:7 }}>
          Bize aklınızdaki projeyi anlatın, uygulamanızı birlikte hayata
          geçirelim.
        </p>
        <BsTelephone
          style={{ height: 50, width: 32, color: "gray",  marginTop:7 }}
        ></BsTelephone>
        <p style={{ color: "gray",  paddingTop:15 }}>+90 (216) 225-8364</p>
        <GoMail style={{ height: 50, width: 35, color: "gray",  marginTop:7 }}></GoMail>
        <p style={{ paddingBottom: 80, color: "gray", paddingTop:13 }}>info@elephantapps.co</p>
      </Col>
      <Row style={{}}>
        <Col>
          <img
            style={{ height: 230, width: 420 }}
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 11, paddingTop: 25, textAlign: "center" }}>
            BİZ KİMİZ?
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 230, width: 420 }}
            src="https://elephantapps.co/static/76a4322f72fbbdcedbff7ac1f4aa2f8b/aa5a5/fin_02.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 11, paddingTop: 20, textAlign: "center" }}>
            NE YAPARIZ?
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 230, width: 420 }}
            src="https://elephantapps.co/static/51999ba0b0f18b07884722926d2db789/aa5a5/fin_03.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 11, paddingTop: 25, textAlign: "center" }}>
            İŞLERİMİZ
          </p>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: 80,
          justifyContent: "space-between",
          paddingInline: 220,
        }}
      >
        <img
          style={{ height: 150, width: 250 }}
          src="https://assets.goodfirms.co/badges/color-badge/app-development.svg"
          alt="React Image"
        />
        <img
          style={{ height: 110, width: 350 }}
          src="https://i.ibb.co/TLWdCNd/trustpilot-logo.png"
          alt="React Image"
        />
      </Row>
    </div>
  );
};

export default BuradanBaslayin;
