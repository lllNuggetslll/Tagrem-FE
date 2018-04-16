import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import blueArrow from "../images/arrow-btn-blue.png";

const TileContainer = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  max-width: 165px;
  cursor: pointer;
  flex-grow: 1;

  @media (max-width: 976px) {
    max-width: initial;
    width: 44%;
  }

  @media (max-width: 586px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #002b5a;
  font-size: 17px;
  font-weight: bold;
`;

const Price = styled.div`
  color: #4987ca;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #666666;
  min-height: 60px;
`;

const Image = styled.img`
  width: 100%;
`;

const LearnText = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 13px;
  color: #002b5a;
`;

const ArrowImage = styled.img`
  margin-top: 5px;
  margin-left: 10px;
  height: 50%;
`;

const Tile = ({ title, price, description, picture, selectProduct, data }) => {
  return (
    <TileContainer onClick={() => selectProduct(data)}>
      <Title>{title}</Title>
      <Price>Starting at ${price}</Price>
      <Description>{description}</Description>
      <Image src={picture} />
      <LearnText>
        Learn More <ArrowImage src={blueArrow} />
      </LearnText>
    </TileContainer>
  );
};
Tile.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  selectProduct: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Tile;
