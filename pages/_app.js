import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import store from "../store";
import { Provider } from "react-redux";
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;