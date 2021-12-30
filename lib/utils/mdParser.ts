import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

const assetsDirectory = path.join(process.cwd(), 'assets')

export async function readAssetFile(id: string) {
  const fullPath = path.join(assetsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  return generateHTMLFromMarkDown(matterResult.content);
}

export async function generateHTMLFromMarkDown(content){
    const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString();
  return contentHtml;
}