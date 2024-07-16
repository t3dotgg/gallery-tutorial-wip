import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super({});
    this.state = {
      firstName: "Taylor",
      lastName: "Swift",
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  render() {
    const { firstName, lastName } = this.state;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div>
        <h1>Hello, {fullName}!</h1>
        <form>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={this.handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={this.handleLastNameChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
