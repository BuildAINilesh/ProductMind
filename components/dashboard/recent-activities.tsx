import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RecentActivitiesProps {
  className?: string
}

export function RecentActivities({ className }: RecentActivitiesProps) {
  const activities = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SJ",
      },
      activity: "Added new requirement for the mobile app",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        email: "michael.c@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MC",
      },
      activity: "Generated test cases for the payment gateway feature",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      user: {
        name: "Olivia Martinez",
        email: "olivia.m@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "OM",
      },
      activity: "Approved the market research report",
      timestamp: "3 hours ago",
    },
    {
      id: 4,
      user: {
        name: "James Wilson",
        email: "james.w@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JW",
      },
      activity: "Fixed potential defect in the authentication system",
      timestamp: "Yesterday",
    },
    {
      id: 5,
      user: {
        name: "Emma Davis",
        email: "emma.d@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
      activity: "Created a new project for the Q3 release",
      timestamp: "2 days ago",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest activities from your team members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                <p className="text-sm text-muted-foreground">{activity.activity}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

