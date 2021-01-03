import base from './base'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import utils from './utils'

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${base}
 ${utils}
`

export default GlobalStyle
