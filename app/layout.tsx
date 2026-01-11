import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/whatsappButton/WhatsAppButton';

export const metadata = {
  title: 'Tutor4Study',
  description: 'Tutor4Study offers expert online tutoring for school subjects, college courses, and competitive exams. Learn from experienced tutors with flexible schedules and personalized guidance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-2ZY5NEHH89"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2ZY5NEHH89');
</script>
        <meta
          name="google-site-verification"
          content="BI8jQ255K9NVW-IK9E7BAab8jYsBOqX9sCREOBOMurE"
        />
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
