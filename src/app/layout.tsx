import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Arruda Bombas",
  description: `Arruda Bombas oferece soluções de 
  bombeamento para diversos setores, incluindo construção civil, 
  indústria e agronegócio. Conheça nossos produtos e serviços`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/img/Logo.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry></body>
    </html>
  );
}
