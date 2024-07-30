import GlobalStyle from "../styles/globalStyle";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/schema.js";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
