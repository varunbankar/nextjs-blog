import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Next.js Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1>
                    Hello Next.js
                </h1>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}
