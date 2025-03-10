import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Checkbox } from "../../ui/checkbox";
import { Download, Eye, Filter, Search, UserPlus } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  status: "pending" | "reviewing" | "interviewed" | "hired" | "rejected";
  appliedDate: string;
  cvUrl: string;
}

const CandidatesSection = ({
  candidates = mockCandidates,
}: {
  candidates?: Candidate[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );

  // Filter candidates based on search term and status
  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewing":
        return "bg-blue-100 text-blue-800";
      case "interviewed":
        return "bg-purple-100 text-purple-800";
      case "hired":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const AllCandidatesView = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Candidates Management</h1>
        <Button className="flex items-center gap-2">
          <UserPlus size={16} />
          Add Candidate
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Filters and Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Search candidates..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2 items-center">
                <Filter size={18} className="text-gray-500" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewing">Reviewing</SelectItem>
                    <SelectItem value="interviewed">Interviewed</SelectItem>
                    <SelectItem value="hired">Hired</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Candidates Table */}
        <Card>
          <CardHeader>
            <CardTitle>Candidates ({filteredCandidates.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox id="select-all" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.length > 0 ? (
                    filteredCandidates.map((candidate) => (
                      <TableRow key={candidate.id}>
                        <TableCell>
                          <Checkbox id={`select-${candidate.id}`} />
                        </TableCell>
                        <TableCell className="font-medium">
                          {candidate.name}
                        </TableCell>
                        <TableCell>{candidate.position}</TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusColor(candidate.status)}
                            variant="outline"
                          >
                            {candidate.status.charAt(0).toUpperCase() +
                              candidate.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{candidate.appliedDate}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() =>
                                    setSelectedCandidate(candidate)
                                  }
                                >
                                  <Eye size={16} />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>Candidate Details</DialogTitle>
                                </DialogHeader>
                                {selectedCandidate && (
                                  <CandidateDetails
                                    candidate={selectedCandidate}
                                  />
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="icon">
                              <Download size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-6 text-gray-500"
                      >
                        No candidates found matching your criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const NewApplicationsView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">New Applications</h1>
      <Card>
        <CardContent className="p-6">
          <p>New applications content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );

  const ShortlistedView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shortlisted Candidates</h1>
      <Card>
        <CardContent className="p-6">
          <p>Shortlisted candidates content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );

  const InterviewsView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Interviews</h1>
      <Card>
        <CardContent className="p-6">
          <p>Interviews content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-6 bg-white w-full h-full">
      <Routes>
        <Route path="/" element={<AllCandidatesView />} />
        <Route path="/new" element={<NewApplicationsView />} />
        <Route path="/shortlisted" element={<ShortlistedView />} />
        <Route path="/interviews" element={<InterviewsView />} />
      </Routes>
    </div>
  );
};

const CandidateDetails = ({ candidate }: { candidate: Candidate }) => {
  return (
    <div className="mt-4">
      <Tabs defaultValue="info">
        <TabsList className="mb-4">
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p>{candidate.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p>{candidate.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p>{candidate.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Applied For</h3>
              <p>{candidate.position}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="application" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Application Status
              </h3>
              <Badge
                className={`mt-1 ${getStatusColor(candidate.status)}`}
                variant="outline"
              >
                {candidate.status.charAt(0).toUpperCase() +
                  candidate.status.slice(1)}
              </Badge>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Applied Date
              </h3>
              <p>{candidate.appliedDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Resume/CV</h3>
              <Button
                variant="outline"
                size="sm"
                className="mt-1 flex items-center gap-2"
              >
                <Download size={14} />
                Download CV
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <p className="text-gray-500 italic">
            No notes have been added for this candidate.
          </p>
        </TabsContent>
      </Tabs>

      <DialogFooter className="mt-6">
        <div className="flex gap-2 w-full justify-between">
          <div>
            <Select defaultValue={candidate.status}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Update Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="interviewed">Interviewed</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </DialogFooter>
    </div>
  );
};

// Mock data for candidates
const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    position: "Frontend Developer",
    status: "reviewing",
    appliedDate: "2023-06-15",
    cvUrl: "/path/to/cv.pdf",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 987-6543",
    position: "UX Designer",
    status: "interviewed",
    appliedDate: "2023-06-10",
    cvUrl: "/path/to/cv.pdf",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 456-7890",
    position: "Backend Developer",
    status: "pending",
    appliedDate: "2023-06-18",
    cvUrl: "/path/to/cv.pdf",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "(555) 234-5678",
    position: "Product Manager",
    status: "hired",
    appliedDate: "2023-05-28",
    cvUrl: "/path/to/cv.pdf",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "(555) 876-5432",
    position: "DevOps Engineer",
    status: "rejected",
    appliedDate: "2023-06-05",
    cvUrl: "/path/to/cv.pdf",
  },
  {
    id: "6",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "(555) 345-6789",
    position: "Frontend Developer",
    status: "reviewing",
    appliedDate: "2023-06-12",
    cvUrl: "/path/to/cv.pdf",
  },
];

export default CandidatesSection;
