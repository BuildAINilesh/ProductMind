"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ShieldAlert, FileWarning, AlertTriangle, FileCode2, GitCommit } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DefectPredictionResultsProps {
  repoUrl: string
}

export function DefectPredictionResults({ repoUrl }: DefectPredictionResultsProps) {
  // Sample data for prediction results
  const summary = {
    filesAnalyzed: 128,
    defectsFound: 7,
    highRisk: 2,
    mediumRisk: 3,
    lowRisk: 2,
    overallRiskScore: "Medium",
    scanDate: new Date().toLocaleString(),
  }

  // Sample defects data
  const defects = [
    {
      id: "DEF-001",
      file: "src/components/auth/login.js",
      line: 42,
      severity: "High",
      type: "Security",
      description: "Potential XSS vulnerability in user input handling",
      recommendation: "Implement input sanitization and use React's built-in XSS protection",
    },
    {
      id: "DEF-002",
      file: "src/services/api.js",
      line: 87,
      severity: "High",
      type: "Security",
      description: "API key exposed in client-side code",
      recommendation: "Move API key to server-side environment variables",
    },
    {
      id: "DEF-003",
      file: "src/utils/validation.js",
      line: 23,
      severity: "Medium",
      type: "Logic",
      description: "Potential null reference exception",
      recommendation: "Add null check before accessing properties",
    },
    {
      id: "DEF-004",
      file: "src/components/dashboard/chart.js",
      line: 156,
      severity: "Medium",
      type: "Performance",
      description: "Inefficient data processing in loop",
      recommendation: "Use array methods like map/reduce or memoize results",
    },
    {
      id: "DEF-005",
      file: "src/contexts/user-context.js",
      line: 92,
      severity: "Medium",
      type: "Memory",
      description: "Potential memory leak in event listener",
      recommendation: "Add cleanup function to remove event listener in useEffect",
    },
    {
      id: "DEF-006",
      file: "src/pages/products/index.js",
      line: 34,
      severity: "Low",
      type: "UI",
      description: "Missing loading state can cause UI flicker",
      recommendation: "Add loading state to prevent UI flicker during data fetch",
    },
    {
      id: "DEF-007",
      file: "src/components/forms/submit-button.js",
      line: 17,
      severity: "Low",
      type: "Accessibility",
      description: "Button lacks accessible name",
      recommendation: "Add aria-label or text content to button for screen readers",
    },
  ]

  // Sample hotspots data
  const hotspots = [
    {
      file: "src/services/api.js",
      riskScore: 85,
      complexityScore: 78,
      changeFrequency: "High",
      lastModified: "2 days ago",
      defects: 2,
    },
    {
      file: "src/components/auth/login.js",
      riskScore: 72,
      complexityScore: 65,
      changeFrequency: "Medium",
      lastModified: "5 days ago",
      defects: 1,
    },
    {
      file: "src/utils/validation.js",
      riskScore: 68,
      complexityScore: 62,
      changeFrequency: "Medium",
      lastModified: "1 week ago",
      defects: 1,
    },
    {
      file: "src/contexts/user-context.js",
      riskScore: 65,
      complexityScore: 70,
      changeFrequency: "Low",
      lastModified: "2 weeks ago",
      defects: 1,
    },
    {
      file: "src/components/dashboard/chart.js",
      riskScore: 59,
      complexityScore: 55,
      changeFrequency: "Medium",
      lastModified: "3 days ago",
      defects: 1,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "destructive"
      case "Medium":
        return "warning"
      case "Low":
        return "success"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Defect Prediction Results</CardTitle>
              <CardDescription>Analysis of {repoUrl.split("//")[1]}</CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">Scan date: {summary.scanDate}</div>
              <Badge
                variant={
                  summary.overallRiskScore === "High"
                    ? "destructive"
                    : summary.overallRiskScore === "Medium"
                      ? "warning"
                      : "success"
                }
                className="text-sm"
              >
                {summary.overallRiskScore} Risk
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <Card className="bg-card/50 shadow-none border">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <FileCode2 className="h-5 w-5 text-muted-foreground mb-2" />
                <div className="text-2xl font-bold">{summary.filesAnalyzed}</div>
                <p className="text-xs text-muted-foreground">Files Analyzed</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 shadow-none border">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <ShieldAlert className="h-5 w-5 text-muted-foreground mb-2" />
                <div className="text-2xl font-bold">{summary.defectsFound}</div>
                <p className="text-xs text-muted-foreground">Defects Found</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 shadow-none border">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="h-5 w-5 text-destructive mb-2" />
                <div className="text-2xl font-bold">{summary.highRisk}</div>
                <p className="text-xs text-muted-foreground">High Risk</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 shadow-none border">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mb-2" />
                <div className="text-2xl font-bold">{summary.mediumRisk}</div>
                <p className="text-xs text-muted-foreground">Medium Risk</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 shadow-none border">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="h-5 w-5 text-green-500 mb-2" />
                <div className="text-2xl font-bold">{summary.lowRisk}</div>
                <p className="text-xs text-muted-foreground">Low Risk</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="defects" className="w-full">
        <TabsList className="w-full max-w-sm">
          <TabsTrigger value="defects">Predicted Defects</TabsTrigger>
          <TabsTrigger value="hotspots">Code Hotspots</TabsTrigger>
        </TabsList>
        <TabsContent value="defects" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="w-[100px]">Severity</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {defects.map((defect) => (
                  <TableRow key={defect.id}>
                    <TableCell className="font-mono text-xs">{defect.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium truncate max-w-[200px]">{defect.file}</span>
                        <span className="text-xs text-muted-foreground">Line {defect.line}</span>
                      </div>
                    </TableCell>
                    <TableCell>{defect.type}</TableCell>
                    <TableCell>
                      <Badge variant={getSeverityColor(defect.severity) as any}>{defect.severity}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="max-w-[300px] truncate text-sm">{defect.description}</div>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[350px]">
                            <p className="font-medium">Issue: {defect.description}</p>
                            <p className="text-xs">Recommendation: {defect.recommendation}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Alert>
            <FileWarning className="h-4 w-4" />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>
              {defects.filter((d) => d.severity === "High").length} high severity issues need immediate attention.
              Consider addressing these issues before your next deployment.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="hotspots" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File</TableHead>
                  <TableHead className="text-right">Risk Score</TableHead>
                  <TableHead className="text-right">Complexity</TableHead>
                  <TableHead>Change Frequency</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead className="text-right">Defects</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hotspots.map((hotspot) => (
                  <TableRow key={hotspot.file}>
                    <TableCell className="font-medium">{hotspot.file}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          hotspot.riskScore >= 75 ? "destructive" : hotspot.riskScore >= 60 ? "warning" : "success"
                        }
                      >
                        {hotspot.riskScore}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{hotspot.complexityScore}</TableCell>
                    <TableCell>{hotspot.changeFrequency}</TableCell>
                    <TableCell>{hotspot.lastModified}</TableCell>
                    <TableCell className="text-right">{hotspot.defects}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Alert>
            <GitCommit className="h-4 w-4" />
            <AlertTitle>Code Hotspots</AlertTitle>
            <AlertDescription>
              These files have the highest risk of containing defects based on complexity, change frequency, and other
              metrics. Consider code reviews and refactoring for these areas.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}

