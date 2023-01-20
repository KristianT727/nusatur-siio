import React from "react";
import { Container, Image } from "react-bootstrap";

import "../styles/detailarticle.css";
// GWK //
import gwk from "../img/gwk.png";
import monumen from "../img/monumen.png";
import Articlebloghome from "./Articlebloghome";
import Footer from "./Footer";

const Detailarticle = () => {
  return (
    <>
      <Container>
        {/* INI GWK */}
        <h1
          style={{
            textAlign: "center",
            width: "960px",
            left: "101px",
            marginLeft: "200px",
            fontSize: "48px",
            fontWeight: "600",
          }}
        >
          GARUDA WISNU KENCANA <br />
          Ikon Peradaban
        </h1>
        <div className="garis-bawah-detail"></div>
        <section className="table">
          <table style={{ marginLeft: "200px" }}>
            <tr>
              <th>
                <Image
                  src={gwk}
                  alt="img"
                  className="images"
                  style={{ width: "903px", border: "none" }}
                />
              </th>
            </tr>
            <tr>
              <td
                style={{
                  width: "903px",
                  height: "14px",
                  fontSize: "22px",
                  border: "none",
                  textAlign: "justify",
                }}
              >
                Terbentuk dari perbukitan terjal di Bukit Peninsula Bali, patung
                Garuda Wisnu Kencana yang megah berdiri mengawasi pulau itu.
                Patung yang menjulang tinggi adalah landmark paling ikonik di
                Bali dan menggambarkan Dewa Hindu Wisnu, di atas tunggangannya,
                elang mitos, Garuda. Garuda adalah lambang nasional Indonesia,
                simbol abadi kebebasan dari penindasan. Menjulang setinggi lebih
                dari 120 meter, ini adalah salah satu patung monumental
                tertinggi di dunia, lebih tinggi dari Patung Liberty dan Kristus
                Penebus.
              </td>
            </tr>
          </table>

          <table style={{ marginLeft: "200px" }}>
            <tr>
              <th rowSpan={3}>
                <Image
                  src={monumen}
                  alt="img"
                  className="images"
                  style={{ width: "440px", height: "586px", border: "none" }}
                />
              </th>
            </tr>
            <tr>
              <td
                rowSpan={3}
                style={{
                  width: "460px",
                  height: "587px",
                  fontSize: "22px",
                  textAlign: "justify",
                  flex: "none",
                  border: "none",
                }}
              >
                Patung tersebut menjadi fitur utama yang menakjubkan dari GWK,
                taman budaya seluas 60 hektar yang menarik pengunjung dari
                seluruh dunia dan memberikan pandangan sekilas tentang warisan
                menarik Bali melalui pertunjukan budaya yang menarik, cerita
                rakyat legendaris, patung besar, dan presentasi sinematik yang
                dramatis. Nikmati pemandangan pulau yang indah saat Anda
                menjelajahi taman dengan berjalan kaki atau dengan Segway.
                Manjakan diri dengan masakan warisan Indonesia, benamkan diri
                Anda di negeri yang penuh dengan mitologi, atau rencanakan acara
                besar Anda berikutnya di salah satu tempat epik GWK.
              </td>
            </tr>
          </table>

          <table style={{ marginLeft: "200px" }}>
            <tr>
              <td
                colSpan={5}
                style={{
                  width: "920px",
                  height: "375px",
                  left: "109px",
                  fontSize: "22px",
                  fontWeight: "400px",
                  textAlign: "justify",
                  border: "none",
                }}
              >
                Patung Garuda Wisnu Kencana menggambarkan Wisnu mengendarai
                Garuda. Dalam mitologi Hindu, Dewa Wisnu dipandang sebagai
                pelindung alam semesta, sementara pendampingnya yang terpercaya,
                Garuda yang mirip elang yang perkasa melambangkan kesetiaan dan
                pengabdian tanpa pamrih. Kencana artinya emas, dan keduanya
                dihiasi mahkota mozaik emas. Garuda juga merupakan lambang
                negara Indonesia dan melambangkan kemerdekaan. <br />
                <br />
                Dirancang oleh seniman terkenal Bali Nyoman Nuarta, patung ini
                terbuat dari tembaga dan kuningan dan memiliki 754 modul dengan
                25 segmen baja dengan berat 900 ton, dengan berat baja 1300 ton.
                Patung dan tumpuan setinggi 120,9 meter dengan lebar 64 meter
                berkat lebar sayap Garuda.
              </td>
            </tr>
          </table>
        </section>
      </Container>
      <Articlebloghome />
      <Footer />
    </>
  );
};

export default Detailarticle;
