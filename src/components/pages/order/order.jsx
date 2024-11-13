import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import {
    LeftColumn,
    StyledOrder,
    AddressInput,
    PriceLabel,
    PriceValue,
} from "./styles";
import PropTypes from 'prop-types';

// Оформление заказа
function Order({ products }) {
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
            <div>Сюда нужно добавить слайдер с продуктами</div>
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
