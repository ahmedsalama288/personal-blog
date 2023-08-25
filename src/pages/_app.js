import Header from "@/components/Layout/Header/Header";
import Main from "@/ui/Main";
import PageWrapper from "@/ui/PageWrapper";
import Pagefooter from "@/ui/PageFooter";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Main>
        <Header />
        <PageWrapper>
          <Component {...pageProps} />
          <Pagefooter />
        </PageWrapper>
      </Main>
    </ApolloProvider>
  );
}
