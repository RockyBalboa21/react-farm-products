import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function About() {
  return (
    <section className="about">
      <Title size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <p>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </p>
    </section>
  );
}

export default About;
