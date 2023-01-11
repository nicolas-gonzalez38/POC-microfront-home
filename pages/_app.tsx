import App from 'next/app';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx : any) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
