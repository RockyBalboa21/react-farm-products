import PropTypes from "prop-types";
import { Label, VisuallyHiddenInput } from "/src/components/styled";

// чекбокс
function Checkbox({
    onClick,
    labelComponent, // Компонент для отображения label
    isChecked, // выбранно ли значение
    name, // имя
    value, // значение
    text, // текст элемента
    onChange, // событие при изменении
    ...props
}) {
    const LabelComponent = labelComponent;

    // Передаем только нужные пропсы в VisuallyHiddenInput
    const inputProps = {
        value,
        checked: isChecked,
        name,
        onChange: () => onChange(value),
        type: "checkbox",
        ...props,
    };

    return (
        <Label>
            <VisuallyHiddenInput {...inputProps} />
            <LabelComponent
                onClick={() => onClick(value)}
                $isChecked={isChecked}
            >
                {text}
            </LabelComponent>
        </Label>
    );
}

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    labelComponent: PropTypes.elementType.isRequired,
    isChecked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
