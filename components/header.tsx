import Link from "next/link"
import Search from '@components/search'

export default function Header(){
    return(
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href={'/posts/page/1'} >
              <a className="mr-5 text-lg hover:text-gray-900">Posts</a>
            </Link>
            <Link href={'/authors'} >
              <a className="mr-5 text-lg hover:text-gray-900">Authors</a>
            </Link>
          </nav>
          <Link href={"/"} >
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-2xl">A Blog Site</span>
            </a>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
             <Search />
          </div>
        </div>
      </header>  
    )
}