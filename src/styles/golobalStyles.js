import { createGlobalStyle } from "styled-components";
import { mediaQuery } from "./mediaQuerya.styles";

const GlobalStyles = createGlobalStyle`
html {
    font-size: 100%;
    scroll-behavior: smooth;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.clrBgPrimary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
   
}


h1,
h2,
h3,
h4,
h5,
h6 {
    
    font-weight: 700 ;
    margin: 1rem 0;
}
h1{
    font-size: 2rem;
}
h2{
    font-size: 1.25rem;

}
h3{
    font-size: 1rem;

}


img {
    max-width: 100%;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}
button{
 
}
.app{
    ${mediaQuery.desktop}{
        display:flex;
        }
}

`;

export default GlobalStyles;
