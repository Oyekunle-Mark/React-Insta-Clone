import React, { Component } from "react";
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

    this.setState(prevState => ({
      posts: prevState.posts.filter(post =>
        post.username
          .toLowerCase()
          .includes(prevState.searchInput.toLowerCase())
      )
    }));
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
