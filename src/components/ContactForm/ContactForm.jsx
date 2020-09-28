import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, number } = this.state;
    return (
      <div className="add-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="contact">Name</label>
          <input
            type="text"
            id="contact"
            name="name"
            value={name}
            onChange={this.handleOnChange}
          />
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
