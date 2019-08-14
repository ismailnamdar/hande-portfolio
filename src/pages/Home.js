import React from "react";
import styled from "styled-components";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const StyledDiv = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  padding-top: 50px;
	background: ${props => props.theme.thirdColor} url(${props => props.backgroundImageUrl});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const StyledSpan = styled.span`
	margin-top: 1em;
	font-size: 84px;
	font-weight: bold;
	font-family: MyFont;
	color: ${props => props.theme.secondaryColor}
`;
const StyleImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 40px;
`;
const StyledBottomDiv = styled.div`
	position:absolute;
	bottom:0;
	right:0;
	padding: 1em;
`;
const Home = () => {
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "/mik.jpg"}>
		<StyledSpan>Hande Hamamcı</StyledSpan>
		<StyledBottomDiv>
			<a target={"_blank"} href={"https://www.instagram.com/handehamamci"}><StyleImg src={instagram}/></a>
			<a target={"_blank"} href={"https://www.linkedin.com/in/hande-hamamc%C4%B1-477395188/"}><StyleImg src={linkedin}/></a>
		</StyledBottomDiv>
	</StyledDiv>
};

export default Home;