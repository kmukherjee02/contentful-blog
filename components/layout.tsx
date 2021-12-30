import Head from 'next/head'
import Header from './header'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <div className="min-h-screen m-10 flex justify-center ">
        <main>{children}</main>
      </div>
    </div>
  )
}