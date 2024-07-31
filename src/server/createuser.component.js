import React, { Component } from "react";
import axios from "axios";

class createuser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userObject = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post("http://localhost:4000/users/create", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ name: "", email: "" });
  }

  render() {
    return (
      <div className="container">
        <form
          className="row g-3 needs-validation"
          onSubmit={this.onSubmit}
          novalidate
        >
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                value={this.state.name}
                onChange={this.onChangeUserName}
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipEmail" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipEmailPrepend"
              >
                ✉
              </span>
              <input
                type="email"
                className="form-control"
                id="validationTooltipEmail"
                value={this.state.email}
                onChange={this.onChangeUserEmail}
                aria-describedby="validationTooltipEmailPrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid email address.
              </div>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Create User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default createuser;
