import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const UygulamaGelistirmeAsamalari = () => {
  return (
    <div style={{ backgroundColor: "#fafafa", paddingTop: 50 }}>
      <p
        style={{
          color: "red",
          marginTop: 30,
          marginBottom: 80,
          marginLeft: 25,
          fontSize: 11,
        }}
      >
        UYGULAMA GELİŞTİRME AŞAMALARI
      </p>
      <Row
        style={{
          textAlign: "center",
          fontSize: 14,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Col>
          <img
            style={{ height: 200, width: 300 }}
            src="https://elephantapps.co/static/9510bddccbd9231d52bb4ccadfcbf506/aa5a5/dev_design.webp"
            alt="React Image"
          />
          <h4 style={{ paddingTop: 15, paddingBottom: 5 }}>Görsel Tasarım</h4>
          <p>
            Farklı ekran boyutları ve retina çözünürlüklerine
            <br /> uygun Responsive ve Flat Design tasarımlar
            <br /> yaparız.
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 200, width: 300 }}
            src="https://elephantapps.co/static/7b4945f32e484a00ed7a1f85716e831e/aa5a5/dev_code.webp"
            alt="React Image"
          />
          <h4 style={{ paddingTop: 15, paddingBottom: 5 }}>Kodlama</h4>
          <p>
            Son teknolojileri takip eder; kendimizi sürekli
            <br /> geliştirerek kodlama yaparız.
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 200, width: 300 }}
            src="https://elephantapps.co/static/73a8a7b6bbf40471b252bd0925756cd0/aa5a5/dev_test.webp"
            alt="React Image"
          />
          <h4 style={{ paddingTop: 15, paddingBottom: 5 }}>Test ve Kabul</h4>
          <p>
            Çeşitli araçlar kullanıp uygulamaları test eder,
            <br /> kabul süreçlerinizde destek oluruz.
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 200, width: 300 }}
            src="https://elephantapps.co/static/0aaa9996862ba4a80acf0e76d59274bb/aa5a5/dev_launch.webp"
            alt="React Image"
          />
          <h4 style={{ paddingTop: 15, paddingBottom: 5 }}>Yayınlama</h4>
          <p>
            İster kendi hesaplarınızda, ister ElephantApps <br /> hesaplarında
            uygulamalarınızı yayınlarız.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default UygulamaGelistirmeAsamalari;
