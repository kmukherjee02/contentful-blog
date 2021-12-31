import { Config } from '@lib/utils/constants';
import Link from 'next/link';
import cn from 'classnames';


export default function Pagination({ totalPages, currentPage, totalEntries, /* , prevDisabled, nextDisabled */ }) {
    const prevPageUrl = `/posts/page/${parseInt(currentPage, 10) - 1}`;
    const nextPageUrl = `/posts/page/${parseInt(currentPage, 10) + 1}`;
    const prevDisabled = parseInt(currentPage) === 1 ? true : false
    const nextDisabled = parseInt(currentPage) === totalPages ? true : false
    const start = (parseInt(currentPage) - 1) * Config.pagination.pageSize;
    const end = start + Config.pagination.pageSize;

    return (
        <>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <Link href={prevPageUrl} passHref>
                        <a href="#" className={cn("relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", {
                            "rounded-l-md border border-gray-300": !prevDisabled
                        })}>
                            {!prevDisabled &&
                                <>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="">Previous</span>
                                </>
                            }
                        </a>
                    </Link>
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing
                            <span className="font-medium mx-1">{start + 1}</span>
                            to
                            <span className="font-medium mx-1">{end}</span>
                            of
                            <span className="font-medium mx-1">{totalEntries}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <Link href={nextPageUrl} passHref>
                            <a href="#" className={cn(
                                "relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", 
                                {   
                                    "rounded-l-md border border-gray-300": !nextDisabled
                                })
                            }>
                                {!nextDisabled &&
                                    <>
                                        <span className="">Next</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                }
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}