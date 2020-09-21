import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageSubText,
} from "./error-boundary.styles";
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    return this.state.hasError ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"}>
          <ErrorImageText>Uh Oh! Seems this Page is Broken</ErrorImageText>
          <ErrorImageSubText as="p">
            Please Check Your Internet Connection or <a href="/">Click here</a>
          </ErrorImageSubText>
        </ErrorImageContainer>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
