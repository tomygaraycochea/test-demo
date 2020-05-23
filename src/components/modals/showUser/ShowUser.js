import React, { Component } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";

class ShowUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notification: {
        status: false,
        text: "",
      },
      project_name: "",
    };
  }

  render() {
    const {
      handleModalClose,
      handleModalAccept,
      firstnameData,
      lastnameData,
    } = this.props;
    const { notification } = this.state;
    return (
      <div>
        <div className="modal-header">Show User</div>
        <div className="modal-container">
          {notification.status ? (
            <Alert variant="success">{notification.text}</Alert>
          ) : null}
          <Row>
            <Col>First name: {firstnameData}</Col>
          </Row>
          <Row>
            <Col>Last name: {lastnameData}</Col>
          </Row>
        </div>
        <div className="modal-bottom">
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button className="btn-secondary" onClick={handleModalAccept}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default ShowUser;
