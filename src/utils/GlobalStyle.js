import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	html {
	box-sizing: border-box;
	width: 100vw;
	overflow-x: hidden;
	}
	
	*,
	*::before,
	*::after {
	box-sizing: inherit;
	}
	
	body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
	Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
	color: #212121;
	background-color: #fff;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
	margin: 0;
	}
	
	ul {

	padding: 0;
	margin: 0;
	}

	li {
	list-style: none;
}
`;
