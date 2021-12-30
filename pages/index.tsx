import Layout from '../components/layout'
import {readAssetFile} from '../lib/mdParser';
import { GetStaticProps } from 'next'

export default function Home({assetData}) {
  return (
    <Layout home>
      <div className={"asset-body"} dangerouslySetInnerHTML={{ __html: assetData }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const assetData = await readAssetFile('isr');
  return {
    props: {
      assetData
    }
  }
}