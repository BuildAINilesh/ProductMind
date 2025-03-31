"use client"

import { useState } from "react"
import { Beaker, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestCaseResults } from "@/components/test-gen/test-case-results"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TestGenPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const features = [
    "User Authentication",
    "Payment Processing",
    "Product Search",
    "Account Management",
    "Notifications System",
    "Dashboard Analytics",
    "User Onboarding",
  ]

  const handleGenerate = () => {
    if (!selectedFeature) return

    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI TestGen</h1>
        <p className="text-muted-foreground">Generate comprehensive test cases for your features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Test Generation</CardTitle>
            <CardDescription>Configure and generate test cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feature">Select Feature</Label>
                <Select onValueChange={setSelectedFeature} value={selectedFeature}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a feature" />
                  </SelectTrigger>
                  <SelectContent>
                    {features.map((feature) => (
                      <SelectItem key={feature} value={feature}>
                        {feature}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Feature Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Enter additional details about the feature..."
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  Providing more context will help generate more accurate test cases
                </p>
              </div>

              <div className="space-y-3">
                <Label>Test Types</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="functional" defaultChecked />
                    <label
                      htmlFor="functional"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Functional Tests
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edge" defaultChecked />
                    <label
                      htmlFor="edge"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Edge Cases
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="performance" />
                    <label
                      htmlFor="performance"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Performance Tests
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="security" />
                    <label
                      htmlFor="security"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Security Tests
                    </label>
                  </div>
                </div>
              </div>

              <Button onClick={handleGenerate} disabled={!selectedFeature || isGenerating} className="w-full">
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Beaker className="mr-2 h-4 w-4" />
                    Generate Test Cases
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults ? (
          <TestCaseResults feature={selectedFeature} className="md:col-span-2" />
        ) : (
          <Card className="md:col-span-2">
            <div className="h-full flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <Beaker className="h-16 w-16 mb-4 opacity-20" />
              <h3 className="text-lg font-medium mb-2">No Test Cases Generated Yet</h3>
              <p>Select a feature and click the "Generate Test Cases" button to create AI-powered test scenarios.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

