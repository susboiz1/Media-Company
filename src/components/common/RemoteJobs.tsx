import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Building,
  Clock,
  Filter,
  Globe,
  Wifi,
  Home,
  Briefcase,
  Star,
  ChevronRight,
  LaptopIcon,
  CheckCircle,
} from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const RemoteJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");

  const remoteJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Remote Tech Co.",
      location: "Remote (Worldwide)",
      region: "Worldwide",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "3 days ago",
      rating: 4.8,
      benefits: ["Flexible hours", "Home office stipend", "Health insurance"],
      skills: ["React", "TypeScript", "Redux", "CSS"],
      description:
        "Build responsive web applications using React and modern JavaScript frameworks. You'll be responsible for implementing user interfaces, optimizing performance, and collaborating with backend developers. The ideal candidate has strong experience with React, TypeScript, and state management libraries.",
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "Global Systems Inc.",
      location: "Remote (US Only)",
      region: "US Only",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      postedDate: "1 week ago",
      rating: 4.7,
      benefits: ["401(k) matching", "Unlimited PTO", "Health benefits"],
      skills: ["Node.js", "AWS", "MongoDB", "Express"],
      description:
        "Develop scalable backend services using Node.js and cloud technologies. You'll design and implement APIs, optimize database performance, and ensure system reliability. We're looking for someone with experience in Node.js, AWS, and database design.",
    },
    {
      id: "3",
      title: "Product Designer",
      company: "Design Anywhere",
      location: "Remote (Europe)",
      region: "Europe",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      postedDate: "2 days ago",
      rating: 4.9,
      benefits: ["Flexible schedule", "Learning budget", "Team retreats"],
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
      description:
        "Create user-centered designs for web and mobile applications. You'll conduct user research, create wireframes and prototypes, and collaborate with developers to implement your designs. The ideal candidate has a strong portfolio demonstrating exceptional design thinking.",
    },
    {
      id: "4",
      title: "DevOps Specialist",
      company: "Cloud Solutions Ltd.",
      location: "Remote (Worldwide)",
      region: "Worldwide",
      type: "Contract",
      salary: "$100,000 - $130,000",
      postedDate: "5 days ago",
      rating: 4.6,
      benefits: ["Flexible hours", "Project bonuses", "Equipment allowance"],
      skills: ["Kubernetes", "Docker", "CI/CD", "AWS"],
      description:
        "Implement and maintain CI/CD pipelines and cloud infrastructure. You'll be responsible for automating deployment processes, monitoring system performance, and ensuring high availability. Experience with Kubernetes, Docker, and cloud platforms is essential.",
    },
    {
      id: "5",
      title: "Technical Writer",
      company: "Documentation Pro",
      location: "Remote (US/Canada)",
      region: "US Only",
      type: "Part-time",
      salary: "$60,000 - $80,000",
      postedDate: "1 week ago",
      rating: 4.5,
      benefits: [
        "Flexible schedule",
        "Pro writing tools",
        "Healthcare stipend",
      ],
      skills: ["Technical Writing", "Markdown", "Documentation", "Research"],
      description:
        "Create clear, concise documentation for technical products and services. You'll work with product teams to understand features, write user guides, API documentation, and help articles. Strong writing skills and the ability to explain complex concepts simply are essential.",
    },
    {
      id: "6",
      title: "HR Coordinator",
      company: "Remote HR Solutions",
      location: "Remote (Worldwide)",
      region: "Worldwide",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      postedDate: "3 days ago",
      rating: 4.7,
      benefits: [
        "Flexible hours",
        "Professional development",
        "Health insurance",
      ],
      skills: ["HR Administration", "Onboarding", "Benefits", "HRIS"],
      description:
        "Coordinate HR activities and support remote teams across multiple time zones. You'll manage employee onboarding, maintain HR records, assist with benefits administration, and support company culture initiatives. Experience with HRIS systems and excellent communication skills are required.",
    },
    {
      id: "7",
      title: "Data Scientist",
      company: "Analytics Everywhere",
      location: "Remote (Asia/Pacific)",
      region: "Asia/Pacific",
      type: "Full-time",
      salary: "$95,000 - $125,000",
      postedDate: "4 days ago",
      rating: 4.8,
      benefits: ["Flexible hours", "Learning budget", "Health benefits"],
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      description:
        "Analyze complex datasets to extract insights and build predictive models. You'll work with cross-functional teams to solve business problems using data science techniques. Strong programming skills in Python and experience with machine learning libraries are required.",
    },
    {
      id: "8",
      title: "Content Marketing Manager",
      company: "Digital Reach Media",
      location: "Remote (Europe)",
      region: "Europe",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedDate: "2 days ago",
      rating: 4.6,
      benefits: [
        "Flexible schedule",
        "Marketing tools budget",
        "Team retreats",
      ],
      skills: ["Content Strategy", "SEO", "Analytics", "Social Media"],
      description:
        "Develop and execute content marketing strategies to drive engagement and conversions. You'll create editorial calendars, produce high-quality content, and analyze performance metrics. Experience with SEO, content management systems, and analytics tools is essential.",
    },
  ];

  // Filter jobs based on search term, region, and job type
  const filteredJobs = remoteJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = regionFilter === "all" || job.region === regionFilter;
    const matchesJobType =
      jobTypeFilter === "all" || job.type === jobTypeFilter;

    return matchesSearch && matchesRegion && matchesJobType;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Remote Jobs</h1>
          <p className="text-gray-600">Work from anywhere opportunities</p>
        </div>

        {/* Remote Work Benefits Banner */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold mb-2">Why Work Remotely?</h2>
                <p className="text-purple-100 mb-4">
                  Discover the benefits of remote work and find your perfect
                  role
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-purple-700 hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg">
                  <Home className="h-8 w-8 text-purple-200 mb-2" />
                  <span className="text-center">Work from anywhere</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg">
                  <Clock className="h-8 w-8 text-purple-200 mb-2" />
                  <span className="text-center">Flexible schedule</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg">
                  <LaptopIcon className="h-8 w-8 text-purple-200 mb-2" />
                  <span className="text-center">Digital nomad lifestyle</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Search remote jobs by title, company, or keywords"
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
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Remote Job Categories */}
        <Tabs
          defaultValue="all"
          className="mb-8"
          onValueChange={setRegionFilter}
        >
          <TabsList>
            <TabsTrigger value="all">All Remote Jobs</TabsTrigger>
            <TabsTrigger value="Worldwide">Worldwide</TabsTrigger>
            <TabsTrigger value="US Only">US Only</TabsTrigger>
            <TabsTrigger value="Europe">Europe</TabsTrigger>
            <TabsTrigger value="Asia/Pacific">Asia/Pacific</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Featured Remote Job */}
        <Card className="mb-8 border-l-4 border-blue-500">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                  <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                    <Globe size={12} />
                    Remote
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Senior Frontend Developer
                </h2>
                <div className="flex items-center text-gray-600 mb-3">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="mr-4">Remote Tech Co.</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Remote (Worldwide)</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-gray-500 ml-2">
                    $100,000 - $130,000
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Build responsive web applications using React and modern
                  JavaScript frameworks. You'll be responsible for implementing
                  user interfaces, optimizing performance, and collaborating
                  with backend developers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "Redux", "CSS"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Posted 3 days ago</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link to="/jobs/1">
                  <Button size="lg" className="w-full md:w-auto">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/jobs/1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <Badge className="md:ml-2 bg-green-100 text-green-800 flex items-center gap-1">
                            <Globe size={12} />
                            Remote
                          </Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>Posted {job.postedDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" />
                            <span>{job.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 line-clamp-2 text-sm mb-3">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 3 && (
                            <Badge variant="outline">
                              +{job.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                          {job.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <CheckCircle
                                size={12}
                                className="text-green-500"
                              />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/jobs/${job.id}`}>
                          <Button className="w-full md:w-auto">
                            Apply Now
                          </Button>
                        </Link>
                        <Link to={`/jobs/${job.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto flex items-center"
                          >
                            Details
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                No remote jobs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search term or check back later for new
                opportunities.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setRegionFilter("all");
                  setJobTypeFilter("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Remote Work Tips */}
        <Card className="mt-8 mb-8">
          <CardHeader>
            <CardTitle>Remote Work Tips</CardTitle>
            <CardDescription>
              Advice for succeeding in a remote work environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-500" />
                  Create a Dedicated Workspace
                </h3>
                <p className="text-sm text-gray-600">
                  Set up a comfortable, distraction-free area that's dedicated
                  to work only.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Establish a Routine
                </h3>
                <p className="text-sm text-gray-600">
                  Maintain regular working hours and take scheduled breaks to
                  stay productive.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-blue-500" />
                  Stay Connected
                </h3>
                <p className="text-sm text-gray-600">
                  Use communication tools to maintain regular contact with your
                  team.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
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
              <Button variant="outline">Next</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoteJobs;
