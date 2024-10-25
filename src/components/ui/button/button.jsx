// import React from "react";
// import "./style.css";

// function Button({ children }) {
//   return (
//     <button type="button" className="button">
//       {children}
//     </button>
//   );
// }

// export default Button;

import React from "react";
import { StyledButton } from "./styles";

function Button({
	children, // дочерний элемент, отображаемый в кнопке
	link, // ссылка
	maxWidth, // делает кнопку на 100% родителя
	className, // класс
	onClick, // событие по клику
	...props // остальные переданные пропсы
}) {
	return (
		<StyledButton
			{...props}
			$maxWidth={maxWidth}
			{...(link
				? { to: link }
				: { as: "button", onClick, type: "button" })}
			className={className}
		>
			{children}
		</StyledButton>
	);
}

export default Button;
