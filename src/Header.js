
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const HeadingWrapper = styled.div`
 background-color: grey;
 height: 50px;
 margin-top: 0;
`;

const Header = () => (
<HeadingWrapper>

      <Link to="/">Home</Link>

</HeadingWrapper>
);

export default Header;