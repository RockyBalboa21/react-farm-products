import Button from "/src/components/ui/button/button";
import { Label } from "./styles";

function OrderPopup() {
	return (
		<form>
			<Label>
				Имя: <input />
			</Label>
			<Label>
				Телефон: <input type="tel" />
			</Label>
			<Label>
				Ваш e-mail адрес: <input type="email" />
			</Label>
			<Button>ГОТОВО</Button>
		</form>
	);
}

export default OrderPopup;
