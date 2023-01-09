import Head from 'next/head'

function PageHead() {
  return (
    <>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
      </Head>
    </>
  )
}

export default PageHead