import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Sidebar  from "@/components/seller/Sidebar"
import SellerHeader from "@/components/seller/SellerHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full px-8">
        <SellerHeader/>
        {children}
      </main>
    </SidebarProvider>
  )
}
