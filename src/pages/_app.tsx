import type { AppProps } from 'next/app'
import Loading from '../components/Loading'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
