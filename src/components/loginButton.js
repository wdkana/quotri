import React, { useState } from "react";
import { sign_in } from "../helper/account";
import { Modal, Button } from "react-bootstrap";

export default function LoginButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Coba Sekarang!
      </Button>

      <Modal show={show} onHide={handleClose} backdrop={false} fullscreen={true}>
        <Modal.Header closeButton>
          <span>
            <i className="fa fa-key ml-2"></i> Single-Sign-In
          </span>
        </Modal.Header>
        <Modal.Body>
          <p>Anda akan menggunakan fitur masuk tanpa daftar</p>
          <i className="h6" style={{ fontSize: 12 }}>
            karena sistem blockchain bersifat tidak terpusat, maka anda punya
            hak penuh atas keterbukaan sistem sehingga pihak lain tidak bisa
            menyimpan data pribadi anda.
          </i>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => sign_in(this.props.self)}
            className="btn btn-danger btn-lg w-100"
          >
            Masuk
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
