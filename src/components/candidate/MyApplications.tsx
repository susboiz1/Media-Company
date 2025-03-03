import React, { useState } from "react";
import { Eye, Download, Filter, Search } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: Date;
  status: "pending" | "reviewing" | "interview" | "rejected" | "accepted";
  jobDescription: string;
}

interface MyApplicationsProps {
  applications?: Application[];
}

const statusColors = {
  pending: "secondary",
  reviewing: "secondary",
  interview: "default",
  rejected: "destructive",
  accepted: "default",
} as const;

const defaultApplications: Application[] = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    company: "TechCorp Inc.",
    appliedDate: new Date(2023, 5, 15),
    status: "interview",
    jobDescription:
      "Develop and maintain frontend applications using React and TypeScript.",
  },
  {
    id: "2",
    jobTitle: "UX Designer",
    company: "Design Solutions",
    appliedDate: new Date(2023, 5, 10),
    status: "reviewing",
    jobDescription:
      "Create user-centered designs and prototypes for web and mobile applications.",
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    company: "Innovate Systems",
    appliedDate: new Date(2023, 4, 28),
    status: "rejected",
    jobDescription:
      "Work on both frontend and backend development using modern JavaScript frameworks.",
  },
  {
    id: "4",
    jobTitle: "Product Manager",
    company: "ProductFirst",
    appliedDate: new Date(2023, 5, 5),
    status: "pending",
    jobDescription:
      "Lead product development initiatives and coordinate with cross-functional teams.",
  },
  {
    id: "5",
    jobTitle: "DevOps Engineer",
    company: "CloudTech Solutions",
    appliedDate: new Date(2023, 5, 1),
    status: "accepted",
    jobDescription:
      "Implement and maintain CI/CD pipelines and cloud infrastructure.",
  },
];

const MyApplications: React.FC<MyApplicationsProps> = ({
  applications = defaultApplications,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const filteredApplications = applications.filter(
    (app) =>
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full h-full bg-background p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-8 h-9 w-[250px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Application History</CardTitle>
            <CardDescription>
              Track the status of your job applications and manage your career
              opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                A list of your recent job applications
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">
                        {application.jobTitle}
                      </TableCell>
                      <TableCell>{application.company}</TableCell>
                      <TableCell>
                        {format(application.appliedDate, "MMM dd, yyyy")}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            statusColors[application.status] as
                              | "default"
                              | "secondary"
                              | "destructive"
                              | "outline"
                          }
                        >
                          {application.status.charAt(0).toUpperCase() +
                            application.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedApplication(application)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-6 text-muted-foreground"
                    >
                      No applications found. Start applying for jobs to see them
                      here.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {selectedApplication && (
          <Card>
            <CardHeader>
              <CardTitle>{selectedApplication.jobTitle}</CardTitle>
              <CardDescription>{selectedApplication.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Application Status</h3>
                  <Badge
                    className="mt-1"
                    variant={
                      statusColors[selectedApplication.status] as
                        | "default"
                        | "secondary"
                        | "destructive"
                        | "outline"
                    }
                  >
                    {selectedApplication.status.charAt(0).toUpperCase() +
                      selectedApplication.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Applied On</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(selectedApplication.appliedDate, "MMMM dd, yyyy")}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Job Description</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedApplication.jobDescription}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setSelectedApplication(null)}
              >
                Close
              </Button>
              <Button>Contact Recruiter</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
