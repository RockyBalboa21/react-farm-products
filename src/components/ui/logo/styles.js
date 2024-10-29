// .logo__link {
//     display: flex;
//     margin-left: -4px;
//     height: 44px;
//     align-items: center;
//     text-decoration: none;
//     color: #333333;
// }

// .logo__link:hover,
// .logo__link:active,
// .logo__link:visited {
//     text-decoration: none;
//     color: #333333;
// }

// .logo__text {
//     display: flex;
//     min-height: 44px;
//     margin-left: 25px;
//     font-weight: bold;
//     font-size: 28px;
//     line-height: 44px;
//     color: #333333;
// }

import styled from "styled-components";

export const StyledLogo = styled.a`
	display: flex;
	margin-left: -4px;
	height: 44px;
	align-items: center;
	text-decoration: none;
	color: ${(props) => props.theme.fontColorBlack};

	&:hover,
	&:active,
	&:visited {
		text-decoration: none;
		color: ${(props) => props.theme.fontColorBlack};
	}
`;

export const Text = styled.span`
	display: flex;
	min-height: 44px;
	margin-left: 25px;
	font-weight: bold;
	font-size: 28px;
	line-height: 44px;
	color: ${(props) => props.theme.colorBlackForText};
`;
