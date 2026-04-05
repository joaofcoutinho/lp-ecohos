import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Programa Secretário Inovador | Inovação na Saúde Pública do ES",
  description:
    "O Programa Secretário Inovador conecta especialistas, gestores públicos e startups para transformar desafios da saúde pública em soluções tecnológicas que melhorem o atendimento à população.",
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
    title: "Programa Secretário Inovador",
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
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
