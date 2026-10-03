import { Inter } from "next/font/google";

import "./globals.css";

import "./animations.css";

import ClientAnimationShell from "@/components/animations/ClientAnimationShell";

import { defaultMetadata } from "./metadata";



const inter = Inter({ subsets: ["latin"] });



export const metadata = defaultMetadata;



export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <head>

        <link rel="canonical" href={defaultMetadata.alternates.canonical} />

        <meta name="theme-color" content="#ffd60a" />

        <meta

          name="google-site-verification"

          content="gTSOWpNvkGYsqnxxY7EnZeXyN8SQh5Ue6EcekfVTBZY"

        />

        <link

          rel="apple-touch-icon"

          sizes="180x180"

          href="/apple-touch-icon.png"

        />

        <link

          rel="icon"

          type="image/png"

          sizes="32x32"

          href="/favicon-32x32.png"

        />

        <link

          rel="icon"

          type="image/png"

          sizes="16x16"

          href="/favicon-16x16.png"

        />

        <link rel="manifest" href="/site.webmanifest" />

        <link rel="author" type="text/plain" href="/humans.txt" />

        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM information" />

        <meta name="msapplication-TileColor" content="#ffd60a" />

        <meta

          name="viewport"

          content="width=device-width, initial-scale=1, maximum-scale=5"

        />

        <meta name="format-detection" content="telephone=no" />

        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta

          name="apple-mobile-web-app-status-bar-style"

          content="default"

        />

        <meta

          name="apple-mobile-web-app-title"

          content={defaultMetadata.title.default}

        />

      </head>

      <body className={inter.className} suppressHydrationWarning>

        <ClientAnimationShell />

        {children}

      </body>

    </html>

  );

}


