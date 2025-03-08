import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Mullaney - Portfolio",
  description: "John Mullaney's Portfolio",
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;