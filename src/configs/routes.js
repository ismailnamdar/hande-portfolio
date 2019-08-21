import React, { lazy } from "react";
import cv from "../assets/cv.pdf";
import {theme} from "../constants";
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

const routes = [
	{
		name: "Home",
		path: "/",
		exact: true,
		Component: Home
	},
	{
		name: "CV",
		path: "/cv",
		exact: true,
		Custom: (isActive) => <a href={cv} target={"_blank"} style={isActive ? { color: theme.fourthColor, backgroundColor: theme.secondaryColor } : {}}>CV</a>
	},
	{
		name: "About",
		path: "/about",
		exact: true,
		Component: About
	},
	{
		name: "Contacts",
		path: "/contacts",
		exact: true,
		Component: Home
	}
];

export default routes;