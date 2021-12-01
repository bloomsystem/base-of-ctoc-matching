import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import { useRef } from 'react'

function App({ Component, pageProps }: AppProps) {
  const queryClientRef:any = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          staleTime: Infinity,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App