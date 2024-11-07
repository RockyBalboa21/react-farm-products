import { useState } from "react";
import PopUp from "/src/components/ui/popup/popup";
import Order from "/src/components/ui/order/order";
import Button from "/src/components/ui/button/button"


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
				<Order />
			</PopUp>
    </nav>
  );
}

export default Nav;
