import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Popup = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../img/success.png" />
      <Card.Body>
        <Card.Title>Terimakasih telah melakukan reservasi</Card.Title>
        <Card.Text>
          Kami akan segera menghubungi anda terkait detail pemesanan dan total
          pembayaran
        </Card.Text>
        <Button variant="primary">OK</Button>
      </Card.Body>
    </Card>
  );
};

export default Popup;
