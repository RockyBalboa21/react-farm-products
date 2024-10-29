import styled, { css } from "styled-components";
import { TitleSize, TitleSizeValue } from "./titleSizes";

// Заголовок
const Title = styled.h1`
    margin: 0;
    padding: 0;
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    font-weight: bold;
    ${(props) => {
        const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
        return css`
            font-size: ${values.fontSize};
            line-height: ${values.lineHeight};
        `;
    }};
`;

export default Title;
export { TitleSize };
