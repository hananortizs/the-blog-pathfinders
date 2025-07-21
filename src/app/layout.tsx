import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Este é um blog com next.js',
    template: '%s | The Blog',
  },
  description: 'Essa seria a descrição dessa página',
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <div>
          <Container>
            <Header />
            {children}
            <footer>
              <h1 className='text-6xl font-bold text-center py-8'>
                Aqui é a FOOTER
              </h1>
            </footer>
          </Container>
        </div>
      </body>
    </html>
  );
}
