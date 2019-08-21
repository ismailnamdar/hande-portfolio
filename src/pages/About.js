import React from "react";
import styled from "styled-components";
import guitar from "../assets/guitar.jpeg";
import drawing from "../assets/drawing.jpeg";
import painting from "../assets/painting.jpeg";

const StyledDiv = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
	background: ${props => props.theme.thirdColor} url(${props => props.backgroundImageUrl});
	background-color: ${props => props.theme.fourthColor};
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const StyledH1 = styled.h1`
	color: ${props => props.theme.thirdColor};
`;
const StyledList = styled.div`
	color: ${props => props.theme.thirdColor};
	font-size: 18px; 
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
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
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "bsf.jpg"}>
		<StyledH1>Personal Information</StyledH1>
		<StyledList>
			<span>Name&Surname: Hande Hamamci</span>
			<span>Birthdate: 02.01.1998</span>
			<span>Birthplace: Istanbul, Turkey</span>
			<span>Marital Status: Married</span>
			<span>Driving Licence: B</span>
		</StyledList>
		<StyledH1>Education</StyledH1>
		<StyledList>
			<span>2017-2020: Istanbul Technical University</span>
			<span>2015-2016: Private Bogazici Anatolian High School</span>
			<span>2012-2015: Nevzat Ayaz Anatolian High School</span>
		</StyledList>
		<StyledH1>Languages</StyledH1>
		<StyledList>
			<span>Turkish: Native</span>
			<span>English: Upper-Intermediate</span>
		</StyledList>
		<StyledH1>Skills</StyledH1>
		<StyledList>
			<span>Microsoft Office Programs</span>
			<span>MATLAB</span>
			<span>Python</span>
			<span>Adobe Photoshop</span>
			<span>Adobe Illustrator</span>
		</StyledList>
		<StyledH1>Personal Properties</StyledH1>
		<StyledList>
			<span>Energetic, positive, creative, curious, open-minded, hard-working, ambitious, open-learning and compatible with teamwork.</span>
		</StyledList>
		<StyledH1>Vision</StyledH1>
		<StyledList>
			<span>Improving and carrying up myself and the company that i work for with my abilities, knowledge and personality.</span>
		</StyledList>
		<StyledH1>Hobies & Activities</StyledH1>
		<StyledList>
			<span>Oil Painting</span>
			<span>Electro Guitar</span>
			<span>Drawing</span>
			<span>Reading</span>
		</StyledList>
		<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "1em", flexWrap: 'wrap'}}>
			<StyledImg src={painting} height={200} width={200}/>
			<StyledImg src={guitar} height={200} width={200}/>
			<StyledImg src={drawing} height={200} width={200}/>
		</div>
	</StyledDiv>
};

export default About;