import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Users,
  Briefcase,
  FileText,
} from "lucide-react";
import { Progress } from "../ui/progress";

interface DashboardSummaryProps {
  recentActivities?: Array<{
    id: string;
    action: string;
    user: string;
    timestamp: string;
  }>;
  stats?: {
    totalCandidates: number;
    activeJobs: number;
    pendingApplications: number;
    completedHires: number;
  };
}

const DashboardSummary = ({
  recentActivities = [
    {
      id: "1",
      action: "New job posting created",
      user: "Sarah Johnson",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      action: "Candidate application reviewed",
      user: "Michael Chen",
      timestamp: "3 hours ago",
    },
    {
      id: "3",
      action: "Interview scheduled",
      user: "Jessica Williams",
      timestamp: "5 hours ago",
    },
    {
      id: "4",
      action: "New declaration added",
      user: "Robert Davis",
      timestamp: "Yesterday",
    },
    {
      id: "5",
      action: "Candidate status updated",
      user: "Emily Rodriguez",
      timestamp: "Yesterday",
    },
  ],
  stats = {
    totalCandidates: 248,
    activeJobs: 12,
    pendingApplications: 36,
    completedHires: 18,
  },
}: DashboardSummaryProps) => {
  return (
    <div className="p-6 bg-white w-full h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Candidates
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCandidates}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeJobs}</div>
            <p className="text-xs text-muted-foreground">+2 new this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Applications
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.pendingApplications}
            </div>
            <p className="text-xs text-muted-foreground">8 require review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Hires
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedHires}</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Charts */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>
              View recruitment metrics and trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="applications">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger
                  value="applications"
                  className="flex items-center gap-2"
                >
                  <LineChart className="h-4 w-4" /> Applications
                </TabsTrigger>
                <TabsTrigger
                  value="positions"
                  className="flex items-center gap-2"
                >
                  <BarChart className="h-4 w-4" /> Positions
                </TabsTrigger>
                <TabsTrigger
                  value="sources"
                  className="flex items-center gap-2"
                >
                  <PieChart className="h-4 w-4" /> Sources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="space-y-4">
                <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-muted-foreground">
                    Applications trend chart would render here
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Software Engineer</span>
                    <span className="text-sm font-medium">24 applications</span>
                  </div>
                  <Progress value={80} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Product Manager</span>
                    <span className="text-sm font-medium">18 applications</span>
                  </div>
                  <Progress value={60} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">UX Designer</span>
                    <span className="text-sm font-medium">12 applications</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </TabsContent>

              <TabsContent
                value="positions"
                className="h-[350px] flex items-center justify-center bg-muted/20 rounded-md"
              >
                <p className="text-muted-foreground">
                  Positions chart would render here
                </p>
              </TabsContent>

              <TabsContent
                value="sources"
                className="h-[350px] flex items-center justify-center bg-muted/20 rounded-md"
              >
                <p className="text-muted-foreground">
                  Candidate sources chart would render here
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 pb-4 border-b last:border-0"
                >
                  <div className="rounded-full p-2 bg-muted">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{activity.user}</span>
                      <span className="mx-1">•</span>
                      <span>{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hiring Pipeline */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Hiring Pipeline</CardTitle>
          <CardDescription>
            Current recruitment status across all positions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-md">
                <h3 className="font-medium">Applied</h3>
                <p className="text-2xl font-bold mt-2">86</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-md">
                <h3 className="font-medium">Screening</h3>
                <p className="text-2xl font-bold mt-2">42</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-md">
                <h3 className="font-medium">Interview</h3>
                <p className="text-2xl font-bold mt-2">28</p>
              </div>
              <div className="p-4 bg-green-50 rounded-md">
                <h3 className="font-medium">Offer</h3>
                <p className="text-2xl font-bold mt-2">12</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium">Hired</h3>
                <p className="text-2xl font-bold mt-2">18</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;
