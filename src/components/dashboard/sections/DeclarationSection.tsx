import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  PlusCircle,
  Search,
  FileEdit,
  Trash2,
  Download,
  Filter,
  ArrowUpDown,
} from "lucide-react";

interface Declaration {
  id: string;
  title: string;
  type: string;
  status: "active" | "draft" | "archived";
  createdAt: string;
  updatedAt: string;
  description: string;
}

const DeclarationSection = ({
  declarations = mockDeclarations,
}: {
  declarations?: Declaration[];
}) => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeclaration, setSelectedDeclaration] =
    useState<Declaration | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredDeclarations = declarations.filter((declaration) => {
    // Filter by search query
    const matchesSearch =
      declaration.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      declaration.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by tab
    const matchesTab = activeTab === "all" || declaration.status === activeTab;

    return matchesSearch && matchesTab;
  });

  const handleEdit = (declaration: Declaration) => {
    setSelectedDeclaration(declaration);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (declaration: Declaration) => {
    setSelectedDeclaration(declaration);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="w-full h-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Declarations Management</h1>
          <p className="text-gray-500">
            Create and manage company declarations
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Declaration
        </Button>
      </div>

      <div className="mb-6">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Declarations</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <CardTitle>Declarations</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search declarations..."
                  className="pl-8 w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <div className="flex items-center">
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Created
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeclarations.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-gray-500"
                  >
                    No declarations found. Create your first declaration.
                  </TableCell>
                </TableRow>
              ) : (
                filteredDeclarations.map((declaration) => (
                  <TableRow key={declaration.id}>
                    <TableCell className="font-medium">
                      {declaration.title}
                    </TableCell>
                    <TableCell>{declaration.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          declaration.status === "active"
                            ? "default"
                            : declaration.status === "draft"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {declaration.status.charAt(0).toUpperCase() +
                          declaration.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(declaration.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(declaration.updatedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(declaration)}
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(declaration)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Declaration Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Declaration</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new company declaration.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Declaration title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="policy">Policy</SelectItem>
                  <SelectItem value="procedure">Procedure</SelectItem>
                  <SelectItem value="guideline">Guideline</SelectItem>
                  <SelectItem value="announcement">Announcement</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of this declaration"
                className="col-span-3"
                rows={5}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Declaration</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Declaration Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Declaration</DialogTitle>
            <DialogDescription>
              Update the details of this declaration.
            </DialogDescription>
          </DialogHeader>
          {selectedDeclaration && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">
                  Title
                </Label>
                <Input
                  id="edit-title"
                  defaultValue={selectedDeclaration.title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-type" className="text-right">
                  Type
                </Label>
                <Select defaultValue={selectedDeclaration.type}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="policy">Policy</SelectItem>
                    <SelectItem value="procedure">Procedure</SelectItem>
                    <SelectItem value="guideline">Guideline</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={selectedDeclaration.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedDeclaration.description}
                  className="col-span-3"
                  rows={5}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this declaration? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedDeclaration && (
            <div className="py-4">
              <p className="font-medium">{selectedDeclaration.title}</p>
              <p className="text-sm text-gray-500 mt-1">
                {selectedDeclaration.type}
              </p>
              <Separator className="my-4" />
              <p className="text-sm">
                {selectedDeclaration.description.substring(0, 100)}...
              </p>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive">Delete Declaration</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Mock data for declarations
const mockDeclarations: Declaration[] = [
  {
    id: "1",
    title: "Employee Code of Conduct",
    type: "Policy",
    status: "active",
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2023-06-20T14:45:00Z",
    description:
      "This policy outlines the expected behavior and ethical standards for all employees within the organization.",
  },
  {
    id: "2",
    title: "Remote Work Guidelines",
    type: "Guideline",
    status: "active",
    createdAt: "2023-07-10T09:15:00Z",
    updatedAt: "2023-07-10T09:15:00Z",
    description:
      "Guidelines for employees working remotely, including communication protocols and productivity expectations.",
  },
  {
    id: "3",
    title: "Annual Leave Policy Update",
    type: "Policy",
    status: "draft",
    createdAt: "2023-08-05T11:20:00Z",
    updatedAt: "2023-08-07T16:30:00Z",
    description:
      "Updated policy regarding annual leave allocation, accrual, and request procedures for the upcoming fiscal year.",
  },
  {
    id: "4",
    title: "Office Closure - Holiday Season",
    type: "Announcement",
    status: "archived",
    createdAt: "2022-12-01T08:00:00Z",
    updatedAt: "2022-12-15T10:10:00Z",
    description:
      "Announcement regarding office closure during the holiday season, including important dates and emergency contact information.",
  },
  {
    id: "5",
    title: "Health and Safety Procedures",
    type: "Procedure",
    status: "active",
    createdAt: "2023-03-20T13:45:00Z",
    updatedAt: "2023-04-10T09:30:00Z",
    description:
      "Detailed procedures for maintaining health and safety standards in the workplace, including emergency protocols.",
  },
];

export default DeclarationSection;
