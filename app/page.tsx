import About from "@/components/About";
import CursorGlow from "@/components/CursorGlow";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Site-wide dotted blueprint grid + ambient sage glows, behind all content. */}
      <div className="dotted-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="aurora-field pointer-events-none absolute inset-0 -z-10" aria-hidden />
      {/* Sage light that follows the cursor. */}
      <CursorGlow />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:outline focus:outline-2 focus:outline-accent"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="h-px w-full bg-line" aria-hidden />
        </div>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
