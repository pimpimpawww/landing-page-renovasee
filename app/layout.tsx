import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renovasee - Design & Build Contractor | Jasa Konstruksi Profesional",
  description: "Renovasee adalah kontraktor profesional yang fokus melayani pembangunan rumah mulai dari desain, struktur, konstruksi hingga interior. Gratis biaya design & survey, garansi 1 tahun.",
  keywords: "kontraktor, renovasi rumah, desain interior, konstruksi, build contractor, renovasee, semarang",
  authors: [{ name: "Renovasee" }],
  openGraph: {
    title: "Renovasee - Design & Build Contractor",
    description: "Solusi layanan desain konstruksi yang efisien dan berkualitas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
