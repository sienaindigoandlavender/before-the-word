import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Before the Word",
  description: "An encyclopedia of hidden knowledge systems — the communication systems that preceded literacy and persist underneath it.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="antialiased bg-bg text-ink" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
