import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import Button from "/src/components/ui/button/button";
import {
    LeftColumn,
    StyledOrder,
    AddressInput,
    PriceLabel,
    PriceValue,
    ProductSwiper,
} from "./styles";
import PropTypes from 'prop-types';
import { Pagination, Mousewheel, Scrollbar } from 'swiper/modules';
import SwiperCore from "swiper/core";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

// Оформление заказа
function Order({ products }) {
    SwiperCore.use([Mousewheel, Pagination, Scrollbar]);
    return (
        <StyledOrder as="form">
            <LeftColumn>
                <Panel $marginBottom={20} $paddingTop={24} $paddingBottom={10}>
                    <Title
                        as="h2"
                        size={TitleSize.EXTRA_SMALL}
                        $marginBottom={12}
                    >
                        Выберите продукты
                    </Title>
                    Чекбокс со списком продуктов
                </Panel>
                <Panel>
                    <Title size={TitleSize.EXTRA_SMALL} $marginBottom={24}>
                        Сделать заказ
                    </Title>
                    <AddressInput placeholder="Введите адрес доставки" />
                    <PriceLabel as="span">Цена</PriceLabel>
                    <PriceValue>400</PriceValue>
                    <Button maxWidth>Купить</Button>
                </Panel>
            </LeftColumn>
            <ProductSwiper
                spaceBetween={12}
                direction="vertical"
                slidesPerView="auto"
                scrollbar={{ draggable: true }}
                mousewheel
                pagination={{
                type: "fraction"
                }}
            >
                {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCart product={product} />
                </SwiperSlide>
                ))}
            </ProductSwiper>
        </StyledOrder>
    );
}

// Указываем propTypes для валидации
Order.propTypes = {
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

export default Order;
