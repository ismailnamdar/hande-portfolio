import React from "react";
import styled from "styled-components";
import cv from "../assets/cv.png";

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

const Cv = () => {
	const handleClick = () => {

	};
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "bsf.jpg"}>
		<a><img src={cv} alt="Hande Hamamci Cv" width="600px" height="100%" /></a>
	</StyledDiv>
};

export default Cv;