import Layout from '@components/layout'
import { fetchAllPostEntriesSlug, fetchEntriesBySlug } from '@lib/api'
import Head from 'next/head'
import Date from '@components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import {encodeEmailAddress} from '@lib/utils/utilities';
import {generateHTMLFromMarkDown} from '@lib/utils/mdParser';
import ContentfulImage from '@components/contentfulImage';

export default function Post({postData}) {
  return (
    <Layout>
      <div className={``}>
            <Head>
                <title>{postData.fields.title}</title>
            </Head>
            <section className={``}>
                <h1 className={`text-2xl font-sans font-bold mb-2`}>{postData.fields.title}</h1>
                <p className={`text-base font-sans font-bold mb-2`}> Publish Date: <Date dateString={postData.fields.publishDate} /></p>
                <section className={`mb-2`}>
                    <Link href={`/authors/${encodeEmailAddress(postData.fields.author.fields.emailAddress)}`} >
                     <a className={`italic`}>{postData.fields.author.fields.name}</a>
                    </Link>
                </section>
                <div className={`flex justify-center mb-10`}>
                    <ContentfulImage 
                        src={postData.fields.image.fields.file.url} 
                        width={1000}
                        height={300}
                        alt={postData.fields.image.fields.file.title}
                    />
                </div>
                <div className={"post-body"} dangerouslySetInnerHTML={{ __html: postData.fields.body }} />
            </section>
        </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllPostEntriesSlug();
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const postData = await fetchEntriesBySlug(preview, params.slug as string)
  postData.fields.body = await generateHTMLFromMarkDown(postData.fields.body);
  return {
    props: {
      postData
    },
    revalidate: 60
  }
}