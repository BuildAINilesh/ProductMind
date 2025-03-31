"use client"

import type React from "react"

import { useState } from "react"
import { Search, Upload, FileUp, BarChart3, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MarketResearchResults } from "@/components/market-sense/market-research-results"

export default function MarketSensePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI MarketSense</h1>
        <p className="text-muted-foreground">Analyze market trends and gain insights for your product ideas</p>
      </div>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="upload">Upload Research</TabsTrigger>
        </TabsList>
        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Research</CardTitle>
              <CardDescription>Enter your product idea to get AI-powered market insights</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="search">Product Idea</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Enter product idea or market question..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid w-full gap-2">
                  <Label htmlFor="details">Additional Details (Optional)</Label>
                  <Textarea
                    id="details"
                    placeholder="Enter target audience, features, competitors, etc."
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={!searchQuery.trim() || isLoading}>
                  {isLoading ? (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Generate Market Insights
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {showResults && <MarketResearchResults query={searchQuery} />}
        </TabsContent>
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Research Files</CardTitle>
              <CardDescription>Upload your market research documents for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-muted/50 px-4 py-5 text-center">
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <div className="mt-4 flex flex-col items-center">
                    <p className="text-sm text-muted-foreground">Drag and drop files here or click to browse</p>
                    <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, XLSX, CSV (Max 10MB)</p>
                  </div>
                  <Input type="file" className="hidden" />
                </div>
                <p className="text-center text-xs text-muted-foreground">Or upload from cloud storage</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Google Drive
                  </Button>
                  <Button variant="outline" size="sm">
                    Dropbox
                  </Button>
                  <Button variant="outline" size="sm">
                    OneDrive
                  </Button>
                </div>
                <Button className="mt-4" disabled>
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload & Analyze
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

