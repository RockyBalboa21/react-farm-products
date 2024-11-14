import { useState } from "react";
import PopUp from "/src/components/ui/popup/popup";
import Button from "/src/components/ui/button/button"
import OrderPopup from "../../ui/popup-order/popup-order";


function Nav() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <nav>
      <Button onClick={() => setIsShowPopup(true)}>Купить</Button>

      <PopUp
				isShow={isShowPopup}
				onClose={() => setIsShowPopup(false)}
				title="Оформить заказ"
			>
				<OrderPopup />
			</PopUp>
    </nav>
  );
}

export default Nav;
