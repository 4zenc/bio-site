import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kashif Khan | Link in Bio",
  description: "Personal site and links for Kashif Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground flex justify-center min-h-screen">
        <main className="w-full max-w-md p-6 mt-10 md:mt-20">
            {children}
        </main>
      </body>
    </html>
  );
}