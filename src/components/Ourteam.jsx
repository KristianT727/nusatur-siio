import "../styles/stylesaboutus.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ourteamcard from "./Ourteamcard";
import tika from "../img/tika.png";
import bintang from "../img/bintang.png";
import fahri from "../img/fahri.png";
import kristian from "../img/kristian.png";
import nafiz from "../img/nafiz.png";
import sunia from "../img/sunia.png";
import siti from "../img/siti.png";
import rizal from "../img/rizal.png";
import {} from "react-bootstrap";

const Ourteamcomp = () => {
  return (
    <>
      <section
        style={{
          textAlign: "center",
          width: 250,
          margin: "auto",
        }}
      >
        <h1 className="text-ourteam">Our Team</h1>
        <div className="underline" />
      </section>

      <section className="ourteam">
        <div>
          <div className="">
            <Container>
              <Row>
                <Col>
                  <Ourteamcard
                    ourpict={tika}
                    name="Tika"
                    job="Marketing Head"
                  />
                </Col>
                <Col>
                  <Ourteamcard
                    ourpict={bintang}
                    name="Bintang"
                    job="Founder - CEO"
                  />
                </Col>
                <Col>
                  <Ourteamcard
                    ourpict={fahri}
                    name="Fahri"
                    job="Lead Developer"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={4}>
                  <Ourteamcard
                    ourpict={kristian}
                    name="Kristian"
                    job="Intern Designer"
                  />
                </Col>
                <Col xs={4}>
                  <Ourteamcard
                    ourpict={nafiz}
                    name="Nafiz"
                    job="Customer Service"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Ourteamcard ourpict={sunia} name="Sunia" job="AFK Mentee" />
                </Col>
                <Col>
                  <Ourteamcard
                    ourpict={siti}
                    name="Siti"
                    job="Quality Assurance"
                  />
                </Col>
                <Col>
                  <Ourteamcard ourpict={rizal} name="Rizal" job="Staff" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteamcomp;
