import { createGlobalStyle, keyframes } from "styled-components";
import reset from "styled-reset";
import media from "./media";

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
        -ms-overflow-style:none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    html, body{
        height: 100%;
    }
    body {
        height: calc(100vh - 80px);
        ${media.mobile`
            height: calc(100vh - 10px);
        `}
    }
    #root {
        margin: 80px 80px 0px 80px;
        background-color: #F2EAE0;
        border-radius: 5px;
        transition: margin 0.5s linear;
        ${media.tablet`margin: 80px 10px 0px 10px;`}
        ${media.mobile`margin: 10px 10px 0px 10px;`}
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
#root>main {
    animation: 0.5s ${fadeIn} linear;
}
`;

export default globalStyles;
