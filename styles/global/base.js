import { css } from 'styled-components'
import theme from '../theme'
 
export default css`
 html,
 body {
   background-color: ${theme.colors.white};
   color: ${theme.colors.astronautBlue};
   font-family: ${({ theme }) => theme.fonts.robotoCondensed};
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: transparent;
   -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
   width: 100%;
 }
`
