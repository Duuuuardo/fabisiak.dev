import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
