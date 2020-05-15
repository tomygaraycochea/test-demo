import React, {Component} from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { Modal } from "./../../ui/theme/Theme"
import AddUser from "../modals/addUser/AddUser";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      show: false,
      children: <div />,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendRegard = this.sendRegard.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleAccept() {
    this.setState({ show: false });
  }

  handleModal(children) {
    this.setState({ show: true, children });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  sendMessage() {
    alert("Hi");
  }

  sendRegard() {
    alert("Bye");
  }

  render() {
    const { show, children } = this.state;
    return (
      <Container className="">
        Home
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Enter email"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <Row>
          <Col>
            <Button
              onClick={() =>
                this.handleModal(
                  <AddUser/>
                )
              }
            >
              Send
            </Button>
          </Col>
          <Col>
            <Button onClick={this.sendRegard}>Regard</Button>
          </Col>
        </Row>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal
          show={show}
          handleClose={this.handleClose}
          handleAccept={this.handleAccept}
        >
          {children}
        </Modal>
      </Container>
    );
  }
}

export default Home;
