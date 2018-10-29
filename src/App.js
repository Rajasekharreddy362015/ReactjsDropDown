import React, { Component } from "react";

/* Import Components */

import Select from "./select";

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        gender: ""
      },

      genderOptions: ["Male", "Female", "Others"]
    };

    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    return (
      <form>
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age Selection */}
      </form>
    );
  }
}

export default DropDown;
