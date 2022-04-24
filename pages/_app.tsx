import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div id="fb-root"></div>
			<Script
				async defer
				crossOrigin="anonymous"
				src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v13.0&appId=367158658677013&autoLogAppEvents=1"
				nonce="YW1M8SgX"
			></Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
