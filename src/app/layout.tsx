import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movimento ECOHOS | Inovação na Saúde Pública do ES",
  description:
    "O Movimento ECOHOS conecta especialistas, gestores públicos e startups para transformar desafios da saúde pública em soluções tecnológicas que melhorem o atendimento à população.",
  keywords: [
    "ECOHOS",
    "saúde pública",
    "inovação",
    "Espírito Santo",
    "startups",
    "gestores públicos",
    "healthtech",
  ],
  openGraph: {
    title: "Movimento ECOHOS",
    description:
      "Transformar desafios da Saúde Pública em oportunidades. 78 secretarias municipais de saúde no Espírito Santo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
