import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog - Este é um blog com next.js",
  description: "Essa seria a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="bg-red-500">{children}</div>
      </body>
    </html>
  );
}
