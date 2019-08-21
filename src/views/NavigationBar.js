import React from "react";
import routes from "../configs/routes";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import {theme} from "../constants";

const Nav = styled.ul`
	list-style-type: none;
	position: absolute;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    display: block;
		text-align: center;
		padding: 14px 16px;
		font-family: Arial;
		&:hover {
			background-color: ${(props) => props.theme.secondaryColor};
    	color: ${(props) => props.theme.fourthColor};
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
const NavigationBar = ({ match, location, history } ) => {
	return <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}><Nav>
		{routes.map(({name, path, Custom }) =>
			name != null && <NavItem key={name + path}>{Custom == null ? <Link key={path} to={path} style={{color: path === location.pathname ? theme.fourthColor : theme.secondaryColor, backgroundColor: path === location.pathname && theme.secondaryColor }}>{name}</Link> : Custom(path === location.pathname)}</NavItem>)}
	</Nav></div>
};

export default withRouter(NavigationBar);