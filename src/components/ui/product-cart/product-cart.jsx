import PropTypes from "prop-types";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize } from "/src/components/ui/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";

function ProductCart({ product }) {
	return (
		<Panel>
			<ProductImage src={product.image} />
			<ContentWrapper>
				<ProductTitle as="h3" size={TitleSize.SMALL}>
					{product.name}
				</ProductTitle>
				<Price>
					{product.price} руб. / {product.weight} гр.
				</Price>
			</ContentWrapper>
		</Panel>
	);
}

ProductCart.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		weight: PropTypes.number.isRequired,
	}).isRequired,
};

export default ProductCart;
