import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from "remark-html";
import remark from "remark";

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get filename
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove .md extension
        const id = fileName.replace(/\.md$/, '')

        // Read file
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return (
        fileNames.map(fileName => {
            return (
                {
                    params: {
                        id: fileName.replace(/\.md$/, '')
                    }
                }
            )
        })
    )
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
