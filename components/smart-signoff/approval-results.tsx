import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ApprovalResultsProps {
  details: string
}

export function ApprovalResults({ details }: ApprovalResultsProps) {
  // This would be calculated based on AI analysis in a real application
  const alignmentScore = 82

  // Sample analysis results
  const analysis = {
    strategic: {
      score: 85,
      strengths: [
        "Aligns well with the company's digital transformation initiative",
        "Supports the goal of improving user experience and engagement",
      ],
      concerns: [
        "Consider how this initiative impacts other strategic priorities",
        "Timeline may conflict with other strategic initiatives",
      ],
    },
    operational: {
      score: 78,
      strengths: ["Leverages existing technical infrastructure", "Minimal disruption to current operations"],
      concerns: [
        "Potential resource constraints during implementation phase",
        "Consider dependencies on other teams and systems",
      ],
    },
    financial: {
      score: 80,
      strengths: ["Expected positive ROI within 6 months", "Implementation costs are within budget guidelines"],
      concerns: ["Consider ongoing maintenance costs", "Potential for scope creep could impact budget"],
    },
    risk: {
      score: 75,
      strengths: ["No major compliance issues identified", "Progressive rollout approach reduces risk"],
      concerns: [
        "Potential data privacy considerations need review",
        "Consider fallback plan if implementation issues arise",
      ],
    },
  }

  // Sample recommendations
  const recommendations = [
    "Include more specific KPIs to measure success",
    "Consider adding a representative from the Security team to the approvers list",
    "Provide more detailed information about testing approach",
    "Address potential impact on other ongoing initiatives",
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Alignment Analysis</CardTitle>
              <CardDescription>Assessment of your approval request against company goals and policies</CardDescription>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{alignmentScore}%</div>
              <Badge variant={alignmentScore >= 80 ? "success" : alignmentScore >= 60 ? "warning" : "destructive"}>
                {alignmentScore >= 80 ? "Good Alignment" : alignmentScore >= 60 ? "Partial Alignment" : "Low Alignment"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <h3 className="font-medium">Strategic Alignment</h3>
                <span className="text-sm">{analysis.strategic.score}/100</span>
              </div>
              <Progress value={analysis.strategic.score} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <h3 className="font-medium">Operational Feasibility</h3>
                <span className="text-sm">{analysis.operational.score}/100</span>
              </div>
              <Progress value={analysis.operational.score} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <h3 className="font-medium">Financial Impact</h3>
                <span className="text-sm">{analysis.financial.score}/100</span>
              </div>
              <Progress value={analysis.financial.score} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <h3 className="font-medium">Risk Assessment</h3>
                <span className="text-sm">{analysis.risk.score}/100</span>
              </div>
              <Progress value={analysis.risk.score} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
          <CardDescription>Strengths and concerns identified in your approval request</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="strategic">
              <AccordionTrigger>Strategic Alignment</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Strengths
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.strategic.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Concerns
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.strategic.concerns.map((concern, index) => (
                        <li key={index}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="operational">
              <AccordionTrigger>Operational Feasibility</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Strengths
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.operational.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Concerns
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.operational.concerns.map((concern, index) => (
                        <li key={index}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="financial">
              <AccordionTrigger>Financial Impact</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Strengths
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.financial.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Concerns
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.financial.concerns.map((concern, index) => (
                        <li key={index}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="risk">
              <AccordionTrigger>Risk Assessment</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Strengths
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.risk.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Concerns
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                      {analysis.risk.concerns.map((concern, index) => (
                        <li key={index}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5" />
                <span className="text-sm">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline">Revise Request</Button>
        <Button>Submit for Approval</Button>
      </div>
    </div>
  )
}

