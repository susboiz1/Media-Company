import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  FileText,
  Search,
  Building,
  MapPin,
  Clock,
  CheckCircle,
  Award,
} from "lucide-react";
import { Badge } from "../components/ui/badge";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Career Opportunity
            </h1>
            <p className="text-xl mb-8">
              Connect with top employers and discover your next professional
              challenge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our HR Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A comprehensive solution for HR personnel and job candidates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Job Listings</h2>
              <p className="text-gray-600 mb-4">
                Browse and apply for available positions across various
                departments
              </p>
              <Link to="/jobs" className="mt-auto">
                <Button>View Jobs</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Candidate Portal</h2>
              <p className="text-gray-600 mb-4">
                Manage your profile, applications, and track your application
                status
              </p>
              <Link to="/candidate" className="mt-auto">
                <Button>Candidate Area</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">HR Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Access recruitment tools, manage declarations, and view
                analytics
              </p>
              <Link to="/dashboard" className="mt-auto">
                <Button>HR Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Trusted by Companies and Candidates
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
              <p className="text-gray-600">Registered Candidates</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">250+</p>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Featured Jobs Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Job Opportunities
            </h2>
            <Link to="/jobs">
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Job 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">Senior HR Manager</h3>
                <Badge className="bg-blue-100 text-blue-800">Full-time</Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <Building className="h-4 w-4 mr-2" />
                <span className="mr-4">TechCorp International</span>
                <MapPin className="h-4 w-4 mr-2" />
                <span>New York, NY</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                We are looking for an experienced HR Manager to join our growing
                team...
              </p>
              <Link to="/jobs/1">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>

            {/* Featured Job 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  Recruitment Specialist
                </h3>
                <Badge className="bg-blue-100 text-blue-800">Full-time</Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <Building className="h-4 w-4 mr-2" />
                <span className="mr-4">Global Solutions Inc.</span>
                <MapPin className="h-4 w-4 mr-2" />
                <span>Remote</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Join our talent acquisition team to help find and recruit top
                talent...
              </p>
              <Link to="/jobs/2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to find your next career opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 relative">
                <Search className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Search Jobs</h3>
              <p className="text-gray-600">
                Browse through our extensive job listings
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 relative">
                <FileText className="h-8 w-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Apply</h3>
              <p className="text-gray-600">
                Submit your application with your profile and resume
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 relative">
                <Clock className="h-8 w-8 text-green-600" />
                <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Interview</h3>
              <p className="text-gray-600">
                Connect with employers for interviews
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4 relative">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
                <div className="absolute -top-2 -right-2 bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Hired</h3>
              <p className="text-gray-600">
                Receive job offers and start your new career
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Create an account today and start your journey to finding the
            perfect job match
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-gray-800"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
