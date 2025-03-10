import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Upload,
  File,
  X,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  type: z.string().min(1, { message: "Please select a declaration type." }),
  status: z.string().min(1, { message: "Please select a status." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters." }),
  effectiveDate: z
    .string()
    .min(1, { message: "Please select an effective date." }),
  expirationDate: z.string().optional(),
  departments: z
    .array(z.string())
    .min(1, { message: "Please select at least one department." }),
  requiresAcknowledgement: z.boolean().default(false),
  isPublic: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

const DeclarationCreate = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "",
      status: "draft",
      description: "",
      content: "",
      effectiveDate: "",
      expirationDate: "",
      departments: [],
      requiresAcknowledgement: false,
      isPublic: true,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleDepartmentChange = (department: string) => {
    const updatedDepartments = selectedDepartments.includes(department)
      ? selectedDepartments.filter((dep) => dep !== department)
      : [...selectedDepartments, department];

    setSelectedDepartments(updatedDepartments);
    setValue("departments", updatedDepartments);
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      console.log("Uploaded files:", uploadedFiles);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <CardTitle className="text-2xl mb-2">
              Declaration Created Successfully!
            </CardTitle>
            <CardDescription className="text-lg mb-6">
              Your declaration has been created and saved as a draft. You can
              now publish it or make further edits.
            </CardDescription>
            <div className="flex gap-4">
              <Link to="/dashboard/declaration">
                <Button variant="outline">View All Declarations</Button>
              </Link>
              <Button>Publish Declaration</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/dashboard/declaration"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Declarations
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Declaration</h1>
        <p className="text-gray-500">
          Create a new company declaration, policy, or announcement
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="content">Content & Details</TabsTrigger>
            <TabsTrigger value="settings">Settings & Attachments</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details for this declaration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Declaration Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Employee Code of Conduct"
                    {...register("title")}
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="type">Declaration Type *</Label>
                    <Select onValueChange={(value) => setValue("type", value)}>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="policy">Policy</SelectItem>
                        <SelectItem value="procedure">Procedure</SelectItem>
                        <SelectItem value="guideline">Guideline</SelectItem>
                        <SelectItem value="announcement">
                          Announcement
                        </SelectItem>
                        <SelectItem value="legal">Legal Document</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.type && (
                      <p className="text-sm text-red-500">
                        {errors.type.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select
                      defaultValue="draft"
                      onValueChange={(value) => setValue("status", value)}
                    >
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.status && (
                      <p className="text-sm text-red-500">
                        {errors.status.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Brief Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a brief description of this declaration"
                    rows={3}
                    {...register("description")}
                    className={errors.description ? "border-red-500" : ""}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="effectiveDate">Effective Date *</Label>
                    <Input
                      id="effectiveDate"
                      type="date"
                      {...register("effectiveDate")}
                      className={errors.effectiveDate ? "border-red-500" : ""}
                    />
                    {errors.effectiveDate && (
                      <p className="text-sm text-red-500">
                        {errors.effectiveDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expirationDate">
                      Expiration Date (Optional)
                    </Label>
                    <Input
                      id="expirationDate"
                      type="date"
                      {...register("expirationDate")}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button">
                  Save as Draft
                </Button>
                <Button type="button" onClick={() => setActiveTab("content")}>
                  Next: Content & Details
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content & Details</CardTitle>
                <CardDescription>
                  Enter the full content and details of the declaration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="content">Declaration Content *</Label>
                  <Textarea
                    id="content"
                    placeholder="Enter the full content of the declaration..."
                    rows={12}
                    {...register("content")}
                    className={errors.content ? "border-red-500" : ""}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-500">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Applicable Departments *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {[
                      "Human Resources",
                      "Finance",
                      "Operations",
                      "Marketing",
                      "Sales",
                      "IT",
                      "Legal",
                      "Customer Service",
                      "All Departments",
                    ].map((department) => (
                      <div
                        key={department}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id={`department-${department}`}
                          checked={selectedDepartments.includes(department)}
                          onChange={() => handleDepartmentChange(department)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label
                          htmlFor={`department-${department}`}
                          className="text-sm"
                        >
                          {department}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.departments && (
                    <p className="text-sm text-red-500">
                      {errors.departments.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setActiveTab("basic")}
                >
                  Back
                </Button>
                <Button type="button" onClick={() => setActiveTab("settings")}>
                  Next: Settings & Attachments
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings & Attachments</CardTitle>
                <CardDescription>
                  Configure additional settings and add attachments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="requiresAcknowledgement">
                        Require Acknowledgement
                      </Label>
                      <p className="text-sm text-gray-500">
                        Employees will be required to acknowledge they have read
                        this declaration
                      </p>
                    </div>
                    <Switch
                      id="requiresAcknowledgement"
                      checked={watch("requiresAcknowledgement")}
                      onCheckedChange={(checked) =>
                        setValue("requiresAcknowledgement", checked)
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="isPublic">Public Visibility</Label>
                      <p className="text-sm text-gray-500">
                        Make this declaration visible to all employees
                      </p>
                    </div>
                    <Switch
                      id="isPublic"
                      checked={watch("isPublic")}
                      onCheckedChange={(checked) =>
                        setValue("isPublic", checked)
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Attachments</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOCX, XLSX (MAX. 10MB)
                          </p>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <Label>Uploaded Files</Label>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border rounded-md bg-gray-50"
                          >
                            <div className="flex items-center">
                              <File className="h-5 w-5 text-gray-400 mr-2" />
                              <span className="text-sm truncate max-w-xs">
                                {file.name}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Please review all information before submitting. Once
                    published, this declaration will be visible to all selected
                    departments.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setActiveTab("content")}
                >
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating..." : "Create Declaration"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
};

export default DeclarationCreate;
