import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
	color: ${props => props.theme.thirdColor};
`;
const Header1 = ({children}) => {
	return <StyledH1>{children}</StyledH1>
};

export default Header1;