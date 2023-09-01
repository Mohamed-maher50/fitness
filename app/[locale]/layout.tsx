import "./globals.css";
import type { Metadata } from "next";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProviderTheme from "@/components/Theme/Provider";
import Provider from "@/components/Provider";
export const metadata: Metadata = {
  title: "Home ",
  description: "Discover our all exercises",
};
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={" min-h-screen "} dir={locale == "ar" ? "rtl" : "ltr"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <ProviderTheme>
              <Nav />
              {children}
              <Footer />
            </ProviderTheme>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
