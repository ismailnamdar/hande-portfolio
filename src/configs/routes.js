import React, { lazy } from "react";
import cv from "../assets/cv.pdf";
import {theme} from "../constants";
const Home = lazy(() => import('../pages/Home'));

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
		Custom: (isActive) => <a href={cv} target={"_blank"} style={{color: isActive ? theme.fourthColor : theme.secondaryColor, backgroundColor: isActive && theme.secondaryColor }}>CV</a>
	},
	{
		name: "About",
		path: "/about",
		exact: true,
		Component: Home
	},
	{
		name: "Contacts",
		path: "/contacts",
		exact: true,
		Component: Home
	}
];

export default routes;