import Link from 'next/link';

const DOMAINS = [
  { label: 'I. The Body', href: '/domains/body' },
  { label: 'II. The Thread', href: '/domains/thread' },
  { label: 'III. The Stone', href: '/domains/stone' },
  { label: 'IV. The Hand', href: '/domains/hand' },
  { label: 'V. The Sound', href: '/domains/sound' },
  { label: 'VI. The Earth', href: '/domains/earth' },
  { label: 'VII. The Plant', href: '/domains/plant' },
  { label: 'VIII. The Ritual', href: '/domains/ritual' },
  { label: 'IX. The Route', href: '/domains/route' },
];

const LEARN = [
  { label: 'Sacred Geometry', href: '/learn/sacred-geometry' },
  { label: 'Sacred Mathematics', href: '/learn/sacred-mathematics' },
  { label: 'Sacred Symbols', href: '/learn/sacred-symbols' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-30">
      <div className="max-w-wide mx-auto px-6 md:px-10 py-16 md:py-22">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <p className="text-micro uppercase tracking-[0.12em] text-ink mb-4">Before the Word</p>
            <p className="text-small text-ink-secondary leading-relaxed">
              An encyclopedia of hidden knowledge systems across Africa and the Middle East.
            </p>
            <p className="text-small text-ink-muted mt-6">
              A Dancing with Lions publication
            </p>
          </div>
          <div>
            <p className="text-micro uppercase tracking-[0.12em] text-ink-muted mb-4">Domains</p>
            <div className="flex flex-col gap-2.5">
              {DOMAINS.map((d) => (
                <Link key={d.href} href={d.href} className="text-small text-ink-secondary hover:text-ink transition-colors">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-micro uppercase tracking-[0.12em] text-ink-muted mb-4">Learn</p>
            <div className="flex flex-col gap-2.5">
              {LEARN.map((l) => (
                <Link key={l.href} href={l.href} className="text-small text-ink-secondary hover:text-ink transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-micro uppercase tracking-[0.12em] text-ink-muted mb-4">About</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-small text-ink-secondary hover:text-ink transition-colors">About the Archive</Link>
              <Link href="/sources" className="text-small text-ink-secondary hover:text-ink transition-colors">Source Types</Link>
              <Link href="/glossary" className="text-small text-ink-secondary hover:text-ink transition-colors">Glossary</Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-small text-ink-muted">&copy; {new Date().getFullYear()} Dancing with Lions</p>
          <p className="text-small text-ink-muted italic">The symbols were here first. We are only writing them down.</p>
        </div>
      </div>
    </footer>
  );
}
