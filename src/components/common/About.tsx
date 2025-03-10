import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  BookOpen,
  Star,
  Heart,
  Briefcase,
  Clock,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our HR Portal
            </h1>
            <p className="text-xl mb-8">
              Connecting talented professionals with exceptional career
              opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-xl text-gray-600">
              We're on a mission to transform the way companies hire talent and
              how professionals find their dream jobs. Our HR Portal provides a
              comprehensive platform that streamlines the recruitment process,
              making it more efficient, transparent, and effective for both
              employers and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">For Candidates</h3>
              <p className="text-gray-600">
                Access to quality job opportunities and tools to showcase your
                skills and experience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">For Employers</h3>
              <p className="text-gray-600">
                Powerful recruitment tools to find, evaluate, and hire the best
                talent for your organization.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connecting talent and opportunities across borders and
                industries worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Founded in 2018, our HR Portal began with a simple idea: to
                create a more human-centered approach to recruitment. We
                recognized that traditional hiring processes were often
                inefficient, opaque, and frustrating for both employers and job
                seekers.
              </p>
              <p className="mb-4">
                Our team of HR professionals, technologists, and design thinkers
                came together to build a platform that addresses these
                challenges. We've combined cutting-edge technology with deep
                industry expertise to create a solution that transforms how
                organizations find talent and how people find jobs.
              </p>
              <p>
                Today, our platform serves thousands of companies and job
                seekers worldwide, facilitating meaningful connections that
                drive careers and business growth. We continue to innovate and
                expand our offerings, always guided by our core mission of
                making recruitment more efficient, transparent, and human.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-gray-600">
                      We believe in open, honest communication throughout the
                      recruitment process, providing clarity for both employers
                      and candidates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                    <p className="text-gray-600">
                      We're committed to creating a platform that promotes
                      diversity and provides equal opportunities for all
                      candidates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-gray-600">
                      We strive for excellence in everything we do, continuously
                      improving our platform to deliver the best possible
                      experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We embrace new ideas and technologies to solve complex
                      recruitment challenges and create better outcomes for our
                      users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the people driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                alt="CEO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-3">Chief Executive Officer</p>
                <p className="text-gray-600">
                  Former HR executive with 15+ years of experience in talent
                  acquisition and workforce management. Led HR transformation at
                  Fortune 500 companies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                alt="CTO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Tech innovator with a background in building scalable
                  platforms and AI-driven solutions. Previously led engineering
                  teams at top tech companies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80"
                alt="COO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Rodriguez</h3>
                <p className="text-blue-600 mb-3">Chief Operating Officer</p>
                <p className="text-gray-600">
                  Operations expert specializing in scaling businesses and
                  optimizing organizational processes. MBA from Harvard Business
                  School.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from companies and candidates who have found success with our
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex mb-4">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "The HR Portal has transformed our recruitment process.
                    We've reduced our time-to-hire by 40% and improved the
                    quality of our candidates significantly."
                  </p>
                  <div>
                    <h4 className="font-semibold">Jennifer Williams</h4>
                    <p className="text-sm text-gray-500">
                      HR Director, Global Tech Solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex mb-4">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "As a job seeker, I found the platform incredibly intuitive.
                    The application process was smooth, and I received updates
                    at every stage. I landed my dream job within weeks!"
                  </p>
                  <div>
                    <h4 className="font-semibold">Marcus Thompson</h4>
                    <p className="text-sm text-gray-500">
                      Software Engineer, hired through HR Portal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Whether you're looking for your next career opportunity or seeking
            top talent for your organization, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create an Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-gray-800"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
