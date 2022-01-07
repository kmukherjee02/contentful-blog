import Layout from "@components/layout";
import PostList from "./posts";
import Pagination from "@components/posts/pagination";
import Head from "next/head";

export default function PostsWrapper({posts, totalPages, currentPage, totalEntries}){
    return (
        <Layout>
         <Head>
               <title>{`Posts Page ${currentPage}`}</title>
         </Head>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <div className="flex flex-wrap -m-4">
                 <PostList posts={posts} />
               </div>
            </div>
            <Pagination totalPages={totalPages} currentPage = {currentPage} totalEntries={totalEntries}/>
         </section>
      </Layout>
    )
}