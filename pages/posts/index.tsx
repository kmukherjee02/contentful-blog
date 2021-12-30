import Link from 'next/link';
import { GetStaticProps } from 'next'
import Layout from '../../components/layout';
import { fetchAllPostEntries } from '../../lib/api'
import Date from '../../components/date';
import {encodeEmailAddress, createAbsoluteUrl} from '../../lib/utilities';
import ContentfulImage from '../../components/contentfulImage';
import Pagination from '../../components/pagination';

export default function Post({ posts }) {
   const renderPost = posts.map((post, index) => {
      return (
         <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
            <Link href={`/posts/${post.fields.slug}`} passHref>
               <a className="block relative h-48 rounded overflow-hidden">
                  <ContentfulImage 
                     className="bject-cover object-center w-full h-full block"
                     src={createAbsoluteUrl(post.fields.image.fields.file.url)} 
                     width={421}
                     height={261}
                     alt={post.fields.image.fields.file.title}
                  />
               </a>
            </Link>
            <div className="mt-4">
               <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"><Date dateString={post.fields.publishDate} /></h3>
               <Link href={`/posts/${post.fields.slug}`} passHref>
                  <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer">{post.fields.title}</h2>
               </Link>
               <Link href={`/authors/${encodeEmailAddress(post.fields.author.fields.emailAddress)}`} passHref>
                  <p className="mt-1 cursor-pointer">{post.fields.author.fields.name}</p>
               </Link>
            </div>
         </div>
      )
   })
   return (
      <Layout>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <div className="flex flex-wrap -m-4">
                  {renderPost}
               </div>
            </div>
            <Pagination />
         </section>
      </Layout>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   const posts = await fetchAllPostEntries();
   return {
      props: {
         posts
      }
   }
}