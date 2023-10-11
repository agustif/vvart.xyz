import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 justify-center bg-background">
        <div className="flex h-14 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="mx-auto max-w-5xl">{children}</main>
      <SiteFooter />
    </div>
  )
}
