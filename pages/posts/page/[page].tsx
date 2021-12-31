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

    for (let page = 1; page <= totalPages; page++) {
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