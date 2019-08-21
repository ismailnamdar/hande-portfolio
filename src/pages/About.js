import React from "react";
import styled from "styled-components";
import guitar from "../assets/guitar.jpeg";
import drawing from "../assets/drawing.jpeg";
import painting from "../assets/painting.jpeg";
import UList from "../views/UList";
import Header1 from "../views/Header1";
import Layout from "../views/Layout";

const StyledImg = styled.img`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: ${props => props.height / 2}px;
	margin: ${props => props.margin || 0};
	object-fit: cover;
	&:not(:last-child){
			margin-right: 30px;
	}
`;
const About = () => {
	return <Layout>
		<Header1>Personal Information</Header1>
		<UList>
			<span>Name&Surname: Hande Hamamci</span>
			<span>Birthdate: 02.01.1998</span>
			<span>Birthplace: Istanbul, Turkey</span>
			<span>Marital Status: Single</span>
			<span>Driving Licence: B</span>
		</UList>
		<Header1>Education</Header1>
		<UList>
			<span>2017-2020: Istanbul Technical University</span>
			<span>2015-2016: Private Bogazici Anatolian High School</span>
			<span>2012-2015: Nevzat Ayaz Anatolian High School</span>
		</UList>
		<Header1>Languages</Header1>
		<UList>
			<span>Turkish: Native</span>
			<span>English: Upper-Intermediate</span>
		</UList>
		<Header1>Skills</Header1>
		<UList>
			<span>Microsoft Office Programs</span>
			<span>MATLAB</span>
			<span>Python</span>
			<span>Adobe Photoshop</span>
			<span>Adobe Illustrator</span>
		</UList>
		<Header1>Personal Properties</Header1>
		<UList>
			<span>Energetic, positive, creative, curious, open-minded, hard-working, ambitious, open-learning and compatible with teamwork.</span>
		</UList>
		<Header1>Vision</Header1>
		<UList>
			<span>Improving and carrying up myself and the company that i work for with my abilities, knowledge and personality.</span>
		</UList>
		<Header1>Hobies & Activities</Header1>
		<UList>
			<span>Oil Painting</span>
			<span>Electro Guitar</span>
			<span>Drawing</span>
			<span>Reading</span>
		</UList>
		<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "1em", flexWrap: 'wrap'}}>
			<StyledImg src={painting} height={200} width={200}/>
			<StyledImg src={guitar} height={200} width={200}/>
			<StyledImg src={drawing} height={200} width={200}/>
		</div>
	</Layout>
};

export default About;