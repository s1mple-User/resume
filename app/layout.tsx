import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/header/header";
import I18nProvider from "../i18n/i18n";


export const metadata: Metadata = {
  title: "Resume Full stack js",
  description: "Resume",
  icons: {
    icon: "/flat-color-icons_linux.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body>
        <I18nProvider>
         <Header/>
        {children}
        </I18nProvider>
      </body>
    </html>
  );
}
