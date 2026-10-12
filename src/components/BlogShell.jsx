"use client";

import { LangProvider } from "./LangProvider";
import Starfield from "./Starfield";
import Nav from "./Nav";
import Footer from "./Footer";

export default function BlogShell({ children }) {
  return (
    <LangProvider>
      <Starfield />
      <Nav />
      <main>{children}</main>
      <Footer />
    </LangProvider>
  );
}
