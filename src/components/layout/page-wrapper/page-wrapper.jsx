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
        <h3>Моки</h3>
        <p>Создадим в директории mocks файл features.js, в котором будет хранить данные о преимуществах фермерских продуктов</p>
        <p>Подключим features в компонент App и через props прокинем до компонента FeaturesList.</p>
      </div>
      </main>

      <Footer />
    </>
  );
}

export default PageWrapper;
