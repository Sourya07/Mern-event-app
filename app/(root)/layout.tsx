import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import NavItems from "@/components/shared/Navitems"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex h-screen flex-col">
          <Header />
        

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      )
    }