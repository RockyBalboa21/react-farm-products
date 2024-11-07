import PropTypes from 'prop-types';
import { StyledButton } from "./styles";

function Button({
    children, // дочерний элемент, отображаемый в кнопке
    link = null, // ссылка
    maxWidth = false, // делает кнопку на 100% родителя
    className = '', // класс
    onClick = null, // событие по клику
    ...props // остальные переданные пропсы
}) {
    return (
        <StyledButton
            {...props}
            $maxWidth={maxWidth}
            {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
            className={className}
        >
            {children}
        </StyledButton>
    );
}

// Добавляем propTypes для валидации пропсов
Button.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    maxWidth: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
