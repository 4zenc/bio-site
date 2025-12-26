import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // The premium font
import "./globals.css";

export const metadata: Metadata = {
  title: "Kashif Khan | Link in Bio",
  description: "Creator, Designer, and Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased bg-[#050505] text-[#ededed] flex justify-center min-h-screen selection:bg-neutral-800">
        <main className="w-full max-w-[430px] px-6 mt-16 md:mt-24 pb-20">
            {children}
        </main>
      </body>
    </html>
  );
}
