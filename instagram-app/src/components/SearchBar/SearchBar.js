import React from "react";
import Props from "prop-types";
import "./SearchBar.css";

export default function SearchBar({ searchValue, inputChange, searchSubmit }) {
  return (
    <header>
      <div className="header-container">

        <div className="logo">
          <img
            src="https://img.icons8.com/ios/50/000000/instagram-new.png"
            alt="logo"
          />
          <h1>Instagram</h1>
        </div>

        <form onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="&#128269; Search"
            value={searchValue}
            onChange={inputChange}
          />
        </form>

        <div className="user-icons">
          <img
            src="https://img.icons8.com/windows/32/000000/compass.png"
            alt="explore"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/hearts.png"
            alt="likes"
          />
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png"
            alt="user"
          />
        </div>

      </div>
    </header>
  );
}

SearchBar.propTypes = {
  searchValue: Props.string.isRequired,
  inputChange: Props.func.isRequired,
  searchSubmit: Props.func.isRequired
};
