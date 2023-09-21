import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AboutMenu = () => (
  <NavItem>
    <NavLink name="About" id="about-menu" data-cy="aboutMenu" tag={Link} to="about" className="d-flex align-items-center">
      <FontAwesomeIcon icon="eye" />
      <span>About</span>
    </NavLink>
  </NavItem>
);

export default AboutMenu;
