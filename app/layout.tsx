import "../src/app/globals.css"
import { Header, Footer } from "@/widgets/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        <section className="section">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
