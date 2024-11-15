import PropTypes from "prop-types";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import { Ul, Li } from "/src/components/styled";

// Радиокнопка
function CheckboxList({
    selectValues, // массив выбранных значений
    labelComponent, // Компонент для отображения label
    options, // массив с объектами для выбора {title: заголовок, value: значение}
    name, // имя
    onChange, // событие при изменении
    isGridList,
    onClickLabel = () => {},
}) {
    const handleChange = (value) => {
        const newValue = [...selectValues];
        const indexValue = newValue.indexOf(value);
        if (indexValue !== -1) {
            newValue.splice(indexValue, 1);
        } else {
            newValue.push(value);
        }
        onChange && onChange(newValue);
    };

    return (
        <Ul $isGridList={isGridList}>
            {options.map((option, index) => (
                <Li key={option.value}>
                    <Checkbox
                        labelComponent={labelComponent}
                        // Убираем передачу selectValues как пропс
                        isChecked={selectValues.includes(option.value)}
                        name={name}
                        value={option.value}
                        text={option.title}
                        onClick={(value) => onClickLabel(value, index)}
                        onChange={handleChange}
                    />
                </Li>
            ))}
        </Ul>
    );
}

CheckboxList.propTypes = {
    selectValues: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    labelComponent: PropTypes.elementType.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
        })
    ).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isGridList: PropTypes.bool,
    onClickLabel: PropTypes.func,
};

export default CheckboxList;
