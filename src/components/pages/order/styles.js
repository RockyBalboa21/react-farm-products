import styled, { css } from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/text-input";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";

const leftWidth = "353px";

export const LeftColumn = styled.div`
	width: ${leftWidth};
	padding-right: ${(props) => props.theme.indent};
	overflow-y: overlay;
	max-height: 100%;
`;

export const StyledOrder = styled(Section)`
	position: absolute;
	top: ${(props) => props.theme.headerHeight};
	bottom: ${(props) => props.theme.footerHeight};
	display: flex;
	padding-top: 40px;
	padding-bottom: 0;
	background-color: ${(props) => props.theme.backgroundColorGray};
	max-width: ${(props) => props.theme.pageWidth};
`;

export const AddressInput = styled(TextInput)`
	margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled(Label)`
	font-size: 14px;
	margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
	margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
	width: 727px;
	flex: 1;
	display: flex;
	flex-direction: column; /* Вертикальное расположение карточек */
	align-items: flex-start; /* Выровнено по началу контейнера */

	.swiper-pagination {
		display: none;
	}

	.swiper-wrapper {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap; /* Запретить перенос слайдов на следующую строку */
		align-items: flex-start;
		justify-content: flex-start;
	}

	.swiper-slide {
		flex-shrink: 0; /* Отключить сжатие */
		margin-bottom: 12px; /* Фиксированный отступ между слайдами */
		width: 100%; /* Устанавливаем ширину слайдов */
		height: auto; /* Автоматическая высота */
		box-sizing: border-box; /* Гарантируем учет отступов и границ */
	}
`;

export const CheckboxLabel = styled.span`
	position: relative;
	display: flex;
	height: 56px;
	font-size: 18px;
	text-align: left;
	align-items: center;
	cursor: pointer;

	&::after {
		content: "";
		right: 0;
		display: block;
		position: absolute;
		height: 22px;
		width: 22px;
		${(props) =>
			props.$isChecked
				? css`
						background-color: #fc9b27;
						border: 1px solid rgba(0, 0, 0, 0.1);
						background-image: url(${checkboxSelect});
						background-repeat: no-repeat;
						background-position: center center;
				`
				: css`
						background-color: ${props.theme.backgroundColorGray};
						border: 1px solid rgba(0, 0, 0, 0.1);
				`}
	}
`;
