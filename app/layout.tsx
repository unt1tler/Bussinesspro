import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head />
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}