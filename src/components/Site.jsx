"use client";

import { LangProvider } from "./LangProvider";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import StackSection from "./StackSection";
import About from "./About";
import Footer from "./Footer";

export default function Site() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <StackSection />
        <About />
      </main>
      <Footer />
    </LangProvider>
  );
}
