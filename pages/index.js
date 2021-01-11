import Head from 'next/head'
import Header from "../components/Header/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Next.js Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <main>
                <h1 className="mt-4 text-7xl font-bold text-blue-900 text-center">
                    Hello Next.js
                </h1>
            </main>
        </div>
    )
}
