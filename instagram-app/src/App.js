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

  likeComment = id => {
    const newPosts = [...this.state.posts];

    newPosts.forEach(post => {
      if (post.id === id) post.likes += 1;
    });

    this.setState({
      posts: newPosts
    });
  };

  render() {
    const { posts } = this.state;
    const postContainers = posts.map(post => (
      <PostContainer key={post.id} {...post} likeHandler={this.likeComment} />
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
