 import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'
 const GlobalStyles = createGlobalStyle`

.Container_Texto{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: Impact;
    font-size:20px;
}
.Container_Texto{
	font-family: 'Hind-Light.woff'
}
/* fuentes*/

@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;

export default GlobalStyles 
