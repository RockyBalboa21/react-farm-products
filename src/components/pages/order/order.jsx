import { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
    LeftColumn,
    StyledOrder,
    AddressInput,
    PriceLabel,
    PriceValue,
    ProductSwiper,
    CheckboxLabel,
} from "./styles";
import PropTypes from 'prop-types';
import { Pagination, Mousewheel, Scrollbar } from 'swiper/modules';
import SwiperCore from "swiper/core";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

// Оформление заказа
function Order({
  products // список продуктов
}) {
    SwiperCore.use([Mousewheel, Pagination, Scrollbar]);
    const [swiperRef, setSwiperRef] = useState(null);
    const [selectProductIds, setSelectProductIds] = useState([]);

//id в продукты
    const selectProducts = selectProductIds.map((id) => products.find((product) => product.id === id));
//цена покупки
    const fullPrice = selectProducts.reduce((sum, product) => (sum += product.price), 0);
    const handleOnClickProduct = (value, index) => {
        if (!selectProductIds.includes(value)) {
        swiperRef.slideTo(index, 0);
        }
    };
// адрес покупки
    const [address, setAddress] = useState("");
    const handleBuyClick = () => {
        // eslint-disable-next-line no-alert
        alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
        (product) => `${product.name} - ${product.price} руб.\n`
        )}
        Итого: ${fullPrice} руб.
        Доставка по адресу: ${address}.`);
    };
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
                    <CheckboxList
                        labelComponent={CheckboxLabel}
                        name={"select-products"}
                        isGridList={false}
                        options={products.map((product) => ({
                        value: product.id,
                        title: product.name
                        }))}
                        selectValues={selectProductIds}
                        onChange={setSelectProductIds}
                        onClickLabel={handleOnClickProduct}
                    />
                </Panel>
                <Panel>
                    <Title size={TitleSize.EXTRA_SMALL} $marginBottom={24}>
                        Сделать заказ
                    </Title>
                    <AddressInput
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Введите адрес доставки"
                    />
                    <PriceLabel as="span">Цена</PriceLabel>
                    <PriceValue value={fullPrice} />
                    <Button maxWidth onClick={handleBuyClick}>Купить</Button>
                </Panel>
            </LeftColumn>
            <ProductSwiper
                onSwiper={setSwiperRef}
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
