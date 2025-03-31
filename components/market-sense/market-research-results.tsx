"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"

interface MarketResearchResultsProps {
  query: string
}

export function MarketResearchResults({ query }: MarketResearchResultsProps) {
  // Sample data for charts
  const marketSizeData = [
    { name: "2022", value: 450 },
    { name: "2023", value: 520 },
    { name: "2024", value: 610 },
    { name: "2025", value: 720 },
    { name: "2026", value: 850 },
  ]

  const competitorData = [
    { name: "Competitor A", value: 35 },
    { name: "Competitor B", value: 25 },
    { name: "Competitor C", value: 20 },
    { name: "Competitor D", value: 15 },
    { name: "Others", value: 5 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Market Research: {query}</CardTitle>
          <CardDescription>
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Executive Summary</h3>
              <p className="text-muted-foreground">
                Our AI analysis indicates a growing market for {query} with significant opportunity for innovation. The
                market is projected to grow at a CAGR of 15.2% over the next 5 years, reaching $850M by 2026. Key market
                drivers include increasing digital adoption, remote work trends, and rising consumer demand for seamless
                experiences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Key Insights</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Target demographic skews towards 25-45 age range with high digital literacy</li>
                <li>Top customer pain points: integration complexity, data security, and user experience</li>
                <li>Main competitors have focused on enterprise clients, leaving SMB segment underserved</li>
                <li>Pricing sweet spot appears to be $15-25 monthly subscription for core offering</li>
                <li>Mobile functionality and AI capabilities rated as most important features by potential users</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="size">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="size">Market Size</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
            </TabsList>
            <TabsContent value="size" className="space-y-4">
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketSizeData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs text-muted-foreground" />
                    <YAxis
                      className="text-xs text-muted-foreground"
                      label={{ value: "Market Size ($M)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Year</span>
                                  <span className="font-bold text-foreground">{label}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                                  <span className="font-bold text-foreground">${payload[0].value}M</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Projected market size growth for {query} (in millions USD)
              </p>
            </TabsContent>
            <TabsContent value="competitors" className="space-y-4">
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={competitorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {competitorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Company</span>
                                  <span className="font-bold text-foreground">{payload[0].name}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Market Share</span>
                                  <span className="font-bold text-foreground">{payload[0].value}%</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Current market share distribution among key competitors
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Market Entry Strategy</h3>
              <p className="text-muted-foreground">
                Based on our analysis, we recommend a focused entry targeting the SMB segment with a feature-rich but
                easy-to-use solution. Emphasize mobile functionality and AI-powered insights as key differentiators from
                competitors who primarily focus on enterprise clients.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Pricing Strategy</h3>
              <p className="text-muted-foreground">
                Implement a tiered pricing model starting at $19/month for basic features, with premium tiers at $29 and
                $49 for advanced capabilities. Consider offering a limited free tier to drive adoption and upsell
                opportunities.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Feature Prioritization</h3>
              <p className="text-muted-foreground">
                Prioritize development of seamless mobile experience, robust security features, and AI-powered
                automation capabilities. Secondary focus should be on integration with popular tools in the target
                market to reduce friction in adoption.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

