import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p className="absolute right-52 top-16">Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className="absolute right-52 top-16 z-20 bg-neutral-400 p-5 shadow-gray-900">
            <ol >
                {searchResults.hits.map((hit) => (
                    <li key={hit.objectID}>
                        <Link href={`/posts/${hit.slug}`} passHref>
                            <a className="underline">{hit.title}</a>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
        
      )}
    </>
  );
}

export default connectStateResults(Hits);