import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/whatsappButton/WhatsAppButton';
import Script from 'next/script';

export const metadata = {
  title: 'Tutor4Study',
  description:
    'Tutor4Study offers expert online tutoring for school subjects, college courses, and competitive exams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="BI8jQ255K9NVW-IK9E7BAab8jYsBOqX9sCREOBOMurE"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZY5NEHH89"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ZY5NEHH89');
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
