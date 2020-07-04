import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
		body {
			padding: 0;
			margin: 0;
			padding-top: 75px;
			font-family: 'Roboto Mono', sans-serif;
		}

		* {
			box-sizing: border-box
		}

        h1, h2, h3, h4, h5 {
            margin-top: 0;
            font-family: 'Montserrat';
            font-weight: 200;
        }
	`;
