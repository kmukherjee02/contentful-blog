import Link from "next/link"
import ContentfulImage from "../contentfulImage"
import Date from "@components/date"
import {createAbsoluteUrl, encodeEmailAddress} from '@lib/utils/utilities'


export default function PostList({posts}){
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
        <>
            {renderPost}
        </>
     )
}