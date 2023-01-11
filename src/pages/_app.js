import '../styles/globals.css'

import { Outfit } from '@next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

import { Ruda } from '@next/font/google'
const ruda = Ruda({ subsets: ['latin'] })

import { Lobster } from '@next/font/google'
const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin']
}
)


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --outfit-font: ${outfit.style.fontFamily};
            --ruda-font: ${ruda.style.fontFamily};
            --lobster-font: ${lobster.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
