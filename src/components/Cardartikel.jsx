import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/cardartikel.css";

import { NavLink } from "react-router-dom";

const Cardartikel = ({ img, title, price, subtitle, list = [], to }) => {
  return (
    <div className="mt-6">
      <Card className="card-containerr">
        <div className="text-centerr">
          <img
            src={img}
            alt=""
            className="card-imgg"
            style={{
              width: "295px",
              height: "146px",
              left: "0px",
              top: "0px",
            }}
          ></img>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                width: "166.24px",
                height: "38px",
                fontWeight: "600px",
                lineHeight: "19px",
                textAlign: "center",
              }}
            >
              {title}
            </h3>

            <h5
              style={{
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
                width: "87px",
                height: "20px",
                lineHeight: "19px",
              }}
            >
              {price}
            </h5>
          </div>
          <p style={{ fontSize: "14px", width: "296px", margin: "15px auto" }}>
            {subtitle}
          </p>
        </div>
        <ul>
          {list.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
        <div className="text-center btn-artikel">
          <Button>
            <NavLink to={to} className="btn-navlink-rec">
              Lihat Detail
            </NavLink>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cardartikel;
