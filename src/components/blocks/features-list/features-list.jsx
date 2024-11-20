import PropTypes from 'prop-types'; // Добавляем propTypes для валидации пропсов
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledButton, StyledTitle } from "./styles";
import { AppRoute } from "/src/const";

// список преимуществ
function FeaturesList({
    features // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
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
            <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
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
