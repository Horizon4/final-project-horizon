import React from 'react';
import { connect } from "react-redux";
import User from './user';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <h1>Horizon</h1>
        <hr />
        <User />
      </div>
    );
  }
}
