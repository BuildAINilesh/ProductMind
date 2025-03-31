"use client"

import { useState } from "react"
import { ShieldAlert, RefreshCw, Info, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DefectPredictionResults } from "@/components/bug-shield/defect-prediction-results"

export default function BugShieldPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [repoUrl, setRepoUrl] = useState("")

  const handleAnalyze = () => {
    if (!repoUrl) return

    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2500)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI BugShield</h1>
        <p className="text-muted-foreground">Predict potential defects before they happen</p>
      </div>

      <Tabs defaultValue="repository" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="repository">Repository Analysis</TabsTrigger>
          <TabsTrigger value="code">Code Snippet</TabsTrigger>
        </TabsList>
        <TabsContent value="repository" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Repository Analysis</CardTitle>
              <CardDescription>Connect your code repository for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="repo-url">Repository URL</Label>
                  <div className="relative">
                    <GitBranch className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="repo-url"
                      placeholder="https://github.com/username/repo"
                      className="pl-10"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Provide a URL to your Git repository (GitHub, GitLab, Bitbucket)
                  </p>
                </div>

                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Select defaultValue="main">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="develop">develop</SelectItem>
                      <SelectItem value="feature">feature/new-feature</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="analysis-depth">Analysis Depth</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select analysis depth" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quick">Quick Scan</SelectItem>
                      <SelectItem value="standard">Standard Analysis</SelectItem>
                      <SelectItem value="deep">Deep Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-1 mt-1">
                    <Info className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Deeper analysis takes longer but provides more accurate results
                    </span>
                  </div>
                </div>

                <Button onClick={handleAnalyze} disabled={!repoUrl || isAnalyzing} className="w-full">
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Repository...
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Analyze For Defects
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {showResults && <DefectPredictionResults repoUrl={repoUrl} />}
        </TabsContent>
        <TabsContent value="code" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Code Snippet Analysis</CardTitle>
              <CardDescription>Paste your code snippet for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="javascript">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="csharp">C#</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full gap-2">
                  <Label htmlFor="code">Code Snippet</Label>
                  <textarea
                    id="code"
                    placeholder="Paste your code here..."
                    className="min-h-[300px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  />
                </div>

                <Button className="w-full">
                  <ShieldAlert className="mr-2 h-4 w-4" />
                  Analyze Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

