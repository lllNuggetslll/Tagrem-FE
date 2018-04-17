import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import blueArrow from "../images/arrow-btn-blue.png";

const CardContainer = styled.div`
  max-width: 250px;
  min-height: 100px;
  margin-top: 20px;

  @media (max-width: 946px) {
    max-width: initial;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #093260;
`;

const Description = styled.div`
  margin-top: 5px;
  font-size: 12px;
  min-height: 60px;
`;

const Button = styled.button`
  height: 40px;
  background-color: #ffffff;
  color: #002b5a;
  font-size: 14px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 2px #fff inset;

  @media (max-width: 696px) {
    width: 100%;
  }
`;

const ButtonContent = styled.div`
  display: flex;

  @media (max-width: 697px) {
    justify-content: space-between;
  }
`;

const Image = styled.img`
  margin-left: 10px;
  margin-top: 5px;
  height: 50%;
`;

const MidSectionCard = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>
        <ButtonContent>
          <div>Learn More</div>
          <Image src={blueArrow} />
        </ButtonContent>
      </Button>
    </CardContainer>
  );
};
MidSectionCard.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MidSectionCard;
