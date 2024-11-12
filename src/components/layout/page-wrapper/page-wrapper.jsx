import PropTypes from 'prop-types';
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import Order from "/src/components/pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <Main>
                <Order {...prop} />
            </Main>
            <Footer />
        </>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.node,
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

export default PageWrapper;
