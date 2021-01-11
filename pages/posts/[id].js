import {getAllPostIds, getPostData} from "../../lib/posts";
import Header from "../../components/Header/Header";
import Head from "next/head";

export default function Post({postData}) {
    return (
        <>
            <Head>
                <title>{postData.id}</title>
            </Head>
            <Header />
            <main>
                <h1 className="mt-4 mb-2 text-4xl font-bold text-gray-800 text-center">
                    {postData.title}
                </h1>
                <p className="text-gray-700 text-center">On {postData.date}</p>
                <div className="my-3 flex justify-center">
                    <div className="w-4/5" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
