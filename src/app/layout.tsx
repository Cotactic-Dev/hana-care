import type { Metadata, Viewport } from "next";
import { Inter, Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NOINDEX, SITE_URL } from "@/data/site";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { UIProvider } from "@/components/ui/UIProvider";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-prompt",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hana Care — เตียงผู้ป่วยปรับไฟฟ้าสำหรับใช้ที่บ้าน",
    template: "%s | Hana Care",
  },
  authors: [{ name: "Phatra Leasing Public Company Limited" }],
  robots: NOINDEX ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: { siteName: "Hana Care", locale: "th_TH" },
};

export const viewport: Viewport = {
  themeColor: "#273A78",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${prompt.variable} ${inter.variable}`}>
      <body>
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        <LanguageProvider>
          <UIProvider>
            <TopBar />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <StickyMobileBar />
            <AnalyticsProvider />
          </UIProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
