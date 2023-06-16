import React from "react";
import Navbar from "./NavBar";
import { Button, Col, Row } from "react-bootstrap";
import Ekip from "../Components/HakkimizdaEkip";
import Footer from "../Components/Footer";
import { Link } from "gatsby";
const Hakkimizda = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Navbar />
      </div>

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
          <Link to="/"
            style={{textDecoration:"none",
              backgroundColor: "#ff5354",
              color:"white",
              width: 130,
              height: 40,
              borderRadius: 25,
              fontSize: 11,
              fontWeight: "bold",
              textAlign: "center",
              marginRight: 30,
              paddingTop:10
            }}
          >
            NE YAPARIZ?
          </Link>
          <Link to="/Hizmetlerimiz"
            style={{textDecoration:"none",
              backgroundColor: "gray",
              color:"white",
              width: 110,
              height: 40,
              borderRadius: 25,
              fontSize: 11,
              fontWeight: "bold",
              textAlign: "center",
              paddingTop:10
            
            }}
          >
            İŞLERİMİZ
          </Link>
        </Row>
      </Col>
  
      <Ekip />
      <Footer />
    </div>
  );
};

export default Hakkimizda;
