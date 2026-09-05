import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Ikasha Dissanayake | IT Support, Systems, Software & UI/UX",
    template: "%s | Ikasha Dissanayake",
  },
  description:
    "Computing graduate and IT professional specializing in IT support, systems and networking, software development, and UI/UX design.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ikasha Dissanayake",
    description:
      "IT Support Specialist · IT Professional · Software Developer · UI/UX Designer",
    type: "website",
    url: "https://example.com",
    siteName: "Ikasha Dissanayake",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikasha Dissanayake",
    description:
      "IT Support Specialist · IT Professional · Software Developer · UI/UX Designer",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
