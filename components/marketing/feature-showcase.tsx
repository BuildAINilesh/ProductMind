import { LineChart, Search, FileCheck, TestTube, ShieldAlert, CheckSquare } from "lucide-react"

export function FeatureShowcase() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "AI MarketSense",
      description: "Analyze market trends and gain insights for your product ideas",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: "AI Requirement Validator",
      description: "Validate your requirements and get real-time feedback",
    },
    {
      icon: <TestTube className="h-10 w-10 text-primary" />,
      title: "AI TestGen",
      description: "Generate comprehensive test cases for your features",
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-primary" />,
      title: "AI BugShield",
      description: "Predict potential defects before they happen",
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-primary" />,
      title: "AI SmartSignoff",
      description: "Streamline your approval process with AI-powered insights",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Analytics Dashboard",
      description: "Track your product's performance and make data-driven decisions",
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background z-0"></div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl gradient-heading">
            Powerful Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our comprehensive suite of AI-powered tools that help product managers optimize their development process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-8 shadow-sm card-hover-effect relative overflow-hidden group"
            >
              {/* Gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 rounded-full bg-primary/10 p-3 w-fit">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

