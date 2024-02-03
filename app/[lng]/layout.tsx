import { Footer } from "@/components/Footer";
import "./style.css";
import Sidebar from "@/components/Sidebar";
import { locales } from 'config'

export async function generateStaticParams() {
  return locales.map((lng: string) => ({lng}))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {lng: string}
}>) {
  return (
    <html lang={lng}>
      <body>
      <div className={`container`}>
        <div className="main">
          <Sidebar lng={lng}></Sidebar>
          <section className="col note-viewer">{children}</section>
        </div>
        <Footer lng={lng} />
      </div>
      </body>
    </html>
  );
}
