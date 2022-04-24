import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <html lang="en">
      <head>
        <script>window.SERVER_DATA = __SERVER_DATA__;</script>
        <Component {...pageProps} />
      </head>
    </html>
  );
}

export default Application;
