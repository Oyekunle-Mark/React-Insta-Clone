import styled from "styled-components";

const StyledUsername = styled.span`
  font-size: 14px;
  color: rgb(37, 35, 35);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: ${props => (props.comment ? "0" : "15px")};
  font-weight: ${props => (props.comment ? "550" : "600")};
`;

export default StyledUsername;
