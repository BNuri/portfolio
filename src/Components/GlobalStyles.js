import { createGlobalStyle, keyframes } from "styled-components";
import reset from "styled-reset";

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const globalStyles = createGlobalStyle`
${reset};
    body {
        font-family: 'Nanum Gothic Coding', monospace;
        background-color: #F0A383;
    }
    html, body{
        height: 100%;
    }
    body {
        height: calc(100% - 80px);
        @media (max-width: 450px) {
            height: calc(100% - 10px);
        }
    }
    #root {
        margin: 80px 80px 0px 80px;
        background-color: #F2EAE0;
        height: 100%;
        border-radius: 5px;
        overflow: auto;
        transition: margin 0.5s linear;
        -ms-overflow-style:none;
        &::-webkit-scrollbar {
            display: none;
        }
        @media (max-width: 880px) {
            margin: 80px 10px 0px 10px;
        }
        @media (max-width: 450px) {
            margin: 10px 10px 0px 10px;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
#root>div {
    animation: 0.5s ${fadeIn} linear;
}
`;

export default globalStyles;
