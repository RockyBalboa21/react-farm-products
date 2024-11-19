import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";

// Корневой компонент всего приложения
function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route exact path={AppRoute.MAIN}>
						<Route
							index
							element={
								<PageWrapper
									features={features}
									products={products}
								/>
							}
						/>
						<Route
							exact
							path={AppRoute.ORDER}
							element={
								<PageWrapper
									features={features}
									products={products}
								/>
							}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
