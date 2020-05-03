import React, {Component} from "react";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendRegard = this.sendRegard.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value );
    event.preventDefault();
  }

  sendMessage() {
    alert("Hi")
  }

  sendRegard() {
    alert("Bye")
  }

  render() {
    return (
      <div className="">
        Home1
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <button
            onClick={this.sendMessage}
          >
            Send
          </button>
          <button
            onClick={this.sendRegard}
          >
            Regard
          </button>
        </div>
      </div>
    );  
  }
}

export default Home;
