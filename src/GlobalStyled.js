import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    html, body, #root, #__next{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-text-fill-color: #444444 !important;
  }
  a { cursor: pointer; text-decoration: none; }
`;
