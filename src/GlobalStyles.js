import { create } from 'istanbul-reports';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
}
`