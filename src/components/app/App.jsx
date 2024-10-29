import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import { GlobalStyle } from "./styles.js";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<PageWrapper features={features}/> {/*Контент страницы */}
		</>
	);
}
