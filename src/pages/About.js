import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
	background: ${props => props.theme.thirdColor} url(${props => props.backgroundImageUrl});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const About = () => {
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "bsf.jpg"}>

	</StyledDiv>
};

export default About;