import "../../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body id="top">{children}</body>
    </html>
  )
}
