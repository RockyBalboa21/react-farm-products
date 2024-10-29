import PropTypes from 'prop-types';
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";

function MainPage({ features }) {
    return (
        <>
            <About />
            <FeaturesList features={features} />
        </>
    );
}

// Добавляем propTypes для валидации пропсов
MainPage.propTypes = {
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

export default MainPage;
