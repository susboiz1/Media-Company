import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Filter,
  ChevronRight,
} from "lucide-react";

interface JobType {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  salary: string;
  postedDate: string;
  description: string;
  skills: string[];
}

interface JobListingsProps {
  jobs?: JobType[];
  onJobSelect?: (jobId: string) => void;
}

const JobListings = ({
  jobs = [
    {
      id: "1",
      title: "Senior HR Manager",
      company: "TechCorp International",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      postedDate: "2 days ago",
      description:
        "We are looking for an experienced HR Manager to join our growing team...",
      skills: ["HR Management", "Recruitment", "Employee Relations", "HRIS"],
    },
    {
      id: "2",
      title: "Recruitment Specialist",
      company: "Global Solutions Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      postedDate: "1 week ago",
      description:
        "Join our talent acquisition team to help find and recruit top talent...",
      skills: ["Sourcing", "Interviewing", "ATS Systems", "Employer Branding"],
    },
    {
      id: "3",
      title: "HR Coordinator",
      company: "Innovative Startups LLC",
      location: "Chicago, IL",
      type: "Part-time",
      salary: "$45,000 - $55,000",
      postedDate: "3 days ago",
      description:
        "Support our HR department with administrative tasks and coordination...",
      skills: ["Administration", "Documentation", "Onboarding", "Benefits"],
    },
    {
      id: "4",
      title: "Compensation Analyst",
      company: "Financial Services Group",
      location: "Boston, MA",
      type: "Contract",
      salary: "$70,000 - $90,000",
      postedDate: "5 days ago",
      description:
        "Analyze and develop competitive compensation packages for our organization...",
      skills: [
        "Compensation",
        "Benefits Analysis",
        "Market Research",
        "Data Analysis",
      ],
    },
    {
      id: "5",
      title: "Learning & Development Specialist",
      company: "Education First",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      postedDate: "2 weeks ago",
      description:
        "Design and implement training programs to enhance employee skills and knowledge...",
      skills: ["Training", "Curriculum Development", "LMS", "Facilitation"],
    },
    {
      id: "6",
      title: "Employee Relations Specialist",
      company: "Corporate Solutions",
      location: "Denver, CO",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      postedDate: "4 days ago",
      description:
        "Handle employee relations issues and promote a positive workplace culture...",
      skills: [
        "Conflict Resolution",
        "Policy Development",
        "Investigations",
        "Compliance",
      ],
    },
  ],
  onJobSelect,
}: JobListingsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [viewType, setViewType] = useState("grid");
  const navigate = useNavigate();

  const handleJobSelect = (jobId: string) => {
    if (onJobSelect) {
      onJobSelect(jobId);
    } else {
      navigate(`/jobs/${jobId}`);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesJobType =
      jobTypeFilter === "all" || job.type === jobTypeFilter;
    const matchesLocation =
      locationFilter === "all" || job.location.includes(locationFilter);

    return matchesSearch && matchesJobType && matchesLocation;
  });

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Job Listings
          </h1>
          <p className="text-gray-600">
            Browse and find the perfect job opportunity
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                  <SelectItem value="Boston">Boston</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="Denver">Denver</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing {filteredJobs.length} jobs
            </div>
            <div className="flex gap-2">
              <Tabs
                value={viewType}
                onValueChange={setViewType}
                className="w-[200px]"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <Tabs value={viewType} onValueChange={setViewType} className="w-full">
          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{job.company}</p>
                      </div>
                      <Badge
                        variant={
                          job.type === "Full-time"
                            ? "default"
                            : job.type === "Part-time"
                              ? "secondary"
                              : job.type === "Contract"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-gray-400" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-gray-600 line-clamp-2 text-sm">
                      {job.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="secondary" className="font-normal">
                          +{job.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handleJobSelect(job.id)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="flex flex-col gap-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge
                          variant={
                            job.type === "Full-time"
                              ? "default"
                              : job.type === "Part-time"
                                ? "secondary"
                                : job.type === "Contract"
                                  ? "outline"
                                  : "destructive"
                          }
                          className="md:ml-2"
                        >
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>Posted {job.postedDate}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-2 text-sm mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 4).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="font-normal"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 4 && (
                          <Badge variant="secondary" className="font-normal">
                            +{job.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button
                      className="md:self-center whitespace-nowrap"
                      onClick={() => handleJobSelect(job.id)}
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search filters or try a different search term.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setJobTypeFilter("all");
                setLocationFilter("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination - simplified version */}
        {filteredJobs.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
