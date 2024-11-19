import PropTypes from "prop-types";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ products }) {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}

PageWrapper.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			weight: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			specifications: PropTypes.arrayOf(
				PropTypes.shape({
					property: PropTypes.string.isRequired,
					value: PropTypes.string.isRequired,
				})
			).isRequired,
			structure: PropTypes.arrayOf(
				PropTypes.shape({
					property: PropTypes.string.isRequired,
					value: PropTypes.string.isRequired,
				})
			).isRequired,
		})
	).isRequired,
};

export default PageWrapper;
