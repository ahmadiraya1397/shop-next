import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from './../app/store'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps}/>
  </Provider>
}
