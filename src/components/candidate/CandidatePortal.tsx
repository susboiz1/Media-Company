import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  Briefcase,
  FileText,
  User,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  ChevronRight,
  Search,
  Building,
  MapPin,
} from "lucide-react";

const CandidatePortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileCompletion: 85,
    appliedJobs: 12,
    savedJobs: 8,
    interviews: 3,
  };

  const recentApplications = [
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "June 15, 2023",
      status: "interview",
    },
    {
      id: "2",
      jobTitle: "UX Designer",
      company: "Design Solutions",
      appliedDate: "June 10, 2023",
      status: "reviewing",
    },
    {
      id: "3",
      jobTitle: "Product Manager",
      company: "ProductFirst",
      appliedDate: "June 5, 2023",
      status: "pending",
    },
  ];

  const upcomingInterviews = [
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      date: "June 25, 2023",
      time: "10:00 AM EST",
      type: "Video Call",
    },
    {
      id: "2",
      jobTitle: "Full Stack Developer",
      company: "Innovate Systems",
      date: "June 28, 2023",
      time: "2:30 PM EST",
      type: "Technical Assessment",
    },
  ];

  const recommendedJobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "WebTech Solutions",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 days ago",
      matchPercentage: 95,
    },
    {
      id: "2",
      title: "UI/UX Designer",
      company: "Creative Designs Inc.",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "1 week ago",
      matchPercentage: 88,
    },
    {
      id: "3",
      title: "React Developer",
      company: "App Innovations",
      location: "San Francisco, CA",
      type: "Contract",
      postedDate: "3 days ago",
      matchPercentage: 82,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "reviewing":
        return <Badge variant="secondary">Reviewing</Badge>;
      case "interview":
        return <Badge variant="default">Interview</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "accepted":
        return <Badge className="bg-green-500">Accepted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                      alt="John Doe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{userData.email}</p>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profile Completion</span>
                      <span>{userData.profileCompletion}%</span>
                    </div>
                    <Progress
                      value={userData.profileCompletion}
                      className="h-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-100 transition-colors ${activeTab === "dashboard" ? "bg-gray-100" : ""}`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <Briefcase className="h-5 w-5 text-gray-500" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-100 transition-colors ${activeTab === "applications" ? "bg-gray-100" : ""}`}
                    onClick={() => setActiveTab("applications")}
                  >
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span>My Applications</span>
                  </button>
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-100 transition-colors ${activeTab === "profile" ? "bg-gray-100" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-5 w-5 text-gray-500" />
                    <span>Profile</span>
                  </button>
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-100 transition-colors ${activeTab === "notifications" ? "bg-gray-100" : ""}`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="h-5 w-5 text-gray-500" />
                    <span>Notifications</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="dashboard" className="mt-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Applied Jobs</p>
                        <h3 className="text-2xl font-bold">
                          {userData.appliedJobs}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Saved Jobs</p>
                        <h3 className="text-2xl font-bold">
                          {userData.savedJobs}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Interviews</p>
                        <h3 className="text-2xl font-bold">
                          {userData.interviews}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Applications */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Applications</CardTitle>
                      <Link to="/candidate/applications">
                        <Button variant="ghost" size="sm" className="gap-1">
                          View All <ChevronRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentApplications.map((application) => (
                        <div
                          key={application.id}
                          className="flex items-center justify-between p-3 border rounded-md"
                        >
                          <div>
                            <h3 className="font-medium">
                              {application.jobTitle}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {application.company}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock size={14} className="text-gray-400" />
                              <span className="text-xs text-gray-500">
                                Applied on {application.appliedDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getStatusBadge(application.status)}
                            <Button variant="ghost" size="sm">
                              <ChevronRight size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Interviews */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {upcomingInterviews.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingInterviews.map((interview) => (
                          <div
                            key={interview.id}
                            className="p-4 border rounded-md"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-medium">
                                  {interview.jobTitle}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {interview.company}
                                </p>
                              </div>
                              <Badge variant="outline">{interview.type}</Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Calendar size={14} className="text-gray-400" />
                              <span className="text-sm">{interview.date}</span>
                              <Clock size={14} className="text-gray-400 ml-2" />
                              <span className="text-sm">{interview.time}</span>
                            </div>
                            <div className="flex justify-end mt-3">
                              <Button size="sm">Prepare</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium mb-1">
                          No Upcoming Interviews
                        </h3>
                        <p className="text-gray-500 mb-4">
                          You don't have any scheduled interviews at the moment.
                        </p>
                        <Link to="/jobs">
                          <Button>Browse Jobs</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recommended Jobs */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recommended for You</CardTitle>
                      <Link to="/jobs">
                        <Button variant="ghost" size="sm" className="gap-1">
                          View More <ChevronRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendedJobs.map((job) => (
                        <div
                          key={job.id}
                          className="p-4 border rounded-md hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{job.title}</h3>
                              <div className="flex items-center text-gray-500 text-sm mt-1">
                                <Building size={14} className="mr-1" />
                                <span className="mr-3">{job.company}</span>
                                <MapPin size={14} className="mr-1" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {job.matchPercentage}% Match
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock size={14} className="mr-1" />
                              <span>{job.postedDate}</span>
                              <Badge variant="outline" className="ml-2">
                                {job.type}
                              </Badge>
                            </div>
                            <Link to={`/jobs/${job.id}`}>
                              <Button size="sm">View Job</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="mt-0">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>My Applications</CardTitle>
                      <div className="relative">
                        <Search
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <input
                          type="text"
                          placeholder="Search applications..."
                          className="pl-9 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-1">
                        Application Details
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Select "My Applications" from the sidebar to view your
                        full application history.
                      </p>
                      <Link to="/candidate/applications">
                        <Button>Go to My Applications</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>My Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-1">
                        Profile Management
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Update your profile information, resume, and
                        preferences.
                      </p>
                      <Link to="/candidate/profile">
                        <Button>Manage Profile</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-blue-50">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Bell className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              Application Status Update
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Your application for "Senior Frontend Developer"
                              at TechCorp Inc. has moved to the interview stage.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              Today, 10:30 AM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex items-start gap-3">
                          <div className="bg-gray-100 p-2 rounded-full">
                            <CheckCircle className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              Profile Completion Reminder
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Complete your profile to increase your chances of
                              getting noticed by employers.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              Yesterday, 2:15 PM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex items-start gap-3">
                          <div className="bg-gray-100 p-2 rounded-full">
                            <Briefcase className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              New Job Recommendations
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              We've found 5 new job postings that match your
                              profile and preferences.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              June 18, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePortal;
