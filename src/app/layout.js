import "./globals.css";

export const metadata = {
  title: "Rentify",
  description: "website for renting home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iran-yakan">{children}</body>
    </html>
  );
}
