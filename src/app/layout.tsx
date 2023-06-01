import { Metadata } from 'next';
import { PlayerContextProvider } from '@/app/store/playerContextProvider';
import './globals.css';
import { Poppins } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Nav from '@/app/components/nav/Nav';
import Footer from '@/app/components/footer/Footer';
config.autoAddCss = false;

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dj Adrian Andrea',
  description:
    'Introducing the ultimate music experience, brought to you by the one and only DJ Adrian Andrea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <PlayerContextProvider>
          <Nav />
          {children}
          <Footer />
        </PlayerContextProvider>
      </body>
    </html>
  );
}
