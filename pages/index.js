import Head from 'next/head'
import Header from "../components/Header/Header";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return (
        {
            props: {
                allPostsData
            }
        }
    )
}

export default function Home({allPostsData}) {
    return (
        <div>
            <Head>
                <title>Next.js Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <h1 className="mt-4 mb-2 text-4xl font-bold text-gray-800 text-center">
                    Blog Posts
                </h1>
                <section className="flex flex-col items-center">
                    {allPostsData.map(({id, title, date}) => {
                        return (
                            <Link href={`/posts/${id}`}>
                                    <div className="my-2 border rounded shadow-sm py-2 px-3 w-4/5 hover:shadow cursor-pointer">
                                        <h2 className="text-lg text-gray-900 font-medium">{title}</h2>
                                        <p className="text-sm text-gray-700">{date}</p>
                                    </div>
                            </Link>
                        )
                    })}
                </section>
            </main>
        </div>
    )
}
