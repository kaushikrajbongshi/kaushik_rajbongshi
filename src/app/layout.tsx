
import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmsans",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://kaushikrajbongshi.in"),

  title: {
    default: "Kaushik Rajbongshi | Full-Stack Developer",
    template: "%s | Kaushik Rajbongshi",
  },

  description:
    "Portfolio of Kaushik Rajbongshi, a Full-Stack Developer specializing in Next.js, NestJS, MERN, Redis, BullMQ, AI-powered applications, and scalable backend systems.",

  keywords: [
    "Kaushik Rajbongshi",
    "Full Stack Developer",
    "Next.js Developer",
    "NestJS Developer",
    "MERN Stack Developer",
    "Redis",
    "BullMQ",
    "Gemini AI",
    "MongoDB",
    "MySQL",
    "Portfolio",
    "Software Engineer",
    "Assam Developer",
    "India",
  ],

  authors: [{ name: "Kaushik Rajbongshi" }],

  creator: "Kaushik Rajbongshi",

  publisher: "Kaushik Rajbongshi",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Kaushik Rajbongshi | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web applications with Next.js, NestJS, AI, Redis, and modern backend technologies.",
    url: "https://kaushikrajbongshi.in",
    siteName: "Kaushik Rajbongshi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kaushik Rajbongshi | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, NestJS, AI, Redis, and scalable backend systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {children}

        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Kaushik Rajbongshi",
              url: "https://kaushikrajbongshi.in",
              image: "https://kaushikrajbongshi.in/og-image.png",
              logo: "https://kaushikrajbongshi.in/icon.png",

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://kaushikrajbongshi.in",
              },

              jobTitle: "Full-Stack Developer",

              hasOccupation: {
                "@type": "Occupation",
                name: "Full-Stack Developer",
              },

              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },

              description:
                "Full-Stack Developer specializing in Next.js, NestJS, AI-powered applications, Redis, BullMQ, scalable backend systems, and modern web development.",

              email: "mailto:kaushikraj0241@gmail.com",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Mangaldoi",
                addressRegion: "Assam",
                addressCountry: "IN",
              },

              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Gauhati University",
              },

              sameAs: [
                "https://github.com/kaushikrajbongshi",
                "https://www.linkedin.com/in/kaushik-rajbongshi-702765372/",
              ],

              knowsAbout: [
                "Next.js",
                "NestJS",
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "MySQL",
                "Prisma ORM",
                "Redis",
                "BullMQ",
                "REST API",
                "JWT Authentication",
                "OAuth",
                "Cloudinary",
                "Gemini AI",
                "Artificial Intelligence",
                "Backend Development",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
