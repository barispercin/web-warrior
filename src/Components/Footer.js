import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, } from "react-bootstrap";
const Footer= () => {
  return (
    <div style={{ backgroundColor: "#fafafa", paddingLeft:25, paddingTop:100 }}>
        <Row>
      <Col style={{}}>
      <p style={{fontSize:11,fontWeight:"bold"}}>ELEPHANTAPPS</p>
      <p style={{color:"gray",fontSize:15}}>Hayatını Kolaylaştırır.</p>
      </Col>
      <Col style={{}}>
      <p style={{fontSize:11, fontWeight:"bold"}}>HAKKIMIZDA</p>
      <p style={{color:"gray",fontSize:15}}>Hakkımızda</p>
      <p style={{color:"gray",fontSize:15}}>Hizmetlerimiz</p>
      <p style={{color:"gray",fontSize:15}}>İşlerimiz</p>
      </Col>
      <Col style={{}}>
      <p style={{fontSize:11,fontWeight:"bold"}}>KARİYER</p>
      <p style={{color:"gray",fontSize:15}}>Açık Pozisyonlar</p>
      </Col>
      <Col style={{}}>
      <p style={{fontSize:11,fontWeight:"bold"}}>İLETİŞİM</p>
      <p style={{color:"gray",fontSize:15}}>Genel Merkez — TR: +90 (216) 225-8364</p>
      <p style={{color:"gray",fontSize:15}}>ABD Ofis — USA: +1 305-521-3378</p>
      <p style={{color:"gray",fontSize:15}}>info@elephantapps.co</p>
    
      </Col>
      </Row>
    </div>
  );
};

export default Footer;
