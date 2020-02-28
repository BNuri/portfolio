import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const AboutPresenter = ({ loading, error }) => <Container></Container>;

AboutPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default AboutPresenter;
