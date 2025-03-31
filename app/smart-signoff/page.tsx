"use client"

import { useState } from "react"
import { CheckSquare, RefreshCw, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ApprovalResults } from "@/components/smart-signoff/approval-results"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SmartSignoffPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [approvalDetails, setApprovalDetails] = useState("")

  const handleAnalyze = () => {
    if (!approvalDetails.trim()) return

    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  const approvers = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Engineering Lead",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    {
      name: "Emma Davis",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    {
      name: "James Wilson",
      role: "QA Lead",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JW",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI SmartSignoff</h1>
        <p className="text-muted-foreground">Streamline your approval workflows with AI-powered insights</p>
      </div>

      <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="new">New Approval</TabsTrigger>
          <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
        </TabsList>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Approval Request</CardTitle>
              <CardDescription>Create a new approval request with AI assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="title">Approval Title</Label>
                  <Input id="title" placeholder="Enter approval title" />
                </div>

                <div className="grid w-full gap-2">
                  <Label htmlFor="type">Approval Type</Label>
                  <Select defaultValue="feature">
                    <SelectTrigger>
                      <SelectValue placeholder="Select approval type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature">Feature Release</SelectItem>
                      <SelectItem value="design">Design Sign-off</SelectItem>
                      <SelectItem value="budget">Budget Approval</SelectItem>
                      <SelectItem value="process">Process Change</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full gap-2">
                  <Label htmlFor="details">Approval Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Describe what needs to be approved, include goals, requirements, and relevant context..."
                    className="min-h-[150px]"
                    value={approvalDetails}
                    onChange={(e) => setApprovalDetails(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Provide detailed information to help AI analyze alignment with company goals
                  </p>
                </div>

                <div className="grid w-full gap-2">
                  <Label>Approvers</Label>
                  <div className="border rounded-md p-4">
                    <div className="flex flex-wrap gap-3">
                      {approvers.map((approver) => (
                        <div
                          key={approver.name}
                          className="flex items-center gap-2 bg-muted/50 rounded-full p-1 pl-1 pr-3"
                        >
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={approver.avatar} alt={approver.name} />
                            <AvatarFallback>{approver.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">{approver.name}</span>
                        </div>
                      ))}
                      <Button variant="ghost" size="sm" className="rounded-full h-8 gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span className="text-xs">Add Approver</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button onClick={handleAnalyze} className="flex-1" disabled={!approvalDetails.trim() || isAnalyzing}>
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <CheckSquare className="mr-2 h-4 w-4" />
                        Analyze Approval
                      </>
                    )}
                  </Button>
                  <Button variant="outline">Clear</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {showResults && <ApprovalResults details={approvalDetails} />}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Manage approvals that require your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Feature Release: Mobile App Navigation Redesign</CardTitle>
                      <CardDescription>Requested by Michael Chen • 3 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {approvers.slice(0, 3).map((approver) => (
                            <Avatar key={approver.name} className="border-2 border-background h-7 w-7">
                              <AvatarImage src={approver.avatar} alt={approver.name} />
                              <AvatarFallback>{approver.initials}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted text-xs font-medium">
                            +1
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground">2 of 4 approved</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">
                        Review <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

