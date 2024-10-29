// .feature {
//     width: 540px;
//     min-height: 197px;
//     padding: 20px;
//     background-color: #e1edce;
//     box-sizing: border-box;
// }

// .feature__header {
//     display: flex;
//     margin-bottom: 20px;
//     text-align: left;
// }

// .feature__img {
//     float: left;
//     width: 56px;
//     height: 56px;
//     margin-right: 20px;
// }

// .feature_negative {
//     background-color: #f8ddd7;
// }

// .feature__owner {
//     display: inline-block;
//     min-height: 25px;
//     margin-bottom: 4px;
//     padding-left: 10px;
//     padding-right: 10px;
//     font-size: 14px;
//     line-height: 25px;
//     color: #ffffff;
//     background-color: #88aa4d;
// }

// .feature__owner_negative {
//     background-color: #f75531;
// }

// .feature__text {
//     padding: 0;
//     margin: 0;
//     text-align: left;
// }

import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Feature = styled.article`
	width: 540px;
	min-height: 197px;
	padding: 20px;
	background-color: ${(props) => (props.$isNegative ? "#f8ddd7" : "#e1edce")};
	box-sizing: border-box;
`;

export const Image = styled(Img)`
	float: left;
	width: 56px;
	height: 56px;
	margin-right: ${(props) => props.theme.indent};
`;

export const Header = styled.header`
	display: flex;
	margin-bottom: ${(props) => props.theme.indent};
	text-align: left;
`;

export const Owner = styled.span`
	display: inline-block;
	min-height: 25px;
	margin-bottom: 4px;
	margin-left: ${(props) => props.indent};
	padding-left: 10px;
	padding-right: 10px;
	font-size: 14px;
	line-height: 25px;
	color: ${(props) => props.theme.colorWhite};
	background-color: ${(props) =>
		props.$isNegative
			? props.theme.panelBackgroundColorDanger
			: props.theme.panelBackgroundColor};
`;

export const Text = styled(P)`
	text-align: left;
`;
