export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      &copy; Next JS is great!
    </>
  )
}
