import styled from "styled-components";
import { Img } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const ProductImage = styled(Img)`
	width: 248px;
	height: 248px;
	margin-right: 20px;
	object-fit: cover; /* Поддерживает одинаковый размер и обрезает изображение по необходимости */
	object-position: center; /* Центрирует изображение */
`;

export const ContentWrapper = styled.div`
	position: absolute;
	top: 20px;
	left: 288px;
	width: 417px;
	min-height: 248px;
	padding-bottom: 30px;
	box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
	margin-bottom: 15px;
`;

export const Price = styled.span`
	position: absolute;
	bottom: 0;
	display: inline-block;
	padding: 4px 8px;
	font-size: 14px;
	font-weight: bold;
	line-height: 21px;
	background-color: ${(props) => props.theme.backgroundColorBlue};
`;
