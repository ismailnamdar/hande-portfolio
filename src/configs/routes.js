import React, { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));

const routes = [
	{
		name: "Home",
		path: "/",
		exact: true,
		Component: Home
	},
	{
		name: "Portfolio",
		path: "/portfolio",
		exact: true,
		Component: <div></div>
	},
	{
		name: "Experience",
		path: "/experience",
		exact: true,
		Component: <div></div>
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