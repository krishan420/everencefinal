import "./globals.css";
import Script from "next/script";
import { campton, inter } from "@/lib/fonts";

export const metadata = {
  metadataBase: new URL("https://everence.io"),

  title: {
    default: "Everence | Digital Forensics & Cyber Investigation Services",
    template: "%s | Everence",
  },

  description:
    "Everence provides digital forensics and cyber investigation services in India, helping organizations detect threats, investigate incidents, and protect critical business data.",

  openGraph: {
    type: "website",
    siteName: "Everence",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${campton.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YS3PWDCQF9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YS3PWDCQF9');
          `}
        </Script>
      </body>
    </html>
  );
}