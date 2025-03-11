import React, { useState } from "react";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
}

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([
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
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newJob, setNewJob] = useState<Omit<Job, "id" | "postedDate">>({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setNewJob({ ...newJob, [name]: value });
  };

  const handleAddJob = () => {
    const newJobWithId: Job = {
      ...newJob,
      id: (jobs.length + 1).toString(),
      postedDate: "Just now",
    };

    setJobs([...jobs, newJobWithId]);
    setIsDialogOpen(false);
    setNewJob({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Current Job Openings
          </h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                Add New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Job</DialogTitle>
                <DialogDescription>
                  Fill in the details to add a new job listing.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Job Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Frontend Developer"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={newJob.company}
                    onChange={handleInputChange}
                    placeholder="e.g. TechCorp Solutions"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    placeholder="e.g. San Francisco, CA"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Job Type
                  </Label>
                  <Select
                    value={newJob.type}
                    onValueChange={(value) => handleSelectChange("type", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="salary" className="text-right">
                    Salary Range
                  </Label>
                  <Input
                    id="salary"
                    name="salary"
                    value={newJob.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. $100,000 - $130,000"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newJob.description}
                    onChange={handleInputChange}
                    placeholder="Job description..."
                    className="col-span-3"
                    rows={5}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddJob}>
                  Add Job
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
              <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
                salary={job.salary}
                postedDate={job.postedDate}
                description={job.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
