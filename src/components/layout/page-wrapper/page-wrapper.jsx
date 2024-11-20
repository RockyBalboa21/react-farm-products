import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Outlet } from "react-router-dom";
import { PageWrapperContainer, Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper() {
	return (
		<PageWrapperContainer>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</PageWrapperContainer>
	);
}

export default PageWrapper;
