import Button from "/src/components/ui/button/button";
import { Label } from "./styles";

function Order() {
	return (
		<form>
			<Label>
				Имя: <input />
			</Label>
			<Label>
				Телефон: <input type="tel" />
			</Label>
			<Label>
				Адрес доставки: <input />
			</Label>
			<Button>ГОТОВО</Button>
		</form>
	);
}

export default Order;
