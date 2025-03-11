import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Search,
  Building,
  MapPin,
  Clock,
  Filter,
  Plus,
  Briefcase,
  Star,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
  featured: boolean;
}

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");

  // Sample job listings
  const jobs: Job[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      postedDate: "2 days ago",
      description:
        "We are looking for an experienced Frontend Developer to join our growing team. You'll develop responsive web applications using React and modern JavaScript frameworks.",
      featured: true,
    },
    {
      id: "2",
      title: "UX/UI Designer",
      company: "Creative Solutions Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      postedDate: "1 week ago",
      description:
        "Join our design team to create user-centered designs for web and mobile applications. You'll conduct user research, create wireframes and prototypes.",
      featured: true,
    },
    {
      id: "3",
      title: "HR Manager",
      company: "Global Enterprises",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      postedDate: "3 days ago",
      description:
        "Lead our HR department in developing and implementing HR strategies aligned with business objectives. You'll oversee recruitment, employee relations, and performance management.",
      featured: false,
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "Cloud Systems Ltd.",
      location: "Boston, MA",
      type: "Contract",
      salary: "$100,000 - $130,000",
      postedDate: "5 days ago",
      description:
        "Implement and maintain CI/CD pipelines and cloud infrastructure. You'll be responsible for automating deployment processes and ensuring high availability.",
      featured: false,
    },
  ];

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesJobType =
      jobTypeFilter === "all" || job.type === jobTypeFilter;

    return matchesSearch && matchesJobType;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Job Listings
            </h1>
            <p className="text-gray-600">
              Find your perfect career opportunity
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Add New Job
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Search jobs by title, company, or keywords"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Tabs defaultValue="all" onValueChange={setJobTypeFilter}>
                <TabsList>
                  <TabsTrigger value="all">All Types</TabsTrigger>
                  <TabsTrigger value="Full-time">Full-time</TabsTrigger>
                  <TabsTrigger value="Part-time">Part-time</TabsTrigger>
                  <TabsTrigger value="Contract">Contract</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs
              .filter((job) => job.featured)
              .map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="mr-3">{job.company}</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        {job.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-500 ml-2">
                        {job.salary}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <Link to={`/jobs/${job.id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Jobs */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Job Listings</h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge className="md:ml-2 bg-blue-100 text-blue-800">
                          {job.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Posted {job.postedDate}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-2 text-sm mb-3">
                        {job.description}
                      </p>
                    </div>
                    <Link to={`/jobs/${job.id}`}>
                      <Button>Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or check back later for new
              opportunities.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setJobTypeFilter("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
