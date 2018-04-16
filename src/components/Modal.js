import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import x from "../images/close.png";

const STATE_IPSUM =
  "Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum ";

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  border-radius: 3px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 40px;
  color: #093260;
`;

const CloseContainer = styled.div`
  position: relative;
  display: flex;
  font-size: 13px;
  left: 10px;
  bottom: 10px;
`;

const Label = styled.div`
  color: #093260;
  margin-right: 5px;
`;

const X = styled.img`
  padding-top: 2px;
  height: 25%;
  width: 25%;
`;

const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const modal = ({ state, closeModal }) => {
  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <Title>{state}</Title>
          <CloseContainer>
            <Label>Close</Label>
            <X onClick={() => closeModal()} src={x} />
          </CloseContainer>
        </Header>
        <Description>{STATE_IPSUM}</Description>
      </ModalContainer>
    </Overlay>
  );
};
modal.proptypes = {
  state: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default modal;
