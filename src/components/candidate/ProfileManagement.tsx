import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { AlertCircle, Save, Upload, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  bio: z
    .string()
    .max(500, { message: "Bio must not exceed 500 characters." })
    .optional(),
  location: z.string().optional(),
  jobTitle: z.string().optional(),
  skills: z.string().optional(),
  education: z.string().optional(),
  experience: z.string().optional(),
  notificationsEmail: z.boolean().default(true),
  notificationsJobAlerts: z.boolean().default(true),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileManagementProps {
  userData?: ProfileFormValues;
}

const ProfileManagement = ({
  userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Experienced software developer with a passion for creating user-friendly applications.",
    location: "San Francisco, CA",
    jobTitle: "Senior Software Engineer",
    skills: "JavaScript, React, Node.js, TypeScript, SQL",
    education: "BS Computer Science, Stanford University",
    experience: "5+ years in software development",
    notificationsEmail: true,
    notificationsJobAlerts: true,
  },
}: ProfileManagementProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: userData,
  });

  const onSubmit = (data: ProfileFormValues) => {
    // In a real application, this would send the data to an API
    console.log("Form submitted:", data);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
              alt="Profile"
            />
            <AvatarFallback>
              <User className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-500">{userData.jobTitle}</p>
          </div>
        </div>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "destructive" : "default"}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      <Tabs
        defaultValue="profile"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="resume">Resume & Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and how recruiters can contact you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      disabled={!isEditing}
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      disabled={!isEditing}
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      disabled={!isEditing}
                      {...form.register("phone")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      disabled={!isEditing}
                      {...form.register("location")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Current Job Title</Label>
                    <Input
                      id="jobTitle"
                      disabled={!isEditing}
                      {...form.register("jobTitle")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Input
                      id="skills"
                      disabled={!isEditing}
                      placeholder="e.g. JavaScript, React, Node.js"
                      {...form.register("skills")}
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      disabled={!isEditing}
                      className="min-h-[120px]"
                      {...form.register("bio")}
                    />
                    {form.formState.errors.bio && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.bio.message}
                      </p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Education & Experience</CardTitle>
              <CardDescription>
                Share your educational background and work experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Textarea
                    id="education"
                    disabled={!isEditing}
                    className="min-h-[100px]"
                    placeholder="e.g. BS Computer Science, Stanford University"
                    {...form.register("education")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Work Experience</Label>
                  <Textarea
                    id="experience"
                    disabled={!isEditing}
                    className="min-h-[100px]"
                    placeholder="e.g. 5+ years in software development"
                    {...form.register("experience")}
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications and job alerts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications-email">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications about your applications via email
                  </p>
                </div>
                <Switch
                  id="notifications-email"
                  disabled={!isEditing}
                  checked={form.watch("notificationsEmail")}
                  onCheckedChange={(checked) =>
                    form.setValue("notificationsEmail", checked)
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications-job-alerts">Job Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Receive alerts about new job postings that match your
                    profile
                  </p>
                </div>
                <Switch
                  id="notifications-job-alerts"
                  disabled={!isEditing}
                  checked={form.watch("notificationsJobAlerts")}
                  onCheckedChange={(checked) =>
                    form.setValue("notificationsJobAlerts", checked)
                  }
                />
              </div>

              {isEditing && (
                <div className="flex justify-end pt-4">
                  <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resume">
          <Card>
            <CardHeader>
              <CardTitle>Resume & Documents</CardTitle>
              <CardDescription>
                Upload and manage your resume and other important documents.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Keep your resume up to date to improve your chances of getting
                  noticed by employers.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Resume</h3>
                      <p className="text-sm text-gray-500">
                        JohnDoe_Resume.pdf
                      </p>
                      <p className="text-xs text-gray-400">
                        Uploaded on May 15, 2023
                      </p>
                    </div>
                    {isEditing ? (
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Update
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    )}
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Cover Letter Template</h3>
                      <p className="text-sm text-gray-500">
                        JohnDoe_CoverLetter.docx
                      </p>
                      <p className="text-xs text-gray-400">
                        Uploaded on June 2, 2023
                      </p>
                    </div>
                    {isEditing ? (
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Update
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-center p-8 border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium">
                        Upload a new document
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        PDF, DOCX, or TXT up to 5MB
                      </p>
                      <Button variant="outline" className="mt-4" size="sm">
                        Select File
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileManagement;
