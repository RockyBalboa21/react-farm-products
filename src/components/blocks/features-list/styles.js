// .features {
//     position: relative;
//     display: flex;
//     padding-left: 90px;
//     padding-right: 90px;
//     box-sizing: border-box;
//     padding-top: 100px;
//     padding-bottom: 100px;
//     flex-direction: column;
//     align-items: center;
// }

// .features__list {
//     margin: 0;
//     padding: 0;
//     margin-top: 44px;
//     margin-bottom: 64px;
//     margin-left: -20px;
//     font-size: 0;
//     line-height: 0;
//     text-align: center;
// }

// .features__item {
//     display: inline-block;
//     margin-left: 20px;
//     margin-top: 20px;
//     font-size: 18px;
//     line-height: 27px;
//     vertical-align: top;
//     text-align: left;
//     overflow: hidden;
// }

import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const Features = styled(Section)`
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;
	flex-direction: column;
	align-items: center;
`;

export const StyledTitle = styled(Title)`
	margin-bottom: 64px;
	text-align: center;
`;

export const StyledButton = styled(Button)`
	margin-top: 64px;
`;
