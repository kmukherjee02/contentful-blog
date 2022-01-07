import Layout from '@components/layout'
import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next'
import {initializeCubeAnimation, initializeTextAnimation} from '@lib/gsap/cube-animation'
import {fetchHeroImage} from '@lib/api';
import {createAbsoluteUrl} from '@lib/utils/utilities';


export default function Home({entry}) {
  useEffect(() => {
      initializeCubeAnimation();
      initializeTextAnimation();
  },[])  
  const background = createAbsoluteUrl(entry.fields.image.fields.file.url)
  return (
    <>
        <Layout>
            <Head>
                <title>{'Next JS GSAP Integration'}</title>
            </Head>
            <div className={'cube-animation'}>
                <div className={`hero-image`} style={{ backgroundImage: `url(${background})` }}>
                    <h1 className={`text-4xl font-sans font-bold mb-2 text-center`}>{entry.fields.title}</h1>
                    <p className={`text-2xl text-center`}>{entry.fields.description}</p>
                    <div className="triangle"></div>
                    <div className="scene scene--cube"></div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = await fetchHeroImage();
  const entry = entries[0]
  return {
    props: {
      entry
    }
  }
}