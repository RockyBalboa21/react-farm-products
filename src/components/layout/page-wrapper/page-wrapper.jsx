import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import "./style.css";

// Обёртка для контента страниц
function PageWrapper({ features }) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage features={features} />

        <div>
          <h3>Шаблонизация FeaturesList</h3>
          <p>Внутри компонента FeaturesList нужно c помощью map превратить каждый элемент массива features в компонент FeatureCard. </p>
          <p>Нужно учесть, что в списке преимуществ может по ошибке прийти не массив. Это нужно проверить через features && features.length</p>
          <p>Теперь на экран будет выведено столько карточек, сколько есть элементов в массиве features.</p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
