import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/Button';

function Navbar() {
  return (
    <AppNav>
      <AppNavLink
        as={NavLink}
        exact={true}
        to='/'
        data-testid='news-api-navlink'>
        News Api
      </AppNavLink>

      <AppNavLink
        as={NavLink}
        to='/about'
        data-testid='about-navlink'>
        About
      </AppNavLink>
    </AppNav>
  );
}

const AppNav = styled.nav`
  grid-area: header;
  background-color: #f5f5f5;
  padding: 0 24px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 2px 6px 0 rgba(0, 0, 0, .26);
  z-index: 10;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  height: 64px;
`;

const AppNavLink = styled(Button)`
  padding: 0 16px;

  &.active {
    background-color: #dcdcdc;
  }
`;

export default Navbar;
