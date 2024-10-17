import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import "./style.css";

export default function App() {
  return <PageWrapper features={features} />;
}
