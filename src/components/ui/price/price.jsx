import PropTypes from "prop-types";
import { StyledPrice } from "./styles";

const formatPrice = (value) => {
    const roundedPrice = Math.round(value);
    return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

// Отформатированная цена
function Price({ value, className }) {
    return (
        <StyledPrice className={className}>
            {formatPrice(value)} руб.
        </StyledPrice>
    );
}

Price.propTypes = {
    value: PropTypes.number.isRequired,  // Указываем, что value должен быть числом и является обязательным
    className: PropTypes.string,  // Указываем, что className может быть строкой
};

export default Price;
