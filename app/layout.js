
import './globals.css'

export const metadata = {
  title: 'Colour Challenge Voting',
  description: 'Vote for your favourite colour'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
