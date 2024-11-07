import { useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { Close, Wrapper, Header } from "./styles";

export default function PopUp({ isShow, onClose, title, children }) {
    const handlerEsc = useCallback((evt) => {
        if (evt.keyCode === 27) {
            onClose && onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener("keydown", handlerEsc);
        return () => {
            document.removeEventListener("keydown", handlerEsc);
        };
    }, [handlerEsc]);

    return isShow ? (
        <Wrapper>
            <Header>
                {title}{" "}
                <Close onClick={onClose}>
                    x
                </Close>
            </Header>
            {children}
        </Wrapper>
    ) : null;
}

// Добавляем propTypes для валидации пропсов
PopUp.propTypes = {
    isShow: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


