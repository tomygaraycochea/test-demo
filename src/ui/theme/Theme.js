import React from "react";
import PropTypes from "prop-types";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

export const Modal = (props) => {
  const { show, handleClose, children } = props;
  return (
    <BootstrapModal show={show}>
      <BootstrapModal.Header>
        <Button
          variant="primary"
          className="modal-close"
          onClick={handleClose}
        />
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  show: false,
  children: <div />,
};
