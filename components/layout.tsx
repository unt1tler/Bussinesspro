import { siteConfig } from "@/config/site"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { ThemeToggle } from "./theme-toggle"
import { CustomCursor } from "./custom-cursor"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {siteConfig.navigation.enabled && <Navigation />}
      <main className="flex-1">{children}</main>
      {siteConfig.footer.enabled && <Footer />}
      <ThemeToggle />
      <CustomCursor />
    </div>
  )
}

