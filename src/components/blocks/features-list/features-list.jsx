import PropTypes from 'prop-types';
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledButton, StyledTitle } from "./styles";

// список преимуществ
function FeaturesList({ features }) {
    return features && features.length ? (
        <Features>
            <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
            <Ul $isGridList>
                {features.map((feature) => (
                    <Li key={feature.id}>
                        <FeatureCard {...feature} />
                    </Li>
                ))}
            </Ul>
            <StyledButton link="/buy">Купить</StyledButton>
        </Features>
    ) : null;
}

// Добавляем propTypes для валидации пропсов
FeaturesList.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
            isNegative: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FeaturesList;
