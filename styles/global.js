import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a,
    a:hover {
        text-decoration: none;
        color: black;
    }

    .TableHead{
        background-color:rgba(126, 132, 175, 1);
    }
    .TableRow{
        color:rgba(126, 132, 175, 1) ;
    }
    .row{
        background-color:rgba(126, 132, 175, 1);
        color: white;
    }
`;

export default GlobalStyle;