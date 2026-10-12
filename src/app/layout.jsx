import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://fabisiak.dev"),
  title: {
    default: "Eduardo Fabisiak · Software Engineer",
    template: "%s · fabisiak.dev",
  },
  description:
    "Software engineer backend e full-stack: APIs, microservices, mensageria, pagamentos e sistemas distribuídos rodando em produção.",
  openGraph: {
    type: "website",
    url: "https://fabisiak.dev",
    siteName: "fabisiak.dev",
    title: "Eduardo Fabisiak · Software Engineer",
    description:
      "Software engineer backend e full-stack: APIs, microservices, mensageria, pagamentos e sistemas distribuídos rodando em produção.",
    images: [{ url: "https://github.com/Duuuuardo.png", width: 460, height: 460 }],
  },
  twitter: {
    card: "summary",
    creator: "@Duuuuardo",
    title: "Eduardo Fabisiak · Software Engineer",
    description:
      "Software engineer backend e full-stack: APIs, microservices, mensageria, pagamentos e sistemas distribuídos rodando em produção.",
  },
  alternates: { canonical: "https://fabisiak.dev" },
  authors: [{ name: "Eduardo Fabisiak" }],
};

export const viewport = {
  themeColor: "#05070c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interTight.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
