import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import "./style.css";

// список преимуществ
function FeaturesList({ features }) {
  return (
    <section className="features">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="features__list">
        <li className="features__item">
          <FeatureCard />
        </li>
      </ul>
      <Button>Купить</Button>
    </section>
  );
}

export default FeaturesList;
