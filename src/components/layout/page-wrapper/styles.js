import styled from "styled-components";

export const PageWrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Main = styled.main`
	flex: 1; // Это позволяет основному контенту занимать оставшееся пространство
	width: ${(props) => props.theme.pageWidth};
	margin: 0 auto;
	padding-bottom: 80px;
`;
