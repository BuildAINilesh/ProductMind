"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Copy } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

interface TestCaseResultsProps {
  feature: string
  className?: string
}

export function TestCaseResults({ feature, className }: TestCaseResultsProps) {
  const [selectedTests, setSelectedTests] = useState<string[]>([])

  // Sample test case data - in a real app this would come from the API
  const testCases = {
    functional: [
      {
        id: "TC-F-001",
        name: "Valid User Login",
        description: "Test that a user can successfully log in with valid credentials",
        steps: ["Navigate to login page", "Enter valid username", "Enter valid password", "Click submit button"],
        expectedResult: "User is successfully logged in and redirected to dashboard",
        priority: "High",
      },
      {
        id: "TC-F-002",
        name: "Invalid User Login",
        description: "Test that appropriate error message is shown for invalid credentials",
        steps: ["Navigate to login page", "Enter invalid username or password", "Click submit button"],
        expectedResult: "Error message is displayed and user remains on login page",
        priority: "High",
      },
      {
        id: "TC-F-003",
        name: "User Logout",
        description: "Test that a user can successfully log out from the application",
        steps: ["Login with valid credentials", "Click on logout button in the user menu"],
        expectedResult: "User is logged out and redirected to login page",
        priority: "Medium",
      },
    ],
    edge: [
      {
        id: "TC-E-001",
        name: "Concurrent Login Attempts",
        description: "Test system behavior when a user attempts to login from multiple devices simultaneously",
        steps: [
          "User attempts to login from Device A",
          "Before authentication completes on Device A, user attempts to login from Device B",
        ],
        expectedResult: "Both login attempts are handled correctly without errors",
        priority: "Medium",
      },
      {
        id: "TC-E-002",
        name: "Session Timeout",
        description: "Test that session expires after the configured timeout period",
        steps: [
          "Login with valid credentials",
          "Remain inactive for the session timeout period",
          "Attempt to perform an action",
        ],
        expectedResult: "User is redirected to login page with session timeout message",
        priority: "Medium",
      },
    ],
    security: [
      {
        id: "TC-S-001",
        name: "SQL Injection Prevention",
        description: "Test that login form is protected against SQL injection attacks",
        steps: [
          "Navigate to login page",
          "Enter SQL injection string in username field",
          "Enter any password",
          "Click submit button",
        ],
        expectedResult: "Login fails with invalid credentials error, no database errors exposed",
        priority: "High",
      },
      {
        id: "TC-S-002",
        name: "Brute Force Attack Prevention",
        description: "Test that the system prevents brute force attacks by limiting login attempts",
        steps: [
          "Navigate to login page",
          "Enter incorrect credentials multiple times (more than the allowed threshold)",
        ],
        expectedResult: "Account is temporarily locked after threshold is reached",
        priority: "High",
      },
    ],
  }

  // Function to toggle selection of a test case
  const toggleTestSelection = (testId: string) => {
    if (selectedTests.includes(testId)) {
      setSelectedTests(selectedTests.filter((id) => id !== testId))
    } else {
      setSelectedTests([...selectedTests, testId])
    }
  }

  // Function to select all test cases
  const selectAllTests = () => {
    const allTestIds = [
      ...testCases.functional.map((tc) => tc.id),
      ...testCases.edge.map((tc) => tc.id),
      ...testCases.security.map((tc) => tc.id),
    ]
    setSelectedTests(allTestIds)
  }

  // Function to clear all selected test cases
  const clearAllTests = () => {
    setSelectedTests([])
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle>Test Cases: {feature}</CardTitle>
            <CardDescription>AI-generated test cases for your feature</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" disabled={selectedTests.length === 0}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button size="sm" variant="outline" disabled={selectedTests.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="functional" className="w-full">
          <div className="border-b px-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="functional" className="relative">
                Functional
                <Badge variant="secondary" className="ml-2 py-0 px-2 h-5">
                  {testCases.functional.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="edge" className="relative">
                Edge Cases
                <Badge variant="secondary" className="ml-2 py-0 px-2 h-5">
                  {testCases.edge.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="security" className="relative">
                Security
                <Badge variant="secondary" className="ml-2 py-0 px-2 h-5">
                  {testCases.security.length}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="selectAll"
                checked={selectedTests.length > 0}
                onCheckedChange={(checked) => {
                  if (checked) {
                    selectAllTests()
                  } else {
                    clearAllTests()
                  }
                }}
              />
              <label htmlFor="selectAll" className="text-sm font-medium">
                {selectedTests.length > 0 ? `${selectedTests.length} tests selected` : "Select all tests"}
              </label>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Badge variant="outline" className="mr-2">
                Priority Filter
              </Badge>
              <Badge variant="secondary">High</Badge>
              <Badge variant="outline">Medium</Badge>
              <Badge variant="outline">Low</Badge>
            </div>
          </div>

          <TabsContent value="functional" className="p-0">
            <Accordion type="multiple" className="w-full">
              {testCases.functional.map((testCase) => (
                <AccordionItem value={testCase.id} key={testCase.id} className="border-b">
                  <div className="flex items-center px-6 py-4">
                    <Checkbox
                      id={`checkbox-${testCase.id}`}
                      checked={selectedTests.includes(testCase.id)}
                      onCheckedChange={() => toggleTestSelection(testCase.id)}
                      className="mr-4"
                    />
                    <AccordionTrigger className="flex-1 hover:no-underline py-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {testCase.id}
                          </Badge>
                          <h4 className="font-medium">{testCase.name}</h4>
                        </div>
                        <Badge
                          variant={
                            testCase.priority === "High"
                              ? "default"
                              : testCase.priority === "Medium"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {testCase.priority}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="px-6 pb-4 pt-0 ml-10">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm">Description</h5>
                        <p className="text-sm text-muted-foreground">{testCase.description}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Steps</h5>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground">
                          {testCase.steps.map((step, index) => (
                            <li key={index} className="ml-2">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Expected Result</h5>
                        <p className="text-sm text-muted-foreground">{testCase.expectedResult}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="edge" className="p-0">
            <Accordion type="multiple" className="w-full">
              {testCases.edge.map((testCase) => (
                <AccordionItem value={testCase.id} key={testCase.id} className="border-b">
                  <div className="flex items-center px-6 py-4">
                    <Checkbox
                      id={`checkbox-${testCase.id}`}
                      checked={selectedTests.includes(testCase.id)}
                      onCheckedChange={() => toggleTestSelection(testCase.id)}
                      className="mr-4"
                    />
                    <AccordionTrigger className="flex-1 hover:no-underline py-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {testCase.id}
                          </Badge>
                          <h4 className="font-medium">{testCase.name}</h4>
                        </div>
                        <Badge
                          variant={
                            testCase.priority === "High"
                              ? "default"
                              : testCase.priority === "Medium"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {testCase.priority}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="px-6 pb-4 pt-0 ml-10">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm">Description</h5>
                        <p className="text-sm text-muted-foreground">{testCase.description}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Steps</h5>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground">
                          {testCase.steps.map((step, index) => (
                            <li key={index} className="ml-2">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Expected Result</h5>
                        <p className="text-sm text-muted-foreground">{testCase.expectedResult}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="security" className="p-0">
            <Accordion type="multiple" className="w-full">
              {testCases.security.map((testCase) => (
                <AccordionItem value={testCase.id} key={testCase.id} className="border-b">
                  <div className="flex items-center px-6 py-4">
                    <Checkbox
                      id={`checkbox-${testCase.id}`}
                      checked={selectedTests.includes(testCase.id)}
                      onCheckedChange={() => toggleTestSelection(testCase.id)}
                      className="mr-4"
                    />
                    <AccordionTrigger className="flex-1 hover:no-underline py-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {testCase.id}
                          </Badge>
                          <h4 className="font-medium">{testCase.name}</h4>
                        </div>
                        <Badge
                          variant={
                            testCase.priority === "High"
                              ? "default"
                              : testCase.priority === "Medium"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {testCase.priority}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="px-6 pb-4 pt-0 ml-10">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm">Description</h5>
                        <p className="text-sm text-muted-foreground">{testCase.description}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Steps</h5>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground">
                          {testCase.steps.map((step, index) => (
                            <li key={index} className="ml-2">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Expected Result</h5>
                        <p className="text-sm text-muted-foreground">{testCase.expectedResult}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

