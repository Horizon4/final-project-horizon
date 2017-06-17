import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions/userActions";
var username, password;

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword(e) {
    password = e.target.value;
  }

  handleUsername(e) {
    username = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.createUser(username, password);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" onChange={this.handleUsername}/>
          <input type="text" placeholder="Password" onChange={this.handlePassword}/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      createUser: (username, password) => dispatch(actions.createUser(username,password))
    };
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
