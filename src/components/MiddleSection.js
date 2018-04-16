import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { midSectionData } from "../data/data";
import MidSectionCard from "./MidSectionCard";

const MidSectionContainer = styled.div`
  background-color: #f2f2f2;
  padding: 40px;

  @media (max-width: 590px) {
    min-width: 280px;
    padding: 20px;
  }
`;

const Header = styled.div`
  min-width: 180px;
  font-size: 40px;
  color: #002b5a;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MiddleSection = ({ midSectionData }) => {
  return (
    <MidSectionContainer>
      <Header>In Gravida</Header>
      <ContentContainer>
        {midSectionData.map(card => {
          const { title, description } = card;
          return (
            <MidSectionCard
              key={title}
              title={title}
              description={description}
            />
          );
        })}
      </ContentContainer>
    </MidSectionContainer>
  );
};
MiddleSection.proptypes = {
  midSectionData: PropTypes.array.isRequired
};
MiddleSection.defaultProps = {
  midSectionData
};

export default MiddleSection;
