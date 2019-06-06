import React, { Component } from "react";
import Fuse from "fuse.js";
import data from "../../dummy-data";
import SeachBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

export default class PostsPage extends Component {
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
    const options = {
      keys: ["username"]
    };

    // eslint-disable-next-line
    const postContainers = posts.map(post => {
      if (
        !!new Fuse([post], options).search(searchInput).length ||
        searchInput.trim() === ""
      ) {
        return (
          <PostContainer
            key={post.id}
            {...post}
            likeHandler={this.likeComment}
          />
        );
      }
    });

    return (
      <>
        <SeachBar
          searchValue={searchInput}
          inputChange={this.searchInputChange}
        />

        {postContainers}
      </>
    );
  }
}
