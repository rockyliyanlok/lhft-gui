import App from 'next/app'
import GlobalStyle from '../styles/global'
import LHFTLayout from '../components/LHFTLayout'
import stylesheet from 'antd/dist/antd.min.css'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <GlobalStyle />
        <LHFTLayout>
          <Component {...pageProps} />
        </LHFTLayout>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}

export default MyApp
