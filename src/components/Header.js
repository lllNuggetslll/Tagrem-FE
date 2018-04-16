import React, { Fragment } from "react";
import PropTypes from "prop-types";
import banner from "../images/banner.jpg";
import styled from "styled-components";

import fb from "../images/fb.png";
import pin from "../images/pinterest.png";
import blog from "../images/blog.png";
import twit from "../images/twitter.png";
import email from "../images/email.png";

const picArray = [fb, twit, pin, blog, email];

const BannerHeader = styled.img`
  width: 100%;
`;

const ContactContainer = styled.div`
  color: white;
  bottom: 50px;
  left: 70%;
  position: relative;
  display: flex;
  color: white;
  width: auto;

  @media (max-width: 620px) {
    bottom: 25px;
    left: 55%;
  }
`;

const Contact = styled.div`
  margin-right: 10px;
`;

const Header = ({ picArray }) => (
  <Fragment>
    <BannerHeader src={banner} />
    <ContactContainer>
      <Contact>Contact</Contact>
      {picArray.map(pic => <img key={pic} src={pic} alt="" />)}
    </ContactContainer>
  </Fragment>
);
Header.proptypes = {
  picArray: PropTypes.array.isRequired
};
Header.defaultProps = {
  picArray
};

export default Header;
