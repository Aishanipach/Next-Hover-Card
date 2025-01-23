import { Open_Sans } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>
        <div className="green-blur-circle"></div>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
