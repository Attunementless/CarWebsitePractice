import "./globals.css";
import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
