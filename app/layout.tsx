import "../src/app/globals.css"
import { Header, Footer } from "@/widgets/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
