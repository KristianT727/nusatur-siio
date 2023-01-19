import React from "react";
import { Container } from "react-bootstrap";
import formreservasi from "../img/formreservasi.png";
import "../styles/stylesformreservasi.css";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Terimakasih telah melakukan reservasi",
    text: "Kami akan segera menghubungi anda terkait detail pemesanan dan total pembayaran",
    width: "500px",
    height: "200px",
  });
};

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/reservasi`,
        value
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <section style={{ display: "flex" }}>
          <div className="card-formreservasi">
            <h1 className="text-formreservasi">Formulir Reservasi</h1>
            <div className="garis-bawah-reservasi" />
            <div className="card-foto-formreservasi">
              <img
                src={formreservasi}
                alt="Paket Bali B (1 Hari)"
                className="img-formreservasi"
              />
              <div class="container">
                <h4 className="text-foto-formreservasi">
                  PAKET BALI B (1 Hari)
                </h4>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nama Pemesan</label>
                <div className="col-sm-9 m-auto">
                  <input
                    type="text"
                    className="form-control"
                    {...register("nama", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9 m-auto">
                  <input
                    type="email"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label mt-3 mb-3">
                  No Telepon
                </label>
                <div className="col-sm-9 mt-3 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tanggal</label>
                <div className="col-sm-9 m-auto">
                  <input
                    type="date"
                    className="form-control"
                    {...register("date", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Jumlah Orang Dewasa
                </label>
                <div className="col-sm-9 m-auto">
                  <input
                    type="number"
                    className="form-control"
                    {...register("qty", { required: true })}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div>
                  <button
                    onClick={showAlert}
                    type="submit"
                    style={{
                      background: "#D10000",
                      borderRadius: "10px",
                      padding: "7px",
                      color: "#F3F3F3",
                      position: "absolute",
                      width: "194px",
                      height: "65px",
                      left: "750px",
                      top: "930px",
                    }}
                  >
                    Booking Sekarang
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Form;
