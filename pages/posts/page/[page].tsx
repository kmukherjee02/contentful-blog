import { fetchAllPostEntriesSlug, fetchPostEntries } from '@lib/api'
import {Config} from  '@lib/utils/constants';
import { GetStaticProps, GetStaticPaths } from 'next'
import PostsWrapper from '@components/posts/postsWrapper';

export default function PostPage({posts, totalPages, currentPage, totalEntries}){
    return (
        <>
           <PostsWrapper posts={posts} totalPages={totalPages} currentPage = {currentPage} totalEntries={totalEntries}/>
        </>
     )
}


export const getStaticPaths: GetStaticPaths = async () => {
   const totalPostEntries = await fetchPostEntries();
   const totalPages = Math.ceil(totalPostEntries.total / Config.pagination.pageSize);

   const paths = [];

    /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages - 1; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: 'blocking',
  };

}
  
export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
   const totalPostEntries = await fetchPostEntries(params.page as string);
   const totalPages = Math.ceil(totalPostEntries.total / Config.pagination.pageSize);

   return {
      props: {
         posts: totalPostEntries.items,
         totalPages,
         currentPage: params.page,
         totalEntries: totalPostEntries.total,
         fallback: 'blocking'
      },
      revalidate: 60
   }
}