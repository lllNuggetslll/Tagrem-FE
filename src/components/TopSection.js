import React, { Component } from "react";
import styled from "styled-components";
import StateFinder from "./StateFinder";
import Modal from "./Modal";

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  flex-wrap: wrap;
`;
const ContentContainer = styled.div`
  min-width: 270px;
  max-width: 515px;
  margin-right: 10px;

  @media (max-width: 951px) {
    max-width: initial;
    margin-right: 0px;
    width: 100%;
  }
`;
const Header = styled.div`
  font-size: 2em;
  color: #002b5a;
`;
const Content = styled.p`
  text-align: justify;
  font-size: 18px;
`;

export default class TopSection extends Component {
  state = {
    selectedState: null
  };

  handleSelectState = state => {
    this.setState({ selectedState: state });
  };

  handleCloseModal = () => {
    this.setState({ selectedState: null });
  };

  render() {
    const { selectedState } = this.state;

    return (
      <TopContainer>
        {selectedState && (
          <Modal state={selectedState} closeModal={this.handleCloseModal} />
        )}
        <ContentContainer>
          <Header>In Gravida Libero</Header>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            enim neque, molestie ut placerat id, tincidunt in sem. Pellentesque
            sodales lobortis eros nec pulvinar. In ac ultrices ipsum, ultricies
            semper nisi. Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
            felis ac, iaculis ipsum.
          </Content>
          <Content>
            Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac,
            iaculis ipsum
          </Content>
        </ContentContainer>
        <StateFinder selectState={this.handleSelectState} />
      </TopContainer>
    );
  }
}
