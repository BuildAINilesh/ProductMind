import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow delay-1000"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="animate-fade-up glass-effect rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-primary/20 shadow-sm">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Introducing PMAssist AI
            </span>
          </div>
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transform your <span className="gradient-heading">product development</span> with AI
          </h1>
          <p className="animate-fade-up mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
            Streamline your product workflows, validate requirements, predict issues, and make data-driven decisions
            with our powerful AI assistant.
          </p>
          <div className="animate-fade-up flex gap-4 mt-6">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="button-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="mt-12 animate-fade-up w-full max-w-5xl">
            <div className="overflow-hidden rounded-xl border shadow-xl card-hover-effect">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none"></div>
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="PMAssist Dashboard Preview"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

