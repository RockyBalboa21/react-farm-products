import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import "./style.css";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
        <div>
        <h3>Вёрстка блока FeaturesList</h3>
        <p>По аналогии с About реализуем блок FeaturesList и вставим его на страницу под About. На данный момент мы делаем всю вёрстку статичной, не думая о данных, поэтому FeatureCard будет включать в себя только одну карточку с преимуществами со статичными данными.</p>
        <p>Опишем стили в style.css. Реализуем компонент FeatureCard, заполнив его статическими данными</p>
      </div>
      </main>

      <Footer />
    </>
  );
}

export default PageWrapper;
