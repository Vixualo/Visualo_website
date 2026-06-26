import { DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Visualo',
  description:
    'Visualo es un studio creativo especializado en diseño gráfico, branding, edición de video y motion graphics. Damos vida a marcas con historias y experiencias a través del diseño y la tecnología.',
  keywords: [
    'diseño gráfico',
    'branding',
    'motion graphics',
    'edición de video',
    'studio creativo',
    'identidad visual',
  ],
  authors: [{ name: 'Visualo Studio' }],
  openGraph: {
    title: 'Visualo — Studio de Diseño y Tecnología',
    description:
      'Damos vida a marcas con historias y experiencias a través del diseño y la tecnología.',
    type: 'website',
    locale: 'es_ES',
  },
  metadataBase: new URL('https://visualo.studio'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans), "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
