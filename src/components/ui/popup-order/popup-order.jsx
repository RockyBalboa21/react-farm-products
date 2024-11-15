import PropTypes from "prop-types";
import { useState } from "react";
import Button from "/src/components/ui/button/button";
import { Label } from "./styles";

function OrderPopup({ onClose }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const isFormValid = name && phone && email;

    const handleSubmit = () => {
        onClose(); // Закрыть попап
        // Отложенное показ сообщения alert
        setTimeout(() => { alert(`Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`); }, 100); // 100 миллисекунд должно быть достаточно
    };

    return (
        <form>
            <Label>
                Имя: <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </Label>
            <Label>
                Телефон: <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
            </Label>
            <Label>
                Ваш e-mail адрес: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </Label>
            <Button disabled={!isFormValid} onClick={handleSubmit}>ГОТОВО</Button>
        </form>
    );
}

OrderPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default OrderPopup;
