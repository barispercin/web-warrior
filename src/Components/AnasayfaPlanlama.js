import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { GoClock } from "react-icons/go";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TbDeviceAnalytics } from "react-icons/tb";
import { AiOutlineProject } from "react-icons/ai";

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
          fontWeight: 600,
        }}
      >
        ELEPHANTAPPS UYGULAMA YAŞAM DÖNGÜSÜ
      </p>

      <p
        style={{
          color: "red",
          fontSize: 14,
          marginBottom: 50,
          marginLeft: 40,
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
            height: 370,
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
            <p style={{ fontSize: 13, marginTop: 30, color: "dimgray" }}>
              Deneyimli ve kendini sürekli geliştiren ekibimizle yeni fikirler
              ve yeni teknolojiler üretiriz.
              <br /> Uygulamaların yaşam döngüsü analizlerini yapar, geliştirme
              ve yayınlama süreçlerini kusursuzca
              <br /> planlarız.
            </p>
          </Container>
        </Container>
        <Col style={{ paddingLeft: 50, paddingTop: 10 }}>
          <Row>
            <Col>
              <p style={{ fontSize: 19 }}>İhtiyaçların Belirlenmesi</p>
              <HiOutlineMagnifyingGlass
                style={{ width: 40, height: 40, color: "gray",marginBottom:20 }}
              ></HiOutlineMagnifyingGlass>
              <p style={{ fontSize: 16, color: "dimgray", lineHeight: 1.1 }}>
                Doğru analizler ve teknolojik
                <br /> çözümlerle ihtiyaçlarınızı eksiksiz
                <br /> tespit ederiz.
              </p>
            </Col>
            <Col>
              <p style={{ fontSize: 19 }}>Sistem Tasarım</p>
              <TbDeviceAnalytics
                style={{ width: 40, height: 40, color: "gray",marginBottom:20 }}
              ></TbDeviceAnalytics>
              <p style={{ fontSize: 16, color: "dimgray", lineHeight: 1.1 }}>
                Kullanıcı deneyimine ve modern tasarım trendlerine göre
                <br /> uygulamalarınızı tasarlarız
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ fontSize: 19 }}>Stratejik Sistem Analizi</p>
              <GoClock
                style={{ width: 40, height: 40, color: "gray",marginBottom:20 }}
              ></GoClock>
              <p style={{ fontSize: 16, color: "dimgray", lineHeight: 1.1 }}>
                Rakip firma ve uygulamaları
                <br /> araştırır, size en uygun sistemi
                <br /> planlarız.
              </p>
            </Col>
            <Col>
              <p style={{ fontSize: 19 }}>Proje Planı ve Maliyet Analizi</p>
              <AiOutlineProject
                style={{ width: 40, height: 40, color: "gray",marginBottom:20 }}
              ></AiOutlineProject>
              <p style={{ fontSize: 16, color: "dimgray", lineHeight: 1.1 }}>
                Proje planlamalarımızı
                <br /> müşterilerimize uygun zaman ve
                <br /> maliyetler doğrultusunda
                <br /> gerçekleştiririz.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Planlama;
