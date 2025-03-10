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
  Star,
  Globe,
  Heart,
} from "lucide-react";
import { Badge } from "../components/ui/badge";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-500/30 px-4 py-1 rounded-full mb-4">
              <span className="text-blue-100 font-medium">
                HR Management Portal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Career Opportunity
            </h1>
            <p className="text-xl mb-8">
              Connect with top employers and discover your next professional
              challenge with our comprehensive HR platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 gap-2"
                >
                  <Search className="h-5 w-5" />
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 gap-2"
                >
                  <Users className="h-5 w-5" />
                  Create Account
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-1 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>500+ Jobs</span>
              </div>
              <div className="flex items-center gap-1 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>Top Companies</span>
              </div>
              <div className="flex items-center gap-1 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>Remote Options</span>
              </div>
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
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Job Listings</h2>
              <p className="text-gray-600 mb-4">
                Browse and apply for available positions across various
                departments with powerful search and filtering options
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge variant="outline">500+ Jobs</Badge>
                <Badge variant="outline">Remote Options</Badge>
                <Badge variant="outline">Quick Apply</Badge>
              </div>
              <Link to="/jobs" className="mt-auto w-full">
                <Button className="w-full">View Jobs</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-purple-500">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Candidate Portal</h2>
              <p className="text-gray-600 mb-4">
                Manage your profile, applications, and track your application
                status with real-time updates and notifications
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge variant="outline">Application Tracking</Badge>
                <Badge variant="outline">Profile Builder</Badge>
                <Badge variant="outline">Interview Scheduler</Badge>
              </div>
              <Link to="/candidate" className="mt-auto w-full">
                <Button className="w-full">Candidate Area</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-500">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">HR Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Access comprehensive recruitment tools, manage declarations, and
                view detailed analytics to optimize your hiring process
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge variant="outline">Analytics</Badge>
                <Badge variant="outline">Candidate Management</Badge>
                <Badge variant="outline">Declaration Tools</Badge>
              </div>
              <Link to="/dashboard" className="mt-auto w-full">
                <Button className="w-full">HR Dashboard</Button>
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
            <div className="p-4 hover:bg-blue-50 rounded-lg transition-colors duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div className="p-4 hover:bg-purple-50 rounded-lg transition-colors duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-4xl font-bold text-purple-600 mb-2">10k+</p>
              <p className="text-gray-600">Registered Candidates</p>
            </div>
            <div className="p-4 hover:bg-green-50 rounded-lg transition-colors duration-300">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-green-600 mb-2">250+</p>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="p-4 hover:bg-yellow-50 rounded-lg transition-colors duration-300">
              <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-4xl font-bold text-yellow-600 mb-2">95%</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Job 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
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
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-gray-500 ml-2">
                  $90,000 - $120,000
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                We are looking for an experienced HR Manager to join our growing
                team. You'll develop HR strategies aligned with business
                objectives and oversee talent acquisition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">HR Management</Badge>
                <Badge variant="outline">Recruitment</Badge>
                <Badge variant="outline">Employee Relations</Badge>
              </div>
              <Link to="/jobs/1">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>

            {/* Featured Job 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
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
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">4.7</span>
                <span className="text-sm text-gray-500 ml-2">
                  $65,000 - $85,000
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Join our talent acquisition team to help find and recruit top
                talent. You'll source candidates, conduct interviews, and
                collaborate with hiring managers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Sourcing</Badge>
                <Badge variant="outline">Interviewing</Badge>
                <Badge variant="outline">ATS Systems</Badge>
              </div>
              <Link to="/jobs/2">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>

            {/* Featured Job 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">UX/UI Design Lead</h3>
                <Badge className="bg-blue-100 text-blue-800">Full-time</Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <Building className="h-4 w-4 mr-2" />
                <span className="mr-4">Creative Solutions Inc.</span>
                <MapPin className="h-4 w-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">4.9</span>
                <span className="text-sm text-gray-500 ml-2">
                  $110,000 - $140,000
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Direct the user experience strategy for our flagship mobile
                applications. Lead a team of designers and collaborate with
                developers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">UI/UX</Badge>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Prototyping</Badge>
              </div>
              <Link to="/jobs/3">
                <Button variant="outline" size="sm" className="w-full">
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
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-4 relative">
                <Search className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Search Jobs</h3>
              <p className="text-gray-600">
                Browse through our extensive job listings with powerful filters
                to find the perfect match
              </p>
              <Link to="/jobs" className="mt-4">
                <Button variant="outline" size="sm">
                  Browse Jobs
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-full mb-4 relative">
                <FileText className="h-8 w-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Apply</h3>
              <p className="text-gray-600">
                Submit your application with your profile, resume, and
                personalized cover letter
              </p>
              <Link to="/register" className="mt-4">
                <Button variant="outline" size="sm">
                  Create Profile
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full mb-4 relative">
                <Clock className="h-8 w-8 text-green-600" />
                <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Interview</h3>
              <p className="text-gray-600">
                Connect with employers for interviews and showcase your skills
                and experience
              </p>
              <Link to="/candidate" className="mt-4">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-yellow-100 p-4 rounded-full mb-4 relative">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
                <div className="absolute -top-2 -right-2 bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Hired</h3>
              <p className="text-gray-600">
                Receive job offers, negotiate terms, and start your exciting new
                career journey
              </p>
              <Link to="/about" className="mt-4">
                <Button variant="outline" size="sm">
                  Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-lg shadow-xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <div className="inline-block bg-blue-500/30 px-4 py-1 rounded-full mb-4">
              <span className="text-blue-100 font-medium">
                Join Our Community
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Create an account today and start your journey to finding the
              perfect job match with our powerful HR platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-blue-300" />
                <span>Free Account</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-blue-300" />
                <span>Easy Application</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-blue-300" />
                <span>Career Growth</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
