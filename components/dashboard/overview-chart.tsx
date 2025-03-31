"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChartIcon } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface OverviewChartProps {
  className?: string
}

export function OverviewChart({ className }: OverviewChartProps) {
  const data = [
    { name: "Jan", requirements: 32, testCases: 60, defects: 10 },
    { name: "Feb", requirements: 42, testCases: 85, defects: 15 },
    { name: "Mar", requirements: 51, testCases: 95, defects: 13 },
    { name: "Apr", requirements: 39, testCases: 70, defects: 8 },
    { name: "May", requirements: 45, testCases: 80, defects: 12 },
    { name: "Jun", requirements: 53, testCases: 110, defects: 17 },
    { name: "Jul", requirements: 49, testCases: 90, defects: 14 },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Progress across requirements, test cases, and defects</CardDescription>
          </div>
          <LineChartIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRequirements" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorTestCases" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs text-muted-foreground" />
              <YAxis className="text-xs text-muted-foreground" />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
                            <span className="font-bold text-muted-foreground">Overview</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                              <span className="text-[0.70rem] text-muted-foreground">
                                Requirements: {payload[0].value}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <span className="text-[0.70rem] text-muted-foreground">
                                Test Cases: {payload[1].value}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-red-500" />
                              <span className="text-[0.70rem] text-muted-foreground">Defects: {payload[2].value}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="requirements"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorRequirements)"
              />
              <Area
                type="monotone"
                dataKey="testCases"
                stroke="hsl(var(--success))"
                fillOpacity={1}
                fill="url(#colorTestCases)"
              />
              <Area
                type="monotone"
                dataKey="defects"
                stroke="hsl(var(--destructive))"
                fillOpacity={1}
                fill="url(#colorDefects)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

