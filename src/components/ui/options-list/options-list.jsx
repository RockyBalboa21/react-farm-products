import PropTypes from "prop-types";
import { Ul } from "/src/components/styled";
import { Option, Property } from "./styles";

function OptionsList({ list = [], delimeter = ": " }) {
    return (
        <Ul>
            {list.map((option, index) => (
                <Option key={`tab${index * 10}`}>
                    <Property>
                        {option.property}
                        {delimeter}
                    </Property>
                    {option.value}
                </Option>
            ))}
        </Ul>
    );
}

OptionsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            property: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    delimeter: PropTypes.string,
};

export default OptionsList;
