import '../styles/globals.css'

import { Sora, Chivo } from 'next/font/google'

const sora = Sora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const chivo = Chivo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sora.variable} ${chivo.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
