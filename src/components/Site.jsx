"use client";

import { LangProvider } from "./LangProvider";
import Starfield from "./Starfield";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import StackSection from "./StackSection";
import About from "./About";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

export default function Site({ posts }) {
  return (
    <LangProvider>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <About />
        <StackSection />
        <Experience />
        <Projects />
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </LangProvider>
  );
}
