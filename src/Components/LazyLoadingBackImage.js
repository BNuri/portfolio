import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
`;

class LazyLoadingBackImage extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return (
      <Container
        {...this.props}
        style={{
          backgroundImage: `url(${this.state.src || this.props.placeholder})`
        }}
      />
    );
  }
}

export default LazyLoadingBackImage;
