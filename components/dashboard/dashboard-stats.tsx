import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, FileText, AlertTriangle, TestTube } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-primary/10 card-hover-effect overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <Users className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +2 from last month
            </span>
          </p>
        </CardContent>
      </Card>
      <Card className="border-primary/10 card-hover-effect overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Requirements</CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <FileText className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">147</div>
          <p className="text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +24 from last month
            </span>
          </p>
        </CardContent>
      </Card>
      <Card className="border-primary/10 card-hover-effect overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Test Coverage</CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <TestTube className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +4% from last month
            </span>
          </p>
        </CardContent>
      </Card>
      <Card className="border-primary/10 card-hover-effect overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Predicted Defects</CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <AlertTriangle className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <p className="text-xs text-muted-foreground">
            <span className="flex items-center text-red-500">
              <TrendingDown className="mr-1 h-3 w-3" />
              -3 from last month
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

