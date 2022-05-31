import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

  ${reset};

	* {
    box-sizing: border-box;
  };

  p {
    line-height: normal;
  };

  a {
    text-decoration: none;
  };

  a:hover,
  button:hover {
    cursor: pointer;
  };

  button {
    border: 0;
  };

  input:focus {
    outline: none;
  };

  body * {
  font-family: 'Nanum Gothic', sans-serif;
};
`;

export default GlobalStyle;
