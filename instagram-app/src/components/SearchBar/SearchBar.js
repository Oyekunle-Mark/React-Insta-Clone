import React from "react";
import Props from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(211, 209, 209);
  margin-bottom: 60px;
  width: 100%;
  background: white;

  .header-container {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 10px;
  }

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    text-align: center;
    width: 205px;
    height: 18px;
    border: 1px solid rgb(211, 209, 209);
    font-size: 12px;
    border-radius: 3px;
    color: rgb(211, 209, 209);
    background: rgb(250, 250, 250);
    padding: 5px;
  }

  input:focus {
    outline: none;
    border: 2px solid rgb(179, 177, 177);
    color: rgb(49, 47, 47);
    text-align: left;
  }

  .user-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    padding: 10px;
  }

  .user-icons img {
    width: 30px;
    height: 30px;
  }
`;

const LogoHeader = styled.h1`
  padding: 5px 20px;
  height: 25px;
  font-size: 30px;
  font-family: "Satisfy", cursive;
  border-left: 1px solid rgb(112, 106, 106);
`;

const LogoImage = styled.div`
  img {
    height: 32px;
    width: 32px;
    margin-right: 20px;
  }
`;

export default function SearchBar({ searchValue, inputChange }) {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="logo">
          <LogoImage>
            <img
              src="https://img.icons8.com/ios/50/000000/instagram-new.png"
              alt="logo"
            />
          </LogoImage>
          <LogoHeader>Instagram</LogoHeader>
        </div>

        <input
          type="text"
          placeholder="&#128269; Search"
          value={searchValue}
          onChange={inputChange}
        />

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
    </StyledHeader>
  );
}

SearchBar.propTypes = {
  searchValue: Props.string.isRequired,
  inputChange: Props.func.isRequired
};
