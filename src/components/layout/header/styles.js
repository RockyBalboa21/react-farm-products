import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
	position: relative;
	width: ${(props) => props.theme.pageWidth};
	height: 80px;
	margin: 0 auto;
	padding-top: 0;
	padding-bottom: 0;
	justify-content: space-between;
	background-color: ${(props) => props.theme.colorWhite};
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),	0 0 1px rgba(0, 0, 0, 0.04);
	align-items: center;
	z-index: 5;
`;
