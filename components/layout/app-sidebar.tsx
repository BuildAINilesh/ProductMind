"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  Search,
  FileText,
  Beaker,
  ShieldAlert,
  CheckSquare,
  Settings,
  LogOut,
  Menu,
  Sparkles,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "AI MarketSense",
      href: "/market-sense",
      icon: Search,
    },
    {
      title: "AI Requirement Validator",
      href: "/requirement-validator",
      icon: FileText,
    },
    {
      title: "AI TestGen",
      href: "/test-gen",
      icon: Beaker,
    },
    {
      title: "AI BugShield",
      href: "/bug-shield",
      icon: ShieldAlert,
    },
    {
      title: "AI SmartSignoff",
      href: "/smart-signoff",
      icon: CheckSquare,
    },
  ]

  return (
    <Sidebar className="border-r border-primary/10 bg-gradient-to-b from-primary to-secondary text-white">
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="rounded-full bg-white/10 p-1.5 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white">PMAssist</span>
        </Link>
        <SidebarTrigger className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="text-white/80 hover:text-white hover:bg-white/10"
                activeClassName="bg-white/20 text-white"
                tooltip={item.title}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/settings"}
              className="text-white/80 hover:text-white hover:bg-white/10"
              activeClassName="bg-white/20 text-white"
              tooltip="Settings"
            >
              <Link href="/settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="text-white/80 hover:text-white hover:bg-white/10" tooltip="Logout">
              <Link href="/">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

