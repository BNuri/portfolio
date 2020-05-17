import React from "react";
import styled from "styled-components";
import media from "../Components/media";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.a`
  width: 150px;
  display: inline-block;
  margin: 5px;
  padding: 12px 10px;
  background-color: #fdf3f1;
  color: #f05742;
  font-weight: 700;
  border-radius: 50px;
  text-align: center;
  border-bottom: solid 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s linear;
  &:active {
    transform: translateY(3px);
    border-bottom: none;
  }
  ${media.mobile`
    width: 120px; 
    padding: 12px 0;
  `}
`;

export default ({ href, icon, name }) => (
  <Button href={href} target="_blank" rel="noopenr noreferrer">
    <FontAwesomeIcon
      icon={
        icon === "faGithub"
          ? faGithub
          : icon === "faHandPointRight"
          ? faHandPointRight
          : icon === "faFileAlt"
          ? faFileAlt
          : ""
      }
    />{" "}
    {name}
  </Button>
);
