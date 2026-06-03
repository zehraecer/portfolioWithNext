import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zehra Ecer | Frontend Developer | React & Next.js Developer",
  description:
    "Zehra Ecer Frontend Developer. React.js, Next.js, TypeScript, Laravel ve modern web teknolojileri ile kullanıcı odaklı web uygulamaları geliştiriyorum.",
  keywords: [
    "Zehra Ecer",
    "Zehra Ecer Frontend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Laravel Developer",
    "Portfolio",
  ],
  authors: [{ name: "Zehra Ecer" }],
  creator: "Zehra Ecer",
  openGraph: {
    title: "Zehra Ecer | Frontend Developer",
    description:
      "React.js, Next.js, TypeScript ve modern web teknolojileri ile projeler geliştiren Frontend Developer.",
    url: "https://zehraecer.com.tr",
    siteName: "Zehra Ecer Portfolio",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <div className="site-wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}