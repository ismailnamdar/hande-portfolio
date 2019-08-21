import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 50px;
	background: ${props => props.theme.thirdColor} url(${props => props.backgroundImageUrl});
	background-color: ${props => props.theme.fourthColor};
  background-position: top right;
  background-repeat: repeat;
  background-size: 100%;
`;
const Layout = ({ children }) => {
	return <StyledDiv backgroundImageUrl={process.env.PUBLIC_URL + "bsf.jpg"}>
		{children}
	</StyledDiv>
};

export default Layout;