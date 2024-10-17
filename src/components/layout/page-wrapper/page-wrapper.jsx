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
          <h3>Реализация компонента FeatureCard</h3>
          <p>Подставим данные из props feature в JSX-разметку компонента FeatureCard. Для негативных карточек будем использовать модификатор «negative». В результате FeatureCard после шаблонизации будет выглядеть так. </p>
          <p>Главная страница готова.</p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
