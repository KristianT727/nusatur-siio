import React, { useEffect } from "react";
import dot1 from "../img/dot1.png";
import AOS from "aos"; //for animation
import "aos/dist/aos.css";
import { Whatsapp } from "react-bootstrap-icons";
import "../styles/boxhubungi.css";

const Boxhubungi = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up">
      <div className="hubungi-container">
        <div className="hubungi-content">
          <img src={dot1} alt="" className="img1-explore" />
          <img src={dot1} alt="" className="img2-explore" />
          <h5>
            Hubungi kami jika ingin melakukan wisata secara custom atau ada
            pertanyaan terkait layanan kami <br />
            <br />
          </h5>
          <a
            href="https://wa.me/6289519680668?text=Selamat%20Datang%20di%20Nusatur%20apakah%20anda%20ingin%20melakukan%20custom%20reservasi?"
            style={{
              textDecoration: "none",
              color: "red",
              background: "#F3F3F3",
              padding: "10px 20px",
              borderRadius: "5px",
              justifyContent: "center",
            }}
          >
            <Whatsapp size={20} /> +62 895 1968 0668{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Boxhubungi;
