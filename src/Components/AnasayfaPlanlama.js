import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const Planlama = () => {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <p
        style={{
          marginTop: 100,
          marginBottom: 50,
          marginLeft: 40,
          paddingTop: 100,
          fontSize: 14,
          fontWeight:600
        }}
      >
        ELEPHANTAPPS UYGULAMA YAŞAM DÖNGÜSÜ
      </p>

      <p
        style={{
          color: "red",
          marginBottom: 50,
          marginLeft: 40,
          fontSize: 14,
        }}
      >
        Planlama
      </p>
      <Row>
        <Container
          style={{
            backgroundColor: "white",
            marginLeft: 30,
            padding: 20,
            width: 700,
            height:300
            
          }}
        >
          <p
            style={{
              color: "red",
              paddingTop: 30,
              marginBottom: 30,
              marginLeft: 10,
              fontSize: 14,
            }}
          >
            Ne Yaparız?
          </p>
          <Container>
          <h3>Kurumsal uygulamalar geliştiririz.</h3>
          <p style={{fontSize:13,marginTop:30, color:"gray"}}>
            Deneyimli ve kendini sürekli geliştiren ekibimizle yeni fikirler ve
            yeni teknolojiler üretiriz.
            <br /> Uygulamaların yaşam döngüsü analizlerini yapar, geliştirme ve
            yayınlama süreçlerini kusursuzca<br/> planlarız.
          </p>
          </Container>
        </Container>
          <Col style={{paddingLeft:50, paddingTop:30}}>
          <Row>
          <Col>
            <p style={{fontSize:18}}>İhtiyaçların Belirlenmesi</p>
            <p style={{fontSize:13}}>
              Doğru analizler ve teknolojik  çözümlerle<br /> ihtiyaçlarınızı
              eksiksiz
               tespit ederiz.
            </p>
          </Col>
          <Col>
            <p style={{fontSize:18}}>Sistem Tasarım</p>
            <p style={{fontSize:13}}>
              Kullanıcı deneyimine ve modern tasarım
              <br /> trendlerine göre uygulamalarınızı
              <br /> tasarlarız
            </p>
          </Col>
          </Row>
          <Row>
          <Col>
            <p style={{fontSize:18}}>Stratejik Sistem Analizi</p>
            <p style={{fontSize:13}}>
              Rakip firma ve uygulamaları araştırır, size
              <br /> en uygun sistemi planlarız.
            </p>
          </Col>
          <Col>
            <p style={{fontSize:18}}>Proje Planı ve Maliyet Analizi</p>
            <p style={{fontSize:13}}>
              Proje planlamalarımızı müşterilerimize
              <br /> uygun zaman ve maliyetler
              <br /> doğrultusunda gerçekleştiririz.
            </p>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Planlama;
