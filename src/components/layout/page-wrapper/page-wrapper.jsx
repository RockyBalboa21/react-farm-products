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
        <h3>Вёрстка layout</h3>

        <div>По аналогии можно создать и написать стили для всех компонентов директории layout, а также использующихся в layout компонентов Button и Logo. В результате, если подключить PageWrapper в App, то будет выведена страница с шапкой и подвалом, но пока без контента.</div>
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
