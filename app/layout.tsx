import { Metadata } from "next"
import Navigation from "../components/navigation"
import StoreProvider from "./StoreProvider"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movies on the best',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Navigation />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
