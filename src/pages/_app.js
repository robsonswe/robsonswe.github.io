import '../styles/globals.css'

import { Press_Start_2P, VT323, Orbitron } from 'next/font/google'
const pressStart2P = Press_Start_2P({   weight: ['400'],  subsets: ['latin'], display: 'swap' });
const vt323 = VT323({  weight: ['400'],  subsets: ['latin'], display: 'swap' });
const orbitron = Orbitron({  weight: ['400'],  subsets: ['latin'], display: 'swap' });


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --press-start-2p-font: ${pressStart2P.style.fontFamily};
            --vt323-font: ${vt323.style.fontFamily};
            --orbitron-font: ${orbitron.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
