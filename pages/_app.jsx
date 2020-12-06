import PropTypes from 'prop-types';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,

  //  eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  pageProps: PropTypes.object,
};

export default MyApp;
