import React from "react";
import "../css/contact.scss";
import Button from "../components/Button";

export default class ContactForm extends React.Component {
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  constructor(params) {
    super(params);
    this.state = {
      title: "Let's talk!",
      loading: false,
      loaded: false,
      email: "",
      buttonText: "Send"
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    this.setState({
      loading: true,
      buttonText: "Sending...",
      contactEmail: "",
      contactMessage: "",
      contactName: ""
    });
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact",
        email: this.state.contactEmail,
        name: this.state.contactName,
        message: this.state.contactMessage
      })
    })
      .then(() => {
        this.setState({
          loading: false,
          loaded: true,
          title: "Thanks! I got ya! VIP list updated.",
          buttonText: "Done"
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false,
          loaded: true,
          buttonText: "Error occured, oops."
        });
      });
  };

  handleChangeMessage(event) {
    this.setState({ loaded: false, contactMessage: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ loaded: false, contactName: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ loaded: false, contactEmail: event.target.value });
  }

  render() {
    return (
      <div className={this.props.className}>
        <h2>Let's talk!</h2>
        <h4>Call me on +358 50 371 3477</h4>

        <h4>Or send a message</h4>

        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input
                onChange={this.handleChangeName}
                required="required"
                id="name"
                value={this.state.contactName}
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                onChange={this.handleChangeEmail}
                required="required"
                id="email"
                value={this.state.contactEmail}
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                onChange={this.handleChangeMessage}
                value={this.state.contactMessage}
                id="message"
                name="message"
                type="text"
                placeholder="Your message"
              />
            </div>
            <div>
              <Button title="Send" type="submit"></Button>
            </div>
            {this.state.loaded && <h2>Thanks. I'll get back to you ASAP.</h2>}
          </div>
        </form>
      </div>
    );
  }
}
