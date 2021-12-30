import Layout from '../../components/layout'
import { GetStaticProps } from 'next'
import { getAuthors } from '../../lib/api';
import {encodeEmailAddress} from '../../lib/utilities';
import Link from 'next/link';
import ContentfulImage from '../../components/contentfulImage';

export default function Authors({ authors }) {
    const renderAuthors = authors.map((author, index) => {
        return (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <Link href={`/authors/${encodeEmailAddress(author.fields.emailAddress)}`} passHref>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg cursor-pointer">
                        <ContentfulImage 
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={author.fields.profilePic.fields.file.url} 
                            width={80}
                            height={80}
                            alt={author.fields.profilePic.fields.file.title}
                        />
                        <div className="flex-grow ml-4">
                            <h2 className="text-gray-900 title-font font-medium">{author.fields.name}</h2>
                            <p className="text-gray-500">{author.fields.designation}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Authors</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {renderAuthors}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const authors = await getAuthors();
    return {
        props: {
            authors
        }
    }
}