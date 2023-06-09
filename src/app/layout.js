import './globals.css'
import { Source_Sans_Pro } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Card',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>{children}</body>
    </html>
  )
}
