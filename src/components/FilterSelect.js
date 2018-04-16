import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-select";

import { filterOptions } from "../data/data";

const StyledSelect = styled(Select)`
  min-width: 175px;

  @media (max-width: 510px) {
    min-width: 125px;
  }
`;

const FilterSelect = ({ changeFilter, label }) => {
  return (
    <StyledSelect
      clearable={false}
      value={label ? { label } : filterOptions[0]}
      placeholder={"All"}
      onChange={input => changeFilter(input.value, input.label)}
      options={filterOptions}
    />
  );
};
FilterSelect.proptypes = {
  changeFilter: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default FilterSelect;
