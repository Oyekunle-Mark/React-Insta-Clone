import React, { Component } from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.instagramCloneUsername) {
        this.setState({
          loggedIn: true
        });

        return;
      }

      this.setState({
        loggedIn: false
      });
    }

    render() {
      const { loggedIn } = this.state;

      return loggedIn ? <PostsPage /> : <LoginPage />;
    }
  };

export default withAuthenticate;
