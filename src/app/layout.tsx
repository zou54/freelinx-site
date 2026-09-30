import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Freelinx — Le portage salarial qui vous permet d'entreprendre en toute liberté",
  description:
    "Freelinx vous accompagne en portage salarial : gestion administrative, juridique, sociale et financière, pour que vous restiez concentré sur votre activité.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
