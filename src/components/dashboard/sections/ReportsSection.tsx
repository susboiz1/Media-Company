import React from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Download,
  Calendar,
  Filter,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Routes, Route, Link } from "react-router-dom";

interface ReportsSectionProps {
  title?: string;
  description?: string;
}

const ReportsSection = ({
  title = "Reports & Analytics",
  description = "Generate and view reports with data visualizations",
}: ReportsSectionProps) => {
  const ApplicationStatsView = () => (
    <div className="w-full h-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={16} />
            Date Range
          </Button>
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <CardDescription>All time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Active Applications
            </CardTitle>
            <CardDescription>Current month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> +5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <CardDescription>Applications to Interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8%</div>
            <p className="text-xs text-red-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> -2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Application Trends</CardTitle>
          <CardDescription>
            Monthly application submissions over time
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
            <LineChart size={48} className="text-gray-400" />
            <span className="ml-2 text-gray-500">Application Trend Chart</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Application Sources</CardTitle>
            <CardDescription>
              Where candidates are finding your jobs
            </CardDescription>
          </div>
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
            <PieChart size={48} className="text-gray-400" />
            <span className="ml-2 text-gray-500">
              Application Sources Chart
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const PositionStatsView = () => (
    <div className="w-full h-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Position Statistics</h1>
          <p className="text-gray-500">Analyze job position performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={16} />
            Date Range
          </Button>
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Active Positions
            </CardTitle>
            <CardDescription>Currently open</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> +3 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Applications
            </CardTitle>
            <CardDescription>Per position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Time to Fill</CardTitle>
            <CardDescription>Average days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <Activity size={14} className="mr-1" /> -4 days from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Position Performance</CardTitle>
          <CardDescription>Applications by position type</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
            <BarChart size={48} className="text-gray-400" />
            <span className="ml-2 text-gray-500">
              Position Performance Chart
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Hiring Funnel</CardTitle>
            <CardDescription>
              Conversion rates through hiring stages
            </CardDescription>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="developer">Software Developer</SelectItem>
              <SelectItem value="designer">UX Designer</SelectItem>
              <SelectItem value="manager">Product Manager</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
            <BarChart size={48} className="text-gray-400" />
            <span className="ml-2 text-gray-500">Hiring Funnel Chart</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const CustomReportsView = () => (
    <div className="w-full h-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Custom Reports</h1>
          <p className="text-gray-500">Create and manage custom reports</p>
        </div>
        <Button className="flex items-center gap-2">
          <Download size={16} />
          Export Report
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Custom Report Builder</CardTitle>
          <CardDescription>
            Create a customized report with the metrics you need
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Report Type
              </label>
              <Select defaultValue="applications">
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applications">Applications</SelectItem>
                  <SelectItem value="positions">Positions</SelectItem>
                  <SelectItem value="candidates">Candidates</SelectItem>
                  <SelectItem value="hiring">Hiring Process</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Time Period
              </label>
              <Select defaultValue="last30days">
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 days</SelectItem>
                  <SelectItem value="last30days">Last 30 days</SelectItem>
                  <SelectItem value="last90days">Last 90 days</SelectItem>
                  <SelectItem value="lastyear">Last year</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Metrics</label>
              <Select defaultValue="applications">
                <SelectTrigger>
                  <SelectValue placeholder="Select metrics" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applications">
                    Application Count
                  </SelectItem>
                  <SelectItem value="conversion">Conversion Rate</SelectItem>
                  <SelectItem value="time">Time to Hire</SelectItem>
                  <SelectItem value="source">Source Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Visualization
              </label>
              <Select defaultValue="bar">
                <SelectTrigger>
                  <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="line">Line Chart</SelectItem>
                  <SelectItem value="pie">Pie Chart</SelectItem>
                  <SelectItem value="table">Data Table</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full">Generate Custom Report</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Saved Reports</CardTitle>
          <CardDescription>Your previously generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <h3 className="font-medium">Q2 Hiring Overview</h3>
                <p className="text-sm text-gray-500">Created on May 15, 2023</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Download size={14} />
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <h3 className="font-medium">Developer Hiring Funnel</h3>
                <p className="text-sm text-gray-500">
                  Created on April 3, 2023
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Download size={14} />
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <h3 className="font-medium">Annual Recruitment Analysis</h3>
                <p className="text-sm text-gray-500">
                  Created on January 10, 2023
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Download size={14} />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<ApplicationStatsView />} />
        <Route path="/applications" element={<ApplicationStatsView />} />
        <Route path="/positions" element={<PositionStatsView />} />
        <Route path="/custom" element={<CustomReportsView />} />
      </Routes>
    </div>
  );
};

export default ReportsSection;
