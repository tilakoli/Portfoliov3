import './globals.css'
import Providers from './providers/providers'

export const metadata = {
  title: 'Portfolio - Tilak oli',
  description: 'Portfolio of a web dev!',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
