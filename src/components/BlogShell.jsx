"use client";

import { LangProvider } from "./LangProvider";
import Nav from "./Nav";
import Footer from "./Footer";

export default function BlogShell({ children }) {
  return (
    <LangProvider>
      <Nav />
      <main>{children}</main>
      <Footer />
    </LangProvider>
  );
}
