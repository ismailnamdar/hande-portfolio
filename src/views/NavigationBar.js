import React from "react";
import routes from "../configs/routes";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import {theme} from "../constants";
import Anime from "react-anime";

const Nav = styled.ul`
	list-style-type: none;
	position: absolute;
  margin: 0;
  padding: 0;
  a {
  	color: ${(props) => props.theme.secondaryColor};
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
const handleStyle = (isActive) => {
	return isActive ? { color: theme.fourthColor, backgroundColor: theme.secondaryColor } : {};
};
/**
 * contains localization toggle item and routes
 * @returns {*}
 * @constructor
 */
const NavigationBar = ({ match, location, history } ) => {
	console.log("Nav");
	return <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}><Nav>
		{routes.map(({name, path, Custom }) => {
			if(name != null) {
				return <NavItem key={name + path}>
					{Custom == null ?
						<Link
							key={path}
							to={path}
							style={handleStyle(path === location.pathname)}>
							{name}
						</Link> : Custom(path === location.pathname)}</NavItem>;
			}
			return <></>;
			})}
	</Nav></div>
};

export default withRouter(NavigationBar);