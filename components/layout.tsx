import { siteConfig } from "@/config/site"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { ThemeToggle } from "./theme-toggle"
import { CustomCursor } from "./custom-cursor"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {siteConfig.navigation.enabled && <Navigation />}
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {siteConfig.footer.enabled && <Footer />}
      <ThemeToggle />
      <CustomCursor />
    </div>
  )
}