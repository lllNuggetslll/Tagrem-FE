import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import OverlayedImage from "./OverlayedImage";
import BulletPoints from "./BulletPoints";

import x from "../images/close.png";
import whiteArrow from "../images/arrow-btn-white.png";
import { loremIpsum } from "../data/data";

const ProductDetailsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px
  margin: 20px 5px 5px 0;

  @media (max-width: 550px) {
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 976px) {
    flex-wrap: wrap;
  }
`;

const TextPortion = styled.div`
  width: 50%;
  margin-right: 5px;
  text-align: justify;

  @media (max-width: 976px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #002b5a;
  font-size: 24px;
`;

const Price = styled.div`
  color: #4987ca;
  font-size: 17px;
  font-weight: bold;
`;

const Description = styled.p``;

const X = styled.img`
  position: relative;
  left: 20px;
  bottom: 20px;

  @media (max-width: 550px) {
    left: 5px;
    bottom: 5px;
  }
`;

const BuyButton = styled.button`
  margin-top: 20px;
  background-color: #002b5a;
  color: #ffffff;
  font-size: 14px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 2px #fff inset;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 465px) {
    width: 100%;
  }
`;

const ButtonContent = styled.div`
  display: flex;

  @media (max-width: 465px) {
    justify-content: space-between;
  }
`;

const WhiteArrow = styled.img`
  margin-left: 10px;
  height: 50%;
  margin-top: 5px;
`;

const constructedButton = () => (
  <BuyButton>
    <ButtonContent>
      <div>Buy Online</div>
      <WhiteArrow src={whiteArrow} />
    </ButtonContent>
  </BuyButton>
);

export default class ProductDetails extends Component {
  state = {
    hoveredElement: null
  };

  handleOnHover = value => {
    this.setState({ hoveredElement: value });
  };

  handleOffHover = () => {
    this.setState({ hoveredElement: null });
  };

  render() {
    const { hoveredElement } = this.state;
    const { data, closeProduct } = this.props;
    const { title, price, picture } = data;
    const shouldRender = title === "Product Title 1";

    return (
      <ProductDetailsContainer>
        <Header>
          <Title>{title}</Title>
          <X src={x} onClick={() => closeProduct()} />
        </Header>
        <ContentContainer>
          <TextPortion>
            <Price>Starting at ${price}</Price>
            <Description>{loremIpsum}</Description>
            {shouldRender && (
              <BulletPoints
                handleOnHover={this.handleOnHover}
                handleOnLeave={this.handleOffHover}
                hoveredElement={hoveredElement}
              />
            )}
            {constructedButton()}
          </TextPortion>
          <OverlayedImage
            image={picture}
            shouldRender={shouldRender}
            handleOnHover={this.handleOnHover}
            handleOnLeave={this.handleOffHover}
            hoveredElement={hoveredElement}
          />
        </ContentContainer>
      </ProductDetailsContainer>
    );
  }
}
ProductDetails.proptypes = {
  data: PropTypes.object.isRequired,
  closeProduct: PropTypes.func.isRequired
};
