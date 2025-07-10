import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'The Blog - Este é um blog com next.js',
  description: 'Essa seria a descrição dessa página',
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <div
          className={clsx(
            'text-6xl',
            'font-bold',
            'hover:text-blue-50',
            'hover:',
            'bg-blue-500',
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
