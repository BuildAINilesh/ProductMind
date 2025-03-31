import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface RequirementFeedbackProps {
  requirement: string
}

export function RequirementFeedback({ requirement }: RequirementFeedbackProps) {
  // This would be calculated based on AI analysis in a real application
  const overallScore = 76

  // Sample feedback
  const feedback = {
    clarity: {
      score: 85,
      feedback: "The requirement is mostly clear but could benefit from more specific acceptance criteria.",
      suggestions: [
        "Include specific measurable outcomes that define successful implementation",
        "Clarify which user roles this requirement applies to",
      ],
    },
    completeness: {
      score: 70,
      feedback: "The requirement is missing important details about dependencies and constraints.",
      suggestions: [
        "Include any technical dependencies or prerequisites",
        "Specify performance expectations and constraints",
        "Add details about how this requirement relates to other features",
      ],
    },
    testability: {
      score: 80,
      feedback: "The requirement is generally testable but lacks specific success criteria.",
      suggestions: [
        "Define clear acceptance criteria that can be verified through testing",
        "Include edge cases that should be handled properly",
      ],
    },
    feasibility: {
      score: 65,
      feedback: "There are concerns about technical feasibility within the stated timeline.",
      suggestions: [
        "Consider breaking down into smaller, more manageable requirements",
        "Consult with technical team to verify implementation complexity",
        "Consider alternative approaches that might be more feasible",
      ],
    },
  }

  // Ambiguities detected
  const ambiguities = [
    {
      text: "User should be able to easily access the feature",
      issue: '"Easily" is subjective and not measurable',
      suggestion: "Define specific metrics for ease of access (e.g., accessible within 2 clicks)",
    },
    {
      text: "The system must be fast",
      issue: '"Fast" is vague and not quantifiable',
      suggestion: "Specify response time requirements (e.g., API response within 300ms)",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Validation Results</CardTitle>
              <CardDescription>Comprehensive analysis of your requirement</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Overall Score:</span>
              <Badge
                variant={overallScore >= 80 ? "success" : overallScore >= 60 ? "warning" : "destructive"}
                className="text-lg h-8 flex items-center"
              >
                {overallScore}/100
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Clarity Score</h3>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm">{feedback.clarity.score}/100</span>
              </div>
              <Progress value={feedback.clarity.score} className="h-2" />
              <p className="text-sm text-muted-foreground">{feedback.clarity.feedback}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Completeness Score</h3>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm">{feedback.completeness.score}/100</span>
              </div>
              <Progress value={feedback.completeness.score} className="h-2" />
              <p className="text-sm text-muted-foreground">{feedback.completeness.feedback}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Testability Score</h3>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm">{feedback.testability.score}/100</span>
              </div>
              <Progress value={feedback.testability.score} className="h-2" />
              <p className="text-sm text-muted-foreground">{feedback.testability.feedback}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Feasibility Score</h3>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm">{feedback.feasibility.score}/100</span>
              </div>
              <Progress value={feedback.feasibility.score} className="h-2" />
              <p className="text-sm text-muted-foreground">{feedback.feasibility.feedback}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detected Ambiguities</CardTitle>
          <CardDescription>Potential issues that could lead to misinterpretation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ambiguities.map((ambiguity, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-medium">Ambiguous Text</h3>
                      <p className="text-sm italic">"{ambiguity.text}"</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Issue</h3>
                      <p className="text-sm text-muted-foreground">{ambiguity.issue}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Suggestion</h3>
                      <p className="text-sm text-muted-foreground">{ambiguity.suggestion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Improvement Suggestions</CardTitle>
          <CardDescription>Recommendations to enhance your requirement</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="clarity">
              <AccordionTrigger>Clarity Suggestions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                  {feedback.clarity.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="completeness">
              <AccordionTrigger>Completeness Suggestions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                  {feedback.completeness.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="testability">
              <AccordionTrigger>Testability Suggestions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                  {feedback.testability.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feasibility">
              <AccordionTrigger>Feasibility Suggestions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground">
                  {feedback.feasibility.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

