import React from "react";
import Navbar from "./NavBar";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../Components/Footer";

const NativeiOSDev = () => {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div>
        <Navbar />
      </div>
      <p style={{ fontSize: 40, textAlign: "center", marginTop: 70 }}>
        Ekibimize Katılın
      </p>
      <p
        style={{
          fontSize: 23,
          textAlign: "center",
          color: "dimgray",
          marginTop: 50,
        }}
      >
        Native iOS Developer (Mid-Senior Level)
      </p>
      <Col style={{ paddingLeft: 25 }}>
        <p style={{ fontSize: 21, color: "dimgray", marginTop: 50 }}>
          Job Description
        </p>
        <Row>
        
        <p style={{ fontSize: 16, marginTop: 5 }}>
          Responsible for development, programming, coding of complex and
          business-critical Information Technology solutions using Swift
        </p>
        </Row>
        <p style={{ fontSize: 16, marginTop: 5 }}>
          Responsible to complete tasks in due time. Working as a team member
          using Slack, Git, and Task management software
        </p>
        <p style={{ fontSize: 16, marginTop: 5 }}>
          Remote working options available
        </p>

        <p style={{ fontSize: 21, color: "dimgray", marginTop: 7 }}>
          Required Skills
        </p>
        <p style={{ fontSize: 16, marginTop: 5 }}>Strong knowledge of Xcode</p>
        <p style={{ fontSize: 21, color: "dimgray", marginTop: 7 }}>
          Required Experience
        </p>
        <p style={{ fontSize: 16, marginTop: 5 }}>
          At least 2 years of experience and proficiency in developing
          applications using Swift
        </p>
        <p style={{ fontSize: 21, color: "dimgray", marginTop: 7 }}>
          Preferred Education
        </p>
        <p style={{ fontSize: 16, marginTop: 5 }}>
          Bachelor’s Degree in Computer Science, Software/Computer Engineering
          or a closely related field
        </p>
        <Container
                style={{
                marginLeft:3,
               marginTop:40,
                  width: 95,
                  height: 40,
                  borderRadius: 35,
                  backgroundColor: "#ff5354",
                }}
              >
                <p
                  style={{
                    paddingTop: 8,
                    color: "white",
                    fontSize: 13,
                    fontStyle: "bold",
                    textAlign: "center",
                  }}
                >
                  APPLY
                </p>
              </Container>
              <p style={{ fontSize: 22, color: "dimgray", marginTop: 30}}>Share:</p>
              
      </Col>
      <Row style={{}}>
        <Col>
          <img
            style={{ height: 230, width: 420 }}
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 12, paddingTop: 25, textAlign: "center" }}>
            HAKKIMIZDA
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 230, width: 420 }}
            src="https://elephantapps.co/static/76a4322f72fbbdcedbff7ac1f4aa2f8b/aa5a5/fin_02.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 12, paddingTop: 20, textAlign: "center" }}>
            HİZMETLERİMİZ
          </p>
        </Col>
        <Col>
          <img
            style={{ height: 230, width: 432 }}
            src="https://elephantapps.co/static/51999ba0b0f18b07884722926d2db789/aa5a5/fin_03.webp"
            alt="React Image"
          />

          <p style={{ fontSize: 12, paddingTop: 25,marginBottom:110, textAlign: "center" }}>
            İŞLERİMİZ
          </p>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default NativeiOSDev;
