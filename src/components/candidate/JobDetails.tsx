import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  Briefcase,
  Users,
  Building,
  ChevronLeft,
} from "lucide-react";

interface JobDetailsProps {
  id?: string;
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  jobType?: string;
  department?: string;
  postedDate?: string;
  applicationDeadline?: string;
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  companyDescription?: string;
  onBack?: () => void;
  onApply?: () => void;
}

const JobDetails = ({
  id = "JD-1234",
  title = "Senior Frontend Developer",
  company = "TechCorp Solutions",
  location = "San Francisco, CA (Remote Option)",
  salary = "$120,000 - $150,000",
  jobType = "Full-time",
  department = "Engineering",
  postedDate = "June 15, 2023",
  applicationDeadline = "July 30, 2023",
  description = "We are looking for an experienced Frontend Developer to join our growing team. The ideal candidate will have strong experience with React, TypeScript, and modern frontend frameworks.",
  requirements = [
    "5+ years of experience in frontend development",
    "Strong proficiency in React, TypeScript, and state management libraries",
    "Experience with responsive design and cross-browser compatibility",
    "Knowledge of modern frontend build tools and workflows",
    "Bachelor's degree in Computer Science or related field",
  ],
  responsibilities = [
    "Develop and maintain responsive web applications",
    "Collaborate with designers and backend developers",
    "Optimize applications for maximum speed and scalability",
    "Implement and maintain quality assurance processes",
    "Stay up-to-date with emerging trends and technologies",
  ],
  benefits = [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "Flexible work hours and remote options",
    "Professional development budget",
    "Generous paid time off policy",
  ],
  companyDescription = "TechCorp Solutions is a leading technology company specializing in cloud-based enterprise solutions. With offices worldwide, we serve clients across various industries, providing innovative software solutions that drive business growth.",
  onBack = () => {},
  onApply = () => {},
}: JobDetailsProps) => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to listings
          </Button>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <Building className="h-4 w-4 mr-1" />
                <span className="mr-4">{company}</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-sm"
            >
              <DollarSign className="h-3.5 w-3.5" />
              {salary}
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-sm"
            >
              <Briefcase className="h-3.5 w-3.5" />
              {jobType}
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-sm"
            >
              <Users className="h-3.5 w-3.5" />
              {department}
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-sm"
            >
              <Calendar className="h-3.5 w-3.5" />
              Posted: {postedDate}
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-sm"
            >
              <Clock className="h-3.5 w-3.5" />
              Deadline: {applicationDeadline}
            </Badge>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About {company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{companyDescription}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => (window.location.href = "/contact")}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
