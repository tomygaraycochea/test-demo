import React, {Component} from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { Modal } from "./../../ui/theme/Theme"
import AddUser from "../modals/addUser/AddUser";
import ShowUser from "../modals/showUser/ShowUser";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      show: false,
      children: <div />,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    this.handleModal(<ShowUser firstnameData={firstname} lastnameData={lastname} />);
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
        <h1>Welcome</h1>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="First name"
                type="text"
                value={this.state.firstname}
                name="firstname"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Last name"
                type="text"
                value={this.state.lastname}
                name="lastname"
                onChange={this.handleInputChange}
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
            <Button onClick={() => this.handleModal(<AddUser />)}>Send</Button>
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
