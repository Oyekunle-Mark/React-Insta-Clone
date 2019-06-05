import React, { Component } from "react";
import data from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.updateLocalStorage();
    });

    let initialPosts;

    try {
      initialPosts = JSON.parse(localStorage.instagramClone);
    } catch (e) {
      initialPosts = data;
    }

    this.setState({
      posts: initialPosts
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

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  updateLocalStorage = () => {
    localStorage.instagramClone = JSON.stringify(this.state.posts);
  };

  render() {
    const { posts, searchInput } = this.state;
    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(
      LoginPage
    );

    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          posts={posts}
          searchInput={searchInput}
          likeComment={this.likeComment}
          searchInputChange={this.searchInputChange}
        />
      </div>
    );
  }
}

export default App;
