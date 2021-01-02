import { createGlobalStyle } from 'styled-components'
import base from './base'
import utils from './utils'
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
 ${reset}
 ${base}
 ${utils}
`
 
export default GlobalStyle
