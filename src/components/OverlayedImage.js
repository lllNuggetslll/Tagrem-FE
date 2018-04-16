import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { bulletPointData } from "../data/data";

const ImageContainer = styled.div`
  width: 49%;
  position: relative;

  @media (max-width: 976px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  position: relative;
`;

const NumberImage = styled.img`
  transform: ${props => props.enlarge && "scale(1.3)"};
  position: absolute;

  ${props => {
    const { value } = props;

    switch (value) {
      case 1:
        return css`
          right: 65%;
          top: 31%;

          @media (max-width: 976px) {
            right: 66%;
            top: 48%;
          }
        `;
      case 2:
        return css`
          right: 19%;
          top: 39%;

          @media (max-width: 976px) {
            right: 21%;
            top: 60%;
          }
        `;
      case 3:
        return css`
          right: 46%;
          top: 53%;

          @media (max-width: 976px) {
            right: 47%;
            top: 82%;
          }
        `;
      default:
        return;
    }
  }};
`;

const overlayedImage = ({
  image,
  hoveredElement,
  handleOnHover,
  handleOnLeave,
  shouldRender
}) => {
  return (
    <ImageContainer>
      <Image src={image} />
      {shouldRender &&
        bulletPointData.map(point => {
          const { pic, value } = point;

          return (
            <NumberImage
              key={value}
              value={value}
              enlarge={hoveredElement === value}
              onMouseOver={() => handleOnHover(value)}
              onMouseLeave={() => handleOnLeave()}
              src={pic}
            />
          );
        })}
    </ImageContainer>
  );
};
overlayedImage.proptypes = {
  image: PropTypes.object.isRequired,
  hoveredElement: PropTypes.number,
  handleOnHover: PropTypes.func.isRequired,
  handleOnLeave: PropTypes.func.isRequired,
  shouldRender: PropTypes.boolean
};

export default overlayedImage;
