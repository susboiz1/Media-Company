import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Link } from "react-router-dom";
import {
  Building,
  MapPin,
  Clock,
  ChevronRight,
  Search,
  Filter,
  Star,
  DollarSign,
  Briefcase,
} from "lucide-react";

const FeaturedPositions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");

  const featuredJobs = [
    {
      id: "1",
      title: "Senior Product Manager",
      company: "TechCorp International",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      postedDate: "2 days ago",
      featured: true,
      industry: "Technology",
      rating: 4.8,
      description:
        "Lead product development initiatives for our enterprise SaaS platform. You'll work with cross-functional teams to define product vision, create roadmaps, and deliver exceptional user experiences. The ideal candidate has a proven track record of successful product launches and excellent stakeholder management skills.",
    },
    {
      id: "2",
      title: "UX/UI Design Lead",
      company: "Creative Solutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      postedDate: "3 days ago",
      featured: true,
      industry: "Design",
      rating: 4.7,
      description:
        "Direct the user experience strategy for our flagship mobile applications. You'll lead a team of designers, conduct user research, create wireframes, and collaborate with developers to implement intuitive interfaces. We're looking for someone with a strong portfolio demonstrating exceptional design thinking and problem-solving abilities.",
    },
    {
      id: "3",
      title: "DevOps Engineer",
      company: "Cloud Systems Ltd.",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "1 week ago",
      featured: true,
      industry: "Technology",
      rating: 4.5,
      description:
        "Implement and maintain CI/CD pipelines and cloud infrastructure. You'll be responsible for automating deployment processes, monitoring system performance, and ensuring high availability of our services. The ideal candidate has experience with AWS, Kubernetes, Docker, and modern DevOps tools.",
    },
    {
      id: "4",
      title: "Senior HR Business Partner",
      company: "Global Enterprises",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$95,000 - $120,000",
      postedDate: "5 days ago",
      featured: true,
      industry: "Human Resources",
      rating: 4.6,
      description:
        "Partner with executive leadership to develop and implement HR strategies aligned with business objectives. You'll provide guidance on organizational design, talent management, employee relations, and performance management. We're looking for someone with strong business acumen and excellent communication skills.",
    },
    {
      id: "5",
      title: "Marketing Director",
      company: "Brand Innovators",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      postedDate: "1 day ago",
      featured: true,
      industry: "Marketing",
      rating: 4.9,
      description:
        "Lead our marketing department in developing and executing comprehensive marketing strategies to increase brand awareness and drive customer acquisition. You'll oversee digital marketing, content creation, social media, and analytics teams. The ideal candidate has a proven track record of successful marketing campaigns and strong leadership skills.",
    },
    {
      id: "6",
      title: "Financial Analyst",
      company: "Investment Partners",
      location: "New York, NY",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      postedDate: "4 days ago",
      featured: true,
      industry: "Finance",
      rating: 4.4,
      description:
        "Conduct financial analysis, prepare reports, and develop financial models to support investment decisions. You'll work closely with the investment team to evaluate potential opportunities and monitor portfolio performance. We're looking for someone with strong analytical skills and attention to detail.",
    },
  ];

  // Filter jobs based on search term and industry filter
  const filteredJobs = featuredJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIndustry =
      industryFilter === "all" || job.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Positions
          </h1>
          <p className="text-gray-600">
            Highlighted opportunities from top companies
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
                placeholder="Search by title, company, or keywords"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Tabs defaultValue="all" onValueChange={setIndustryFilter}>
                <TabsList>
                  <TabsTrigger value="all">All Industries</TabsTrigger>
                  <TabsTrigger value="Technology">Technology</TabsTrigger>
                  <TabsTrigger value="Design">Design</TabsTrigger>
                  <TabsTrigger value="Human Resources">HR</TabsTrigger>
                  <TabsTrigger value="Marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="Finance">Finance</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Featured Jobs Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Top Opportunities</h2>
              <p className="text-blue-100 mb-4 md:mb-0">
                Handpicked positions with competitive salaries and excellent
                benefits
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center bg-white/10 p-3 rounded-lg">
                <Star className="h-6 w-6 text-yellow-300 mb-1" />
                <span className="text-sm">Top-rated companies</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-300 mb-1" />
                <span className="text-sm">Competitive pay</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-purple-300 mb-1" />
                <span className="text-sm">Career growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="p-6">
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
                    <span className="text-sm font-medium">{job.rating}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      {job.industry}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        Apply Now
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-2 bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or check back later for new
                opportunities.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setIndustryFilter("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/jobs">
            <Button>View All Job Listings</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPositions;
