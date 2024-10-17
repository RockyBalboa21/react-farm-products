import React from "react";
import Title, { TitleSize } from "../title/title";
import "./style.css";

// Карточка
function FeatureCard() {
  return (
    <section className="feature">
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src="https://i.ibb.co/xGg2GfP/eat-1.png"
          alt="Еда намного вкуснее"
        />
        <div>
          <span className="feature__owner">Фермерские продукты</span>
          <Title size={TitleSize.EXTRA_SMALL}>Еда намного вкуснее</Title>
        </div>
      </header>
      <p className="feature__text">
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники
      </p>
    </section>
  );
}

export default FeatureCard;
