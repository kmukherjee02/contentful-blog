const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

async function fetchPostEntries(){
  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN 
  console.log(space)
  console.log(accessToken)
  if(accessToken){
    client = require('contentful').createClient({
      space: space,
      accessToken: accessToken,
    })
    const entries = await client.getEntries({
      content_type: 'post',
      limit: 1000,
      order: "-sys.updatedAt",
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for post.`)
  }
  console.log(`Access Token is undefined`);
}

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: post.sys.id,
      title: post.fields.title,
      slug: post.fields.slug,
      publishDate: post.fields.publishDate,
      body: post.fields.body,
      author: post.fields.author.fields.name
    };
  });

  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config({ path: `.env.local`});
  
  try {
    // fetch your data
    const posts = await fetchPostEntries();
    const transformed = transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    );

    // initialize the index with your index name
    const index = client.initIndex("contentful-blog");

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed);

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n",
      )}`,
    );

  } catch (error) {
    console.log(error);
  }

})();