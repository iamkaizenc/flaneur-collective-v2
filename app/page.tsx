import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatBot from "@/components/AIChatBot";

// ============================================
// CONSTANTS
// ============================================

const EMAIL = "support@estatebali.app";
const WHATSAPP_PHONE = "17423798954"; // +1 (742) 379-8954

const VALUE_PROPS = [
  {
    title: "Brand Systems",
    description:
      "Naming, identity, and visual architecture — crafted to feel timeless, modern, and unmistakably yours.",
  },
  {
    title: "Content Engine",
    description:
      "Photography, film, motion, and editorial — designed as a consistent creative rhythm, not one-off assets.",
  },
  {
    title: "AI-Augmented Production",
    description:
      "Sora, Arcads, Luma, and beyond. Faster iteration, cinematic quality, human-led direction.",
  },
  {
    title: "Creator & Social Growth",
    description:
      "High-performing UGC, social strategy, and creator collaborations that turn attention into lasting brand trust.",
  },
];

const USE_CASES = [
  {
    label: "For Founders",
    description:
      "Launch-ready identity systems, pitch visuals, and content that communicates clarity, ambition, and momentum.",
    accent: "F",
  },
  {
    label: "For Lifestyle Brands",
    description:
      "Aesthetic-driven creative ecosystems — from lookbooks to campaign films — designed to build emotional connection.",
    accent: "L",
  },
  {
    label: "For Creators & Creative Teams",
    description:
      "White-label production, AI-assisted video, and content support that integrates seamlessly into your workflow.",
    accent: "C",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We listen first. Your vision, tone, philosophy, and ambition shape the direction.",
  },
  {
    step: "02",
    title: "Direct",
    description:
      "Concepts, moodboards, scripts, and production plans. Human creativity at the center.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Polished identities, content libraries, and campaign assets — ready for launch.",
  },
];

const SHOWCASE_ITEMS = [
  {
    title: "Brand Launch",
    description:
      "Identity, type system, color architecture, and foundational visual language.",
    num: "01",
  },
  {
    title: "Creator Performance Campaign",
    description:
      "High-converting UGC with multi-platform optimization and narrative-driven edits.",
    num: "02",
  },
  {
    title: "AI-Driven Motion Lab",
    description:
      "Experimental cinematic sequences crafted with next-gen AI video tools.",
    num: "03",
  },
];

// ============================================
// PAGE COMPONENT
// ============================================

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream text-charcoal">
        {/* ===== HERO SECTION ===== */}
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-24 pb-16 relative"
        >
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight mb-8">
              Creative direction for brands
              <br />
              <span className="italic text-ochre-dark">
                that move the world.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal/60 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              We design identities, stories, and content systems for modern
              founders, creators, and global lifestyle brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}?subject=Let's work together`}
                className="group inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream text-sm tracking-wide rounded-full hover:bg-charcoal/80 transition-all duration-300"
              >
                Work With Us
                <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/20 text-sm tracking-wide rounded-full hover:border-charcoal/40 hover:bg-charcoal/5 transition-all duration-300"
              >
                View Selected Work
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent" />
          </div>
        </section>

        {/* ===== TRUST ROW ===== */}
        <section className="py-16 border-y border-charcoal/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-center text-sm md:text-base text-charcoal/50 font-light tracking-wide">
              Trusted by founders, creators, and teams building culture-shaping
              products across the globe.
            </p>
          </div>
        </section>

        {/* ===== VALUE PROPOSITIONS ===== */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {VALUE_PROPS.map((prop, index) => (
                <div
                  key={index}
                  className="group p-6 lg:p-8 border border-charcoal/5 rounded-2xl hover:border-charcoal/10 hover:bg-charcoal/[0.02] transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-xs text-ochre-dark font-light tracking-widest">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight mb-3 group-hover:text-ochre-dark transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== USE CASES ===== */}
        <section id="work" className="py-24 lg:py-32 bg-charcoal text-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-xl mb-16 lg:mb-24">
              <span className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4 block">
                Who We Work With
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Built for those
                <br />
                <span className="italic text-ochre">shaping culture.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {USE_CASES.map((useCase, index) => (
                <div
                  key={index}
                  className="group relative p-8 lg:p-10 border border-cream/10 rounded-2xl hover:border-cream/20 hover:bg-cream/[0.02] transition-all duration-500"
                >
                  <span className="absolute top-8 right-8 font-serif text-6xl text-cream/5 group-hover:text-ochre/10 transition-colors duration-500">
                    {useCase.accent}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-ochre transition-colors duration-300">
                    {useCase.label}
                  </h3>
                  <p className="text-sm text-cream/60 font-light leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW WE WORK ===== */}
        <section id="process" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-xl mb-16 lg:mb-24">
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4 block">
                Our Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                How we
                <br />
                <span className="italic text-ochre-dark">
                  bring it to life.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-serif text-5xl lg:text-6xl text-charcoal/5">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed pl-0 lg:pl-20">
                    {step.description}
                  </p>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-8 lg:-right-10 w-16 lg:w-20 h-px bg-gradient-to-r from-charcoal/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SHOWCASE TEASER ===== */}
        <section className="py-24 lg:py-32 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-xl mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4 block">
                Selected Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-4">
                We curate our work carefully.
              </h2>
              <p className="text-charcoal/60 font-light">
                A glimpse at what we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {SHOWCASE_ITEMS.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  {/* Placeholder Image Area */}
                  <div className="relative aspect-[4/5] bg-charcoal rounded-xl overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-8xl text-cream/5 group-hover:text-ochre/10 transition-colors duration-500">
                        {project.num}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-ochre-dark transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLOSING CTA ===== */}
        <section
          id="contact"
          className="py-32 lg:py-48 bg-charcoal text-cream"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Let's create something
              <br />
              <span className="italic text-ochre">unforgettable.</span>
            </h2>

            <p className="text-cream/60 font-light mb-12 max-w-lg mx-auto">
              We partner with a select number of clients each quarter. If you're
              building something meaningful, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}?subject=Let's work together`}
                className="group inline-flex items-center justify-center px-10 py-5 bg-cream text-charcoal text-sm tracking-wide rounded-full hover:bg-ochre hover:text-charcoal transition-all duration-300"
              >
                Tell us what you're building
                <span className="ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>

              <WhatsAppButton
                phone={WHATSAPP_PHONE}
                message="Hello! I'm interested in working with Flaneur Collective."
                variant="outline"
                className="border-cream/30 text-cream hover:bg-[#25D366] hover:border-[#25D366]"
              />
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 bg-charcoal border-t border-cream/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
              <span className="font-light tracking-[0.2em] text-xs uppercase text-cream/40">
                Flaneur Collective
              </span>
            </div>

              <div className="flex items-center gap-8">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xs text-cream/40 hover:text-cream/80 transition-colors"
                >
                  {EMAIL}
                </a>
                <span className="text-xs text-cream/20">
                  © {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <AIChatBot />
    </>
  );
}
