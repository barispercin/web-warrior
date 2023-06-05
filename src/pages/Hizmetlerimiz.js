import React from "react";
import Navbar from "./NavBar";
import Footer from "../Components/Footer";
import { Link } from "gatsby";
import { Button, Col, Row } from "react-bootstrap";
const Hizmetlerimiz = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "black", height: 600 }}>
        <Col style={{ paddingTop: 100 }}>
          <p style={{ color: "white", fontSize: 35, textAlign: "center" }}>
            ElephantApps mobil odaklı çalışan, kullanıcı deneyimine önem veren,
            dijital
            <br /> teknoloji geliştiren bir yazılım şirketidir.
          </p>
          <p
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              paddingTop: 30,
            }}
          >
            Hedefimiz son kullanıcı ile firmalar arasında köprü kurarak
            müşterilerimizin pazar payını artırmak ve kurumsal büyümeyi
            sağlamaktır.
          </p>
          <Row style={{ justifyContent: "center", paddingTop: 35 }}>
            s{" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                backgroundColor: "#ff5354",
                color: "white",
                width: 200,
                height: 40,
                borderRadius: 25,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                marginRight: 30,
                paddingTop: 10,
              }}
            >
              İŞLERİMİZİ GÖRÜNTÜLEYİN
            </Link>
            <Link
              to="/Hizmetlerimiz"
              style={{
                textDecoration: "none",
                backgroundColor: "gray",
                color: "white",
                width: 170,
                height: 40,
                borderRadius: 25,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              EKİBİMİZE KATILIN
            </Link>
          </Row>
        </Col>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: 105,
          backgroundColor: "#fafafa",
         
        }}
      >
        <p style={{ fontSize: 27, color: "red" }}>FRONTEND DEVELOPMENT</p>
        <Row style={{}}>
          <Col>
            <img
              style={{
                width: 360,
                height: 130,
                objectFit: "cover",
                marginTop: 110,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/83ebb42e6d746ea99927f4751893951a/b4480/pwareact.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 45 }}>
              React JS ile Progressive Web
              <br /> Uygulama Geliştirme
            </p>
          </Col>
          <Col>
            <img
              style={{
                width: 360,
                height: 165,
                objectFit: "cover",
                marginTop: 80,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/6ce05bdb99c012c9c183cb864b46f4d1/b4480/native.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 40 }}>
              Native Mobil Uygulama Geliştirme -<br /> iOS ve Android
            </p>
          </Col>
          <Col>
            <img
              style={{
                width: 360,
                height: 130,
                objectFit: "cover",
                marginTop: 110,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/57c08f778b81d9970e87227553a26dcb/b4480/react-native.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 47 }}>
              React-Native Crossplatform Mobil
              <br /> Uygulama Geliştirme
            </p>
          </Col>
        </Row>
        <p style={{ fontSize: 27, color: "red", marginTop: 150 }}>
          BACKEND DEVELOPMENT
        </p>
        <Row style={{}}>
          <Col>
            <img
              style={{
                width: 300,
                height: 130,
                objectFit: "cover",
                marginTop: 70,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/75dfe41b9447e9d4e2b1bda37784c866/b4480/database.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 20, marginTop: 45 }}>
              Veritabanı Uygulama
              <br />
              Geliştirme
            </p>
          </Col>
          <Col>
            <img
              style={{
                width: 300,
                height: 135,
                objectFit: "cover",
                marginTop: 70,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/a6e07c99e8708526797f3ff2a3bc16b0/b4480/appservice.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 20, marginTop: 40 }}>
              Uygulama Servisleri
              <br />
              Geliştirme
            </p>
          </Col>
          <Col>
            <img
              style={{
                width: 240,
                height: 170,
                objectFit: "cover",
                marginTop: 50,
                marginLeft: 10,
              }}
              src="https://elephantapps.co/static/27fc283589616ccc5881148b866ff34d/b4480/api.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 20, marginTop: 22 }}>API Geliştirme</p>
          </Col>
          <Col>
            <img
              style={{
                width: 250,
                height: 170,
                objectFit: "cover",
                marginTop: 60,
                marginLeft: 10,
              }}
              src="https://elephantapps.co/static/378f736f8f054b413aead7499363c74f/b4480/middleware.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 20, marginTop: 13 }}>
              Middleware Yazılım
              <br />
              Geliştirme
            </p>
          </Col>
        </Row>
        <p style={{ fontSize: 27, color: "red", marginTop: 130 }}>HARDWARE</p>
        <Row style={{}}>
          <Col>
            <img
              style={{
                width: 360,
                height: 170,
                objectFit: "cover",
                marginTop: 90,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/91ecaa4470b11527fbd4e5b32f76db10/b4480/hardwaredevelopment.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 35 }}>Doanım Geliştirme</p>
          </Col>
          <Col>
            <img
              style={{
                width: 360,
                height: 180,
                objectFit: "cover",
                marginTop: 90,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/static/350f36fb283f3374136f5d86aeb9ec9e/b4480/iotprojects.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 22 }}>IOT Projeleri</p>
          </Col>
          <Col>
            <img
              style={{
                width: 360,
                height: 130,
                objectFit: "cover",
                marginTop: 90,
                marginLeft: 25,
              }}
              src="https://elephantapps.co/tr/hizmetlerimiz/donanim-urunleri/"
              alt="Donanım Ürünleri"
            />
            <p style={{ fontSize: 24, marginTop: 47 }}>Donanım Ürünleri</p>
          </Col>
        </Row>
        <p style={{ fontSize: 27, color: "red", marginTop: 170,  }}>Consulting</p>
        <Row style={{}}>
          <Col style={{ marginLeft: 170, marginBottom:150 }}>
            <img
              style={{
                width: 270,
                height: 270,
                objectFit: "cover",
                marginTop: 30,
              }}
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 10 }}>
              Yazılım Proje Danışmanlığı
            </p>
          </Col>
          <Col>
            <img
              style={{
                width: 270,
                height: 270,
                objectFit: "cover",
                marginTop: 30,
                marginLeft: 0,
              }}
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Vodafone Image"
            />
            <p style={{ fontSize: 24, marginTop: 10 }}>IT Danışmanlığı</p>
          </Col>
          <Col style={{ marginRight: 170 }}>
            <img
              style={{
                width: 270,
                height: 270,
                objectFit: "cover",
                marginTop: 30,
              }}
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Donanım Ürünleri"
            />
            <p style={{ fontSize: 24, marginTop: 10 }}>MIS Danışmanlığı</p>
          </Col>
        </Row>
      </div>
      <Footer style={{}}></Footer>
    </div>
    
  );
};

export default Hizmetlerimiz;
