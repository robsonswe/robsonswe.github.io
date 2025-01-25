import '../styles/globals.css'

import { Outfit, Ruda, Lobster, Exo } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'], display: 'swap' })
const ruda = Ruda({ subsets: ['latin'], display: 'swap' })
const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})
const exo = Exo({ subsets: ['latin'], display: 'swap' })


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --outfit-font: ${outfit.style.fontFamily};
            --ruda-font: ${ruda.style.fontFamily};
            --lobster-font: ${lobster.style.fontFamily};
            --exo-font: ${exo.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
