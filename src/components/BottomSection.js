import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { bottomSectionData } from "../data/data";
import { filterFunc } from "./utils";

import Tile from "./Tile";
import ProductDetails from "./ProductDetails";
import FilterSelect from "./FilterSelect";

const BottomSectionContainer = styled.div`
  margin-top: 5px;
  background-color: #f2f2f2;
  padding: 40px;

  @media (max-width: 465px) {
    min-width: 280px;
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: #002b5a;
  font-size: 40px;
  margin-right: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterContainer = styled.div`
  display: flex;
`;

const Label = styled.div`
  line-height: 36px;
  margin-right: 10px;
  white-space: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default class BottomSection extends Component {
  state = {
    selectedProduct: null,
    filter: null,
    filterValue: null
  };

  handleSelectProduct = productIndex => {
    this.setState({ selectedProduct: productIndex });
  };

  handleCloseProductDetails = () => {
    this.setState({ selectedProduct: null });
  };

  handleFilterSelect = (filter, filterValue) => {
    this.setState({ filter, filterValue });
  };

  render() {
    const { selectedProduct, filter, filterValue } = this.state;
    const { bottomSectionData } = this.props;
    const filteredData = filter
      ? bottomSectionData.filter(product => {
          const { price } = product;
          if (filterFunc(filter, price)) return product;
        })
      : bottomSectionData;

    return (
      <BottomSectionContainer>
        <Header>
          <Title>Products</Title>
          <FilterContainer>
            <Label>Filter by</Label>
            <FilterSelect
              changeFilter={this.handleFilterSelect}
              label={filterValue}
            />
          </FilterContainer>
        </Header>
        <ContentContainer>
          {filteredData.map(product => {
            const { title, price, description, picture } = product;

            return (
              <Tile
                key={title}
                title={title}
                price={price}
                description={description}
                picture={picture}
                selectProduct={this.handleSelectProduct}
                data={product}
              />
            );
          })}
        </ContentContainer>
        {selectedProduct !== null && (
          <ProductDetails
            data={selectedProduct}
            closeProduct={this.handleCloseProductDetails}
          />
        )}
      </BottomSectionContainer>
    );
  }
}
BottomSection.proptypes = {
  bottomSectionData: PropTypes.object.isRequired
};
BottomSection.defaultProps = {
  bottomSectionData
};
