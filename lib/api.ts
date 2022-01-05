import {encodeEmailAddress, decodeEmailId} from './utils/utilities'
import {Config} from './utils/constants';

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN 
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

const postContentTypeId = "post"
const authorContentTypeId = "author"
const heroImageContentTypeId = 'heroImage'

let client;
let previewClient;

if(accessToken){
  client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
  })
}

if(previewToken){
  previewClient = require('contentful').createClient({
    space: space,
    accessToken: previewToken,
    host: "preview.contentful.com"
  })
}

async function fetchPreviewEntries(contentType : string ,slug : string) {
  if(previewToken){
    const entries = await previewClient.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5    
    })
    if (entries.items) return entries.items[0]
    console.log(`Error getting Entries for ${contentType}.`)
  }
  console.log(`Access Token is undefined`);
}

export async function fetchPreviewEntriesBySlug(slug : string){
  return await fetchPreviewEntries(postContentTypeId, slug); 
}

async function fetchEntries(contentType : string ,slug : string) {
  if(accessToken){
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5    
    })
    if (entries.items) return entries.items[0]
    console.log(`Error getting Entries for ${contentType}.`)
  }
  console.log(`Access Token is undefined`);
}


export async function fetchEntriesBySlug(preview, slug : string){
   if(preview){
     console.log("Fetching Previews");
     return fetchPreviewEntries(postContentTypeId, slug);
   }
   console.log("Fetching Published");
   return await fetchEntries(postContentTypeId, slug); 
}

export async function fetchPostEntries(page : string = "1", limit : number = Config.pagination.pageSize){
  if(accessToken){
    const skip = (parseInt(page) - 1) * limit;
    const entries = await client.getEntries({
      content_type: postContentTypeId,
      skip: skip,
      limit: Config.pagination.pageSize,
      order: "-sys.updatedAt",
    })
    if (entries.items) return entries
    console.log(`Error getting Entries for post.`)
  }
  console.log(`Access Token is undefined`);
}

export async function fetchAllPostEntriesSlug(skip : number = 0){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: postContentTypeId,
      limit: 100,
      order: "-sys.updatedAt",
    })
    if (entries.items) {
      return entries.items.map(post => {
        return {
          params: {
             slug: post.fields.slug
          }
        }
      })
    }
    console.log(`Error getting Entries for post.`)
  }
  console.log(`Access Token is undefined`);
}

export async function getAuthors(){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: authorContentTypeId,
      order: "-sys.updatedAt"
    })
    if (entries.items) {
      return entries.items
    }
    console.log(`Error getting Entries for post.`)
  }
}

export async function getAuthorById(id: string){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: authorContentTypeId,
      order: "-sys.updatedAt",
      "fields.emailAddress": decodeEmailId(id)
    })
    if (entries.items) {
      return entries.items[0]
    }
    console.log(`Error getting Entries for post.`)
  }
}

export async function getAuthorIds(){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: authorContentTypeId,
      order: "-sys.updatedAt"
    })
    if (entries.items) {
       return entries.items.map(entry => {
         return {
            params: {
              id: encodeEmailAddress(entry.fields.emailAddress)
            }
         }
       })
    }
    console.log(`Error getting Entries for post.`)
  }
}


export async function fetchHeroImage(){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: heroImageContentTypeId,
      order: "-sys.updatedAt",
      limit: 1
    })
    if (entries.items) {
      return entries.items
    }
    console.log(`Error getting Entries for heroImage.`)
  }
}
