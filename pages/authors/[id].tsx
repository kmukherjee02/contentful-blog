import { GetStaticProps, GetStaticPaths } from 'next'
import { getAuthorIds, getAuthorById } from '@lib/api'
import ContentfulImage from '@components/contentfulImage'
import Layout from '@components/layout'

export default function Author({ author }) {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <ContentfulImage 
                            className="object-cover object-center rounded"
                            src={author.fields.profilePic.fields.file.url} 
                            width={500}
                            height={500}
                            alt={author.fields.profilePic.fields.file.title}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">{author.fields.name}</h1>
                        <p className="text-gray-500 mb-4">{author.fields.designation}</p>
                        <p className="mb-8 leading-relaxed">{author.fields.biography}</p>
                        <p><span className='pr-2'>Email:</span> 
                            <a href={`mailto:${author.fields.emailAddress}`} className='cursor-pointer underline' >{author.fields.emailAddress}</a>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAuthorIds()
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const author = await getAuthorById(params.id as string)
    return {
        props: {
            author
        },
        revalidate: 60
    }
}