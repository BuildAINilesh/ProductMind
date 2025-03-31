import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileCheck, TestTube, ShieldAlert, CheckSquare, ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { OverviewChart } from "@/components/dashboard/overview-chart"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight gradient-heading">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your product development activities.
        </p>
      </div>

      <DashboardStats />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-background border border-primary/20">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Card key={module.title} className="overflow-hidden card-hover-effect border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{module.title}</CardTitle>
                  <div className="h-8 w-8 rounded-md bg-primary/10 p-1 text-primary">
                    <module.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2 mb-4">{module.description}</CardDescription>
                  <Link href={module.href}>
                    <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/5">
                      Launch <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <OverviewChart className="col-span-4 card-hover-effect border-primary/10" />
            <RecentActivities className="col-span-3 card-hover-effect border-primary/10" />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Detailed analytics for your product development process will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Analytics content coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Your generated reports and insights will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Reports content coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const modules = [
  {
    title: "AI MarketSense",
    description: "Analyze market trends and gain insights for your product ideas.",
    icon: Search,
    href: "/market-sense",
  },
  {
    title: "AI Requirement Validator",
    description: "Validate your requirements and get real-time feedback.",
    icon: FileCheck,
    href: "/requirement-validator",
  },
  {
    title: "AI TestGen",
    description: "Generate comprehensive test cases for your features.",
    icon: TestTube,
    href: "/test-gen",
  },
  {
    title: "AI BugShield",
    description: "Predict potential defects before they happen.",
    icon: ShieldAlert,
    href: "/bug-shield",
  },
  {
    title: "AI SmartSignoff",
    description: "Streamline your approval process with AI-powered insights.",
    icon: CheckSquare,
    href: "/smart-signoff",
  },
  {
    title: "Analytics",
    description: "Track and monitor key metrics for your products.",
    icon: TrendingUp,
    href: "/analytics",
  },
]

