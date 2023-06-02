import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const Merhaba = () => {
  return (
    <div style={{marginTop:100}}>
      <p
        style={{
          color: "red",
          marginTop: 50,
          marginBottom: 50,
          marginLeft: 40,
          fontSize: 12,
        }}
      >
        MERHABA.
      </p>
      <Row style={{ margin: 30 }}>
        <Col style={{ marginTop: 160 }}>
          <h1 style={{}}>
            Kullanici deneyimlerine çok önem <br /> veriyor, en son
            teknolojilerle web ve <br /> mobil çözümler geliştiriyoruz.
          </h1>
          <p style={{ color: "gray" }}>
            Analiz, tasarım, yazılım ve danışmanlık hizmeti veren ekibimizle
            sürekli yeni fikirler ve yeni teknolojiler <br />
            üretiyoruz.
          </p>
        </Col>

        <img
          style={{ height: 600, width: 400, marginRight: 100 }}
          src="https://elephantapps.co/static/bg_elephantappsipad-949684c397b635738cc53cb583791e8f.webp"
          alt="React Image"
        />
      </Row>
    </div>
  );
};

export default Merhaba;
