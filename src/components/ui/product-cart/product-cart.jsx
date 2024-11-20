import PropTypes from "prop-types";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize } from "/src/components/ui/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";

function ProductCart({ product }) {
    const tabsList = [
        {
            title: "Описание",
            content: product.description,
        },
        {
            title: "Характеристики",
            content: <OptionsList list={product.specifications} />,
        },
        {
            title: "Свойства",
            content: <OptionsList list={product.structure} />,
        },
    ];
    return (
        <Panel>
            <ProductImage src={product.image} />
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Tabs maxContentHeiht="105px" tabsList={tabsList} />
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
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
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
    }).isRequired,
};

export default ProductCart;
