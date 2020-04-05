import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100
  }
};

export default function SignupModal({ modalIsOpen, closeModal }: any) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="SignUp"
    >
      <div className="columns">
        <div className="column col-mx-auto">
          <h2>UnAuthorized</h2>
        </div>
      </div>
      <div className="columns">
        <div className="column col-12">
          <div className="form-group">
            <label className="form-label">UserName</label>
            <input className="form-input" type="text" placeholder="User Name" />
          </div>
        </div>
        <div className="column col-12">
          <br />
        </div>
        <div className="column col-12">
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="column col-12 col-mx-auto">
          <button
            className="button btn-secondary"
            style={{
              margin: "2em auto",
              display: "block"
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </Modal>
  );
}
