import { useState } from "react";
import PopUp from "/src/components/ui/popup/popup";
import Button from "/src/components/ui/button/button";
import OrderPopup from "../../ui/popup-order/popup-order";

function Nav() {
    const [isShowPopup, setIsShowPopup] = useState(false);

    // Функция для закрытия попапа
    const closePopup = () => {
        setIsShowPopup(false);
    };

    return (
        <nav>
            <Button onClick={() => setIsShowPopup(true)}>Купить</Button>

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
