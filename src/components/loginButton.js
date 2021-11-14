import React, { useState } from "react";
import { sign_in } from "../helper/account";
import { Modal, Button } from "react-bootstrap";

export default function LoginButton(self) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Coba Sekarang!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={false}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <span>
            <i className="fa fa-key ml-2"></i> Single-Sign-In
          </span>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Anda akan menggunakan fitur masuk tanpa daftar</p>
            <i className="h6" style={{ fontSize: 12 }}>
              karena sistem blockchain bersifat tidak terpusat, maka anda punya
              hak penuh atas keterbukaan sistem sehingga pihak lain tidak bisa
              menyimpan data pribadi anda.
            </i>
          </div>
          <div>
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="1027"
              data-base="IDR"
              data-secondary="USD"
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="IDR"
            ></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => sign_in(self.self)}
            className="btn btn-danger btn-lg w-100"
          >
            Masuk
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
