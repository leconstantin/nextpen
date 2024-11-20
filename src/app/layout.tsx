import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TopCta from "@/components/layout/topcta";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Penpot: The Design Tool for Design & Code Collaboration",
  description:
    "Penpot is the open-source free design software that connects designers and developers with no handoff drama. Prototyping, UI design and code - all in one app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} text-white antialiased`}>
        <div className="bg-[#f5f8fb] text-[#1c2022] ">
          <TopCta />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
