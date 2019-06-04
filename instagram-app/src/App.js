import React, { Component } from "react";
import Fuse from "fuse.js";
import data from "./dummy-data";
import SeachBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
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

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  filterPosts = e => {
    e.preventDefault();
    const { searchInput } = this.state;
    const options = {
      keys: ["username"]
    };

    if (this.state.searchInput.trim()) {
      this.setState(prevState => ({
        posts: prevState.posts.filter(post => {
          const fuse = new Fuse([post], options);
          return !!fuse.search(searchInput).length;
        })
      }));
    }
  };

  updateLocalStorage = () => {
    localStorage.instagramClone = JSON.stringify(this.state.posts);
  };

  render() {
    const { posts, searchInput } = this.state;
    const postContainers = posts.map(post => (
      <PostContainer key={post.id} {...post} likeHandler={this.likeComment} />
    ));

    return (
      <div className="App">
        <SeachBar
          searchValue={searchInput}
          inputChange={this.searchInputChange}
          searchSubmit={this.filterPosts}
        />

        {postContainers}
      </div>
    );
  }
}

export default App;
