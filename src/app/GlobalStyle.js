import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        word-break: break-word;
        background: ${({ theme }) => theme.color.whisper};
        font-size: 16px;
        color: ${({ theme }) => theme.color.woodSmoke};
    }
`;
