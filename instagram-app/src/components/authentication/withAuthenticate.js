import React, { Component } from "react";

export default function withAuthenticate(PassedComponent) {
  return class extends Component {
    render() {
      return <PassedComponent {...this.props} />;
    }
  };
}
