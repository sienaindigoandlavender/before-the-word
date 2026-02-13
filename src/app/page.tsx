import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const DOMAINS = [
  { num: 'I', title: 'The Body', desc: 'What is written on skin', href: '/domains/body' },
  { num: 'II', title: 'The Thread', desc: 'What is woven into cloth', href: '/domains/thread' },
  { num: 'III', title: 'The Stone', desc: 'What is built into architecture', href: '/domains/stone' },
  { num: 'IV', title: 'The Hand', desc: 'What is carried as protection', href: '/domains/hand' },
  { num: 'V', title: 'The Sound', desc: 'What is sung as medicine', href: '/domains/sound' },
  { num: 'VI', title: 'The Earth', desc: 'What is read in sand and stars', href: '/domains/earth' },
  { num: 'VII', title: 'The Plant', desc: 'What is prepared as meaning', href: '/domains/plant' },
  { num: 'VIII', title: 'The Ritual', desc: 'What is performed at thresholds', href: '/domains/ritual' },
  { num: 'IX', title: 'The Route', desc: 'How symbols traveled', href: '/domains/route' },
];

const LEARN_TOOLS = [
  {
    title: 'Sacred Geometry',
    subtitle: 'The ten forms that contain every pattern',
    href: '/learn/sacred-geometry',
  },
  {
    title: 'Sacred Mathematics',
    subtitle: 'Numbers are not quantities. They are qualities.',
    href: '/learn/sacred-mathematics',
  },
  {
    title: 'Sacred Symbols',
    subtitle: 'The dictionary of what was drawn before it was written',
    href: '/learn/sacred-symbols',
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-22 pt-32">
        <div className="max-w-wide mx-auto w-full">
          <p className="micro-label mb-8 md:mb-12">An Encyclopedia of Hidden Knowledge</p>
          <h1 className="text-hero max-w-[14ch]">
            Before<br />the Word
          </h1>
          <div className="mt-12 md:mt-16 max-w-reading">
            <p className="text-body-lg text-ink-secondary">
              Before humans could write, they could mean. This archive documents the communication
              systems that preceded literacy and persist underneath it — across Africa and the Middle East.
            </p>
          </div>
          <div className="mt-10 flex gap-6">
            <Link
              href="/domains"
              className="text-small border border-ink px-6 py-3 hover:bg-ink hover:text-white transition-all duration-300"
            >
              Explore Domains
            </Link>
            <Link
              href="/learn"
              className="text-small text-ink-secondary hover:text-ink transition-colors duration-300 flex items-center gap-2 py-3"
            >
              Learn the Foundations
              <span className="text-xs">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== THESIS ===== */}
      <section className="section-border py-22 md:py-30 px-6 md:px-10">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="micro-label">The Thesis</p>
            </div>
            <div className="md:col-span-7 max-w-reading">
              <p className="text-display-2 mb-10">
                Not folklore. Not superstition. Not decoration.
              </p>
              <p className="text-body-lg text-ink-secondary mb-6">
                The diamond carved into a woman&apos;s chin in the Rif Mountains is not decoration.
                It is a map of the womb, a ward against the unseen, a declaration of lineage — and
                the woman who wears it can tell you exactly what it says.
              </p>
              <p className="text-body-lg text-ink-secondary mb-6">
                The eight-pointed star cut into zellige tile in a Fes mosque is not pattern.
                It is a mathematical proof of infinity — a geometric argument that God cannot
                be contained in a single form.
              </p>
              <p className="text-body-lg text-ink-secondary">
                The seven colours of the gnawa ceremony are not aesthetic. Each corresponds
                to a spirit, a cardinal direction, a set of symptoms, a cure. The maalem who
                plays the guembri is not performing. He is operating a diagnostic system that
                traveled north from sub-Saharan Africa centuries before anyone wrote it down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NINE DOMAINS ===== */}
      <section className="section-border py-22 md:py-30 px-6 md:px-10">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-3">
              <p className="micro-label">Nine Domains</p>
            </div>
            <div className="md:col-span-7">
              <p className="text-display-2">
                The symbolic vocabulary of a civilization is not stored in one medium.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {DOMAINS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="bg-bg p-8 md:p-10 group hover:bg-bg-alt transition-colors duration-300"
              >
                <span className="micro-label block mb-4">{d.num}</span>
                <h3 className="text-heading-1 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {d.title}
                </h3>
                <p className="text-small text-ink-secondary">{d.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARN ===== */}
      <section className="section-border py-22 md:py-30 px-6 md:px-10">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-3">
              <p className="micro-label">Foundations</p>
            </div>
            <div className="md:col-span-7">
              <p className="text-display-2">
                The architecture beneath the symbols.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {LEARN_TOOLS.map((tool, i) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block border-t border-border py-10 md:py-14 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <span className="micro-label md:col-span-1">0{i + 1}</span>
                  <h3 className="text-display-2 md:col-span-5 group-hover:translate-x-2 transition-transform duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-body text-ink-secondary md:col-span-5">
                    {tool.subtitle}
                  </p>
                  <span className="text-body text-ink-muted md:col-span-1 group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOURCE TYPES ===== */}
      <section className="bg-ink text-white py-22 md:py-30 px-6 md:px-10">
        <div className="max-w-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-micro uppercase tracking-[0.12em] text-white/40">Methodology</p>
            </div>
            <div className="md:col-span-7">
              <p className="text-display-2 text-white mb-10">
                Every entry declares its source type.
              </p>
              <p className="text-body-lg text-white/70 mb-8">
                The reader always knows what kind of truth they are holding.
                This is what separates serious documentation from occult cosplay.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  'Archaeological / Physical',
                  'Historical / Documented',
                  'Scientific / Measurable',
                  'Ethnographic / Living Practice',
                  'Oral Tradition / Transmitted',
                  'Folk Belief / Spirituality',
                  'Syncretic / Layered',
                  'Comparative / Transmission',
                ].map((s) => (
                  <p key={s} className="text-small text-white/50 border-t border-white/10 pt-3">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="py-30 md:py-38 px-6 md:px-10 text-center">
        <div className="max-w-content mx-auto">
          <p className="text-display-1 mb-12">
            The symbols were here first.
          </p>
          <p className="text-body-lg text-ink-secondary max-w-reading mx-auto">
            We are only writing them down.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
