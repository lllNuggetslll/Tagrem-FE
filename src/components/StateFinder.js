import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-select";
import { statesData } from "../data/data";
import search from "../images/search.png";

const formattedData = statesData.map(state => ({
  label: state,
  value: state,
  style: {
    color: "#002b5a",
    fontSize: 13
  }
}));

const StyledSelect = styled(Select)`
  &.Select--multi {
    .Select-value {
      display: inline-flex;
      align-items: center;
    }
  }
  &.Select {
    .Select-control {
      .Select-arrow-zone {
        .Select-arrow {
        }
      }
    }
  }
`;

const StateFinderContainer = styled.div`
  background-color: #f2f2f2;
  color: #002b5a;
  min-width: 250px;
  border-radius: 3px;
  padding: 20px;
  max-height: 90px;
  box-shadow: -1px 1px 5px 0px #888888;

  @media (max-width: 951px) {
    width: 100%;
  }
`;

const Header = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const SearchImageContainer = styled.div`
  display: flex;
  height: 100%;
  margin-right: 10px;
  align-items: center;
`;

const Border = styled.div`
  border-left: 1px solid lightGrey;
  height: 100%;
`;

const SearchImage = styled.img`
  height: 50%;
  padding-left: 9px;
`;

const arrowRenderer = () => {
  return (
    <SearchImageContainer>
      <Border />
      <SearchImage src={search} />
    </SearchImageContainer>
  );
};

const StateFinder = ({ selectState }) => {
  return (
    <StateFinderContainer>
      <Header>State Finder</Header>
      <Text>Morbi ac hendrerit nulla. Sed nec ex commodo</Text>
      <StyledSelect
        arrowRenderer={arrowRenderer}
        placeholder={"Search Hotels"}
        options={formattedData}
        onChange={input => selectState(input.value)}
      />
    </StateFinderContainer>
  );
};
StateFinder.proptypes = {
  selectState: PropTypes.string.isRequired
};

export default StateFinder;
