import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";
import { PoppinsBold, PoppinsRegular } from "@/lib/fonts";
import Header from "./_Components/Header";
import { Footer } from "./_Components/Footer";

export const metadata: Metadata = {
  title: "Arruda Bombas Hidráulicas",
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
      <body className={`${PoppinsRegular.variable} ${PoppinsBold.variable}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
