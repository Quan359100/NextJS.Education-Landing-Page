import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Top Class"}
                </title>
            </Head>
        </>
    )
}

export default PageHead