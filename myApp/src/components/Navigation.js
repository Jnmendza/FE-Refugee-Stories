import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    background: #3C3C54;
    justify-content: flex-end;
`;


const NavigationLinks = styled.div`
    display: flex;
    width: 85%;
    margin: auto 0;
    justify-content: flex-end;
`;


const StyledNavLink = styled(NavLink)`
    color: white;
    margin:  20px;
    text-decoration: none;

`;

const Navigation = () => {
  return (
    
      <Nav>
          
        <h1>Refugee Stories</h1>
           
          <NavigationLinks>     
            <StyledNavLink to="/">Home</StyledNavLink>      
            <StyledNavLink to="/about">About</StyledNavLink>       
            <StyledNavLink to="/stories">Stories</StyledNavLink>       
            <StyledNavLink to="/submit">Submit Your Story</StyledNavLink>
            <StyledNavLink to="/login">Admin Login</StyledNavLink>    
          </NavigationLinks>

      </Nav>
    
  );
};

export default Navigation;
