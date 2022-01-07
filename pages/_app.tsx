import '@styles/global.scss'
import { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@lib/analytics';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@lib/analytics'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on(
            'routeChangeComplete',
            handleRouteChange
        );
        return () => {
            router.events.off(
                'routeChangeComplete',
                handleRouteChange
            );
        };
    }, [router.events]);
    return (
      <>
        <Script id="google-analytics-4"  strategy="beforeInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}` } />
        <Script async id="ga-4" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
                          page: window.location.pathname
                      });`
              }} 
        />
        <Component {...pageProps} />
      </> 
  
    )
}