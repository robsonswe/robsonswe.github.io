import Head from 'next/head'


function MetaData(props) {

  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta property="og:title" content={props.pageTitle} key="title" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Robson Santana | Web Developer</title>
        <meta name="description" content="Robson Santana's Web Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default MetaData