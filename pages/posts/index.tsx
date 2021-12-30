import { GetStaticProps } from 'next'
import {Config} from  '@lib/utils/constants';
import Layout from '@components/layout';
import { fetchPostEntries } from '@lib/api'
import PostsWrapper from '@components/posts/postsWrapper';

export default function Post({ posts, totalPages, currentPage, totalEntries }) {
   return (
      <>
         <PostsWrapper posts={posts} totalPages={totalPages} currentPage = {currentPage} totalEntries={totalEntries}/>
      </>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   const totalPostEntries = await fetchPostEntries("1");
   const totalPages = Math.ceil(totalPostEntries.count / Config.pagination.pageSize);

   return {
      props: {
         posts: totalPostEntries.items,
         totalPages,
         currentPage: "1",
         totalEntries: totalPostEntries.total,
         fallback: 'blocking'
      },
      revalidate: 60
   }
}