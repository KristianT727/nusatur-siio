import React from "react";
import { Container, Image } from "react-bootstrap";
import "../styles/detailarticle.css";
import herokebudayaan from "../img/hero-article.png";
import artikel1 from "../img/fotoartikel1.png";
import melasti1 from "../img/Melasti1.png";
import melasti2 from "../img/Melasti2.png";
import melasti3 from "../img/Melasti3.png";
import kebo1 from "../img/Kebo1.png";
import kebo2 from "../img/Kebo2.png";
import kebo3 from "../img/Kebo3.png";
import kuwa1 from "../img/Mekikuwa1.png";
import kuwa2 from "../img/Mekikuwa2.png";
import kuwa3 from "../img/Mekikuwa3.png";
import Articlebloghome from "./Articlebloghome";
import Footer from "./Footer";

const Kebudayaan = () => {
  return (
    <>
      <Image
        src={herokebudayaan}
        alt="img"
        className="kebudayaan"
        style={{
          width: "1900px",
          height: "500px",
          top: "0px ",
          margin: "auto",
        }}
      />
      <Container>
        <h1
          style={{
            textAlign: "center",
            width: "960px",
            left: "101px",
            marginLeft: "180px",
            fontSize: "48px",
            fontWeight: "600",
          }}
        >
          KEBUDAYAAN INDONESIA <br />
          YANG UNIK PERLU DIKUNJUNGI
        </h1>
        <div className="garis-bawah-detail"></div>
        <section className="table">
          <table style={{ margin: "auto" }}>
            <tr>
              <th>
                <Image
                  src={artikel1}
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
                  height: "174px",
                  left: "108px",
                  top: "1279px",
                  fontSize: "22px",
                  textAlign: "justify",
                  fontWeight: "400",
                  border: "none",
                }}
              >
                Indonesia sebagai negara multikulturalisme memiliki keberagaman
                yang sangat banyak. Tak hanya suku, jumlah provinsi yang terbagi
                menjadi 34 juga memungkinkan negara ini menghadirkan contoh
                kebudayaan Indonesia. <br />
                Lantas, apa saja contoh dari kebudayaan tersebut? Berikut
                ulasannya.
              </td>
            </tr>
          </table>

          {/* Melasti */}
          <h3 style={{ marginLeft: "200px", marginTop: "30px" }}>
            1.Upacara Adat Melasti - Bali
          </h3>
          <table style={{ marginLeft: "200px" }}>
            <tr>
              <td colSpan={2}>
                <Image
                  src={melasti1}
                  alt="img"
                  className="images"
                  style={{ width: "460px", border: "none" }}
                />
              </td>
              <td
                style={{
                  width: "383px",
                  height: "492px",
                  position: "absolute",
                  textAlign: "justify",
                  fontWeight: "400",
                  fontSize: "21px",
                  border: "none",
                }}
                rowSpan={3}
              >
                Melasti merupakan upacara sembahyang umat Hindu. Tujuan
                diadakannya adalah untuk penyucian diri serta benda sakral milik
                pura (pralingga atau pratima Ida Bhatara dan segala
                perlengkapannya). Melasti dilakukan di di pantai atau danau,
                dengan maksud menghanyutkan segala perbuatan buruk menggunakan
                air kehidupan (air laut). Upacara tersebut dilakukan menyambut
                hari raya Nyepi. Maksudnya, agar umat Hindu diberi kekuatan
                dalam melaksanakan Hari Raya Nyepi.
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={melasti2}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "183px", border: "none" }}
                />
              </td>
              <td>
                <Image
                  src={melasti3}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "183px", border: "none" }}
                />
              </td>
            </tr>
          </table>

          {/* Kebo Keboan */}
          <h3 style={{ marginLeft: "200px", marginTop: "30px" }}>
            2.Kebo Keboan - Banyumas, Jawa Timur
          </h3>
          <table style={{ marginLeft: "200px" }}>
            <tr>
              <td colSpan={2}>
                <Image
                  src={kebo1}
                  alt="img"
                  className="images"
                  style={{ width: "460px" }}
                />
              </td>
              <td
                style={{
                  width: "383px",
                  height: "560px",
                  position: "absolute",
                  textAlign: "justify",
                  fontWeight: "400",
                  fontSize: "21px",
                  marginBottom: "153px",
                  border: "none",
                }}
                rowSpan={3}
              >
                Di Desa Alasmalang, Kecamatan Singojuruh, Kabupaten Banyuwangi,
                Jawa Timur ada sebuah upacara tradisi khusus untuk menghalau
                wabah penyakit. Tradisi itu sudah berlangsung sejak lama dan
                masih terus diselenggarakan sampai hari ini. Nama tradisi ini
                adalah Kebo-keboan atau dalam bahasa Indonesia berarti “kerbau
                jadi-jadian”. Dalam pelaksanaan upacara tradisi ini tidak ada
                unsur hewan kerbau yang dilibatkan. Kebo-keboan adalah
                orang-orang yang berdandan menyerupai kerbau.
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={kebo2}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "180px", border: "none" }}
                />
              </td>
              <td>
                <Image
                  src={kebo3}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "180px", border: "none" }}
                />
              </td>
            </tr>
          </table>

          {/* Mekikuwa */}
          <h3 style={{ marginLeft: "200px", marginTop: "30px" }}>
            3.Mekikuwa - Manado, Sulawesi Utara
          </h3>
          <table style={{ marginLeft: "200px" }}>
            <tr>
              <td colSpan={2}>
                <Image
                  src={kuwa1}
                  alt="img"
                  className="images"
                  style={{ width: "460px" }}
                />
              </td>
              <td
                style={{
                  width: "383px",
                  height: "560px",
                  position: "absolute",
                  textAlign: "justify",
                  fontWeight: "400",
                  fontSize: "21px",
                  marginBottom: "153px",
                  border: "none",
                }}
                rowSpan={3}
              >
                Upacara Mekikuwa adalah upacara adat suku Minahasa di Manado.
                Mekiwuka merupakan ungkapan rasa syukur atas pemeliharaan Tuhan
                disepanjang tahun yang telah dilewati dan permohonan kepada
                Tuhan agar dibukakan jalan untuk memperoleh banyak berkat dalam
                menjalani tahun yang baru. Upacara adat ini diselenggarakan
                dengan melakukan pawai yang dilakukan oleh seluruh warga kampung
                dengan memainkan alat musik sambil bernyanyi.
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={kuwa2}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "180px", border: "none" }}
                />
              </td>
              <td>
                <Image
                  src={kuwa3}
                  alt="img"
                  className="images"
                  style={{ width: "220px", height: "180px", border: "none" }}
                />
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

export default Kebudayaan;
