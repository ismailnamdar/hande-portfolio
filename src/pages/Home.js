import React from "react";
import styled from "styled-components";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const StyledDiv = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
	background: ${props => props.theme.thirdColor} url(${props => props.backgroundImageUrl});
  background-color: ${props => props.theme.fourthColor};
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const StyledSpan = styled.span`
	font-size: 84px;
	font-weight: 200;
	font-family: MyFont;
	text-align: center;
	color: ${props => props.theme.secondaryColor}
`;
const StyleImg = styled.img`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: ${props => props.height / 2}px;
	margin: ${props => props.margin || 0}
`;
const StyledBottomDiv = styled.div`
	position:absolute;
	bottom:0;
	right:0;
	padding: 1em;
`;
const StyledDescriptionSpan = styled.span`
	padding: 0.5em;
	color: ${props => props.theme.thirdColor};
	font-family: MyFont;
	font-size: 32px;
	float: right;
`;
const StyledContentSpan = styled.span`
	padding: 0.5em;
	width: 400px;
	font-family: Century Gothic;
	font-weight: 400;
	font-size: 18px;
	text-align: center;
	color: ${props => props.theme.thirdColor};
	float: right;
`;

const ProfileImage = styled.img`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: ${props => props.height / 2}px;
	margin: ${props => props.margin || 0};
	box-shadow: 0px 0px 30px 2px white;
`;
const Home = () => {
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "bsf.jpg"}>
		<div style={{
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			marginRight: "60px",
			flexWrap: 'wrap',
			marginTop: 90
		}}>
			<ProfileImage src={"cv.jpg"} height={400} width={400} margin={"0px 90px 0 0"}/>
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
				<StyledSpan>Hande Hamamcı</StyledSpan>
				<div>
					<StyledDescriptionSpan>Textile Engineer</StyledDescriptionSpan>
				</div>
				<StyledContentSpan>
					My name is Hande.<br/>
					I am a student of Istanbul Technical University. <br/>
					I live in Istanbul, Turkey.</StyledContentSpan>
			</div>
		</div>
		<StyledBottomDiv>
			<a target={"_blank"} href={"https://www.instagram.com/handehamamci"}><StyleImg height={50} width={50} src={instagram}/></a>
			<a target={"_blank"} href={"https://www.linkedin.com/in/hande-hamamc%C4%B1-477395188/"}><StyleImg  height={50} width={50} src={linkedin}/></a>
		</StyledBottomDiv>
	</StyledDiv>
};

export default Home;