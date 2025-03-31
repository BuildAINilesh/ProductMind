"use client"

import { useState } from "react"
import { FileUp, FileText, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RequirementFeedback } from "@/components/requirement-validator/requirement-feedback"

export default function RequirementValidatorPage() {
  const [requirementText, setRequirementText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleValidate = () => {
    if (!requirementText.trim()) return

    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowFeedback(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Requirement Validator</h1>
        <p className="text-muted-foreground">Validate your requirements with AI-powered feedback and suggestions</p>
      </div>

      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="input">Input Requirements</TabsTrigger>
          <TabsTrigger value="upload">Upload Document</TabsTrigger>
        </TabsList>
        <TabsContent value="input" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Requirement Input</CardTitle>
              <CardDescription>Enter your requirement details for AI validation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-4">
                <div>
                  <Label htmlFor="requirement">Requirement Text</Label>
                  <Textarea
                    id="requirement"
                    placeholder="Enter your requirement details here..."
                    className="min-h-[200px] mt-2"
                    value={requirementText}
                    onChange={(e) => setRequirementText(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Write clear, specific requirements. Include acceptance criteria, constraints, and dependencies where
                    applicable.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button onClick={handleValidate} disabled={!requirementText.trim() || isAnalyzing} className="flex-1">
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Validate Requirement
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setRequirementText("")
                      setShowFeedback(false)
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {showFeedback && <RequirementFeedback requirement={requirementText} />}
        </TabsContent>
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Requirements Document</CardTitle>
              <CardDescription>Upload your PRD or BRD document for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-muted/50 px-4 py-5 text-center">
                  <FileUp className="h-10 w-10 text-muted-foreground" />
                  <div className="mt-4 flex flex-col items-center">
                    <p className="text-sm text-muted-foreground">Drag and drop your document here or click to browse</p>
                    <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, TXT (Max 5MB)</p>
                  </div>
                  <input type="file" className="hidden" />
                </div>
                <Button className="mt-4" disabled>
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

