import React from "react";
import Navbar from "./NavBar";

import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
const Iletisim = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{backgroundColor:"#fafafa"}}>
      <Col style={{textAlign:"center", paddingTop:60, paddingBottom:40 }}>
      <p style={{letterSpacing: 1, fontWeight:"400", fontSize:30 }}>İletişim</p>    

        </Col>
      <Row style={{}}> 
       
        <Col style={{textAlign:"center"}}>
          <p style={{ fontWeight: 400 }}>GENEL MERKEZ</p>
          <TfiLocationPin
            style={{ height: 50, width: 100, color: "gray" }}
          ></TfiLocationPin>
          <p style={{color: "gray"}}>
            İçerenköy Mh. Topçu İbrahim Sk. (E-5 Yan yol üzeri) AND Binası No:
            <br />
            8/10D İç Kapı No: 5, Kozyatağı, Ataşehir, İSTANBUL / TÜRKİYE
          </p>
          <BsTelephone
            style={{ height: 50, width: 100, color: "gray" }}
          ></BsTelephone>
          <p style={{color: "gray"}}>+90 (216) 225-8364</p>
        </Col>

        <Col style={{textAlign:"center"}}>
          <p style={{ fontWeight: 400, letterSpacing: 1 }}>ABD OFİS</p>
          <TfiLocationPin
            style={{ height: 50, width: 100, color: "gray" }}
          ></TfiLocationPin>
          <p style={{color: "gray"}}>2540 Shell Road STE C, Georgetown TX 78628 / USA</p>
          <BsTelephone
            style={{ height: 50, width: 100, color: "gray" }}
          ></BsTelephone>
          <p style={{color: "gray"}}>+1 305-521-3378</p>
        </Col>
      </Row>
<Container style={{textAlign:"center", marginBottom:55}}>
      <GoMail style={{ height: 50, width: 100, color: "gray" }}></GoMail>
      <p style={{color: "gray"}}>info@elephantapps.co</p>
      </Container>
      <Footer/>
      </div>
    </div>
  );
};

export default Iletisim;
