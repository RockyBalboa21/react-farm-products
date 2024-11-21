import { useState } from "react";
import PopUp from "/src/components/ui/popup/popup";
import Button from "/src/components/ui/button/button";
import OrderPopup from "../../ui/popup-order/popup-order";
import { Ul, Li, StyledButton } from "./styles"; // Импортируем стили отсюда
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavUl = styled(Ul)`
  display: flex; /* Горизонтальное расположение */
  justify-content: flex-start; /* Выравнивание по началу */
  align-items: center; /* Выравнивание по вертикали */
`;

const links = [
    {
        to: AppRoute.MAIN,
        item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
    },
    { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> },
];

function Nav() {
    const [isShowPopup, setIsShowPopup] = useState(false);

    // Функция для закрытия попапа
    const closePopup = () => {
        setIsShowPopup(false);
    };

    const pageUrl = useLocation().pathname;

    return (
        <nav>
            <NavUl> {/* Используем новый компонент NavUl */}
                {links
                    .filter((link) => link.to !== pageUrl)
                    .map((link) => (
                        <Li key={link.to}>{link.item}</Li>
                    ))}
                <Li>
                    <Button onClick={() => setIsShowPopup(true)}>Оформить заказ</Button>
                </Li>
            </NavUl>

            <PopUp
                isShow={isShowPopup}
                onClose={closePopup}
                title="Оформить заказ"
            >
                {isShowPopup && <OrderPopup onClose={closePopup} />}
            </PopUp>
        </nav>
    );
}

export default Nav;
