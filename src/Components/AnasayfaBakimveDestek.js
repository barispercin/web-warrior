import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const BakimveDestek = () => {
  return (
    <div style={{ backgroundColor: "#fafafa", paddingTop: 100, height: 480 }}>
      <p
        style={{
          color: "red",
         
          fontsize:11,
          marginLeft: 25,
          fontSize: 12,
        }}
      >
        BAKIM VE DESTEK
      </p>
      <p
        style={{
          color: "dimgray",
          fontSize: 18,
          marginLeft: 25,
          paddingTop: 150,
          paddingBottom: 200,
        }}
      >
        Geliştirdiğimiz uygulamaları yeni teknolojiler ile uyumlu hale getirir,
        hata denetimleri ve düzeltmelerini yaparız.
      </p>
    </div>
  );
};

export default BakimveDestek;
