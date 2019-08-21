import React, { lazy } from "react";
import cv from "../assets/cv.pdf";
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
		Custom: <a href={cv} target={"_blank"}>CV</a>
	},
	{
		name: "About",
		path: "/about",
		exact: true,
		Component: <div></div>
	},
	{
		name: "Contacts",
		path: "/contacts",
		exact: true,
		Component: <div></div>
	}
];

export default routes;