import React from "react";
import Layout from "../views/Layout";
import Header1 from "../views/Header1";
import UList from "../views/UList";

const Contacts = () => {
	return <Layout>
		<Header1>Contacts</Header1>
		<UList>
			<span>Cell-phone:	+90 539 817 70 80</span>
			<span>E-mail:	hande.hamamci@gmail.com</span>
		</UList>
	</Layout>;
};

export default Contacts;