import Head from 'next/head'


function PageHead(props) {

  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta property="og:title" content={props.pageTitle} key="title" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  )
}

export default PageHead