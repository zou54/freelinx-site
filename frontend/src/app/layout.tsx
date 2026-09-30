import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { getFooter, getHeader } from "@/lib/strapi";
import { DEFAULT_FOOTER, DEFAULT_HEADER } from "@/lib/default-content";

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [header, footer] = await Promise.all([
    getHeader<typeof DEFAULT_HEADER>(),
    getFooter<typeof DEFAULT_FOOTER>(),
  ]);

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body>
        <Header data={header ?? DEFAULT_HEADER} />
        {children}
        <Footer data={footer ?? DEFAULT_FOOTER} />
        <BookingModal />
      </body>
    </html>
  );
}
