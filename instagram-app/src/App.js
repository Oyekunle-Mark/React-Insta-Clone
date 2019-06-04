import React, { Component } from "react";
import data from "./dummy-data";
import SeachBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: data
    });
  }

  render() {
    const { posts } = this.state;
    const postContainers = posts.map(post => (
      <PostContainer key={post.id} {...post} />
    ));

    return (
      <div className="App">
        <SeachBar />
        {postContainers}
      </div>
    );
  }
}

export default App;
