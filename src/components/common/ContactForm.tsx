import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Upload,
  FileText,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  candidatePosition: z
    .string()
    .min(1, { message: "Please enter the position you're applying for." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      candidatePosition: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      console.log("CV file:", cvFile);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setCvFile(null);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Apply for a position or send us your questions. We'd love to hear
              from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {isSubmitted ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <CardTitle className="text-2xl mb-2">
                      Application Submitted!
                    </CardTitle>
                    <CardDescription className="text-lg mb-6">
                      Thank you for your application. We'll review your CV and
                      get back to you if your profile matches our requirements.
                    </CardDescription>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Submit Another Application
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Apply for a position</CardTitle>
                    <CardDescription>
                      Fill out the form below and upload your CV to apply for a
                      position.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            {...register("phone")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="candidatePosition">
                            Candidate Position *
                          </Label>
                          <Input
                            id="candidatePosition"
                            placeholder="Position you're applying for"
                            {...register("candidatePosition")}
                            className={
                              errors.candidatePosition ? "border-red-500" : ""
                            }
                          />
                          {errors.candidatePosition && (
                            <p className="text-sm text-red-500">
                              {errors.candidatePosition.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cv-upload">CV/Resume *</Label>
                        <div className="flex items-center gap-4">
                          <label
                            htmlFor="cv-upload"
                            className="flex items-center gap-2 px-4 py-2 border border-input rounded-md bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer"
                          >
                            <Upload className="h-4 w-4" />
                            <span>Upload CV</span>
                            <input
                              id="cv-upload"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={handleFileChange}
                              required
                            />
                          </label>
                          {cvFile && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <FileText className="h-4 w-4" />
                              <span>{cvFile.name}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Accepted formats: PDF, DOC, DOCX. Max size: 5MB
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting || !cvFile}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">support@hrportal.com</p>
                      <p className="text-gray-600">info@hrportal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-gray-600">
                        123 Business Avenue
                        <br />
                        Suite 400
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">
                      How quickly will I receive a response to my application?
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      We typically review all applications within 1-2 weeks and
                      will contact you if your profile matches our requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      What happens after I submit my application?
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Our HR team will review your application and contact you
                      for an interview if your qualifications match our
                      requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Can I apply for multiple positions?
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Yes, you can submit separate applications for different
                      positions that match your qualifications and career goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
