import React from "react";
import styled from "styled-components";

import Header from "./Header";
import ContentContainer from "./ContentContainer";

const Container = styled.div`
  height: 100%;
  background-color: #e0e0e0;
  max-width: 960px;
  margin: auto;

  @import url("//fonts.googleapis.com/css?family=Lato:300,400,700");
  font-family: Lato;
`;

const Body = styled.div`
  padding: 25px 50px 50px 50px;

  @media (max-width: 465px) {
    padding: 20px;
  }
`;

export default class LayoutContainer extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Body>
          <ContentContainer />
        </Body>
      </Container>
    );
  }
}
