import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { bulletPointData } from "../data/data";

const BulletPointsContainer = styled.div`
  margin: 15px 5px 5px 5px;
`;

const BulletPoint = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const NumberImage = styled.img`
  transform: ${props => props.enlarge && "scale(1.3)"};
`;

const Description = styled.div`
  margin-left: 10px;
`;

const bulletPoints = ({ handleOnHover, handleOnLeave, hoveredElement }) => {
  return (
    <BulletPointsContainer>
      {bulletPointData.map(point => {
        const { pic, value, desc } = point;

        return (
          <BulletPoint key={value}>
            <NumberImage
              enlarge={hoveredElement === value}
              onMouseOver={() => handleOnHover(value)}
              onMouseLeave={() => handleOnLeave()}
              src={pic}
            />
            <Description>{desc}</Description>
          </BulletPoint>
        );
      })}
    </BulletPointsContainer>
  );
};
bulletPoints.proptypes = {
  handleOnHover: PropTypes.func.isRequired,
  handleOnLeave: PropTypes.func.isRequired,
  hoveredElement: PropTypes.number
};

export default bulletPoints;
