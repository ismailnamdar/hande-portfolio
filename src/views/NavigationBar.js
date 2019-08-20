import React from "react";
import routes from "../configs/routes";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
	list-style-type: none;
	position: absolute;
  margin: 0;
  padding: 0;
  a {
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
    display: block;
		text-align: center;
		padding: 14px 16px;
		font-family: Arial;
		&:hover {
			 background-color: ${(props) => props.theme.primaryColor};
    	color: white;
		}
  }
`;

const NavItem = styled.li`
	float: left;
`;
/**
 * contains localization toggle item and routes
 * @returns {*}
 * @constructor
 */
const NavigationBar = () => <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}><Nav>
	{routes.map(({name, path}) =>
		name != null && <NavItem key={name + path}><Link key={path} to={path}>{name}</Link></NavItem>)}
</Nav></div>;

export default NavigationBar;