import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
	color: ${props => props.theme.thirdColor};
	font-size: 18px; 
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const UList = ({ children }) => {
	return <StyledList>{children}</StyledList>
};
export default UList;
