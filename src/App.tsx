import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import Header from "./components/layout/Header";
import JobsPage from "./components/common/JobsPage";

// Lazy load components
const JobListings = lazy(() => import("./components/candidate/JobListings"));
const JobDetails = lazy(() => import("./components/candidate/JobDetails"));
const ApplicationForm = lazy(
  () => import("./components/candidate/ApplicationForm"),
);
const CandidatePortal = lazy(
  () => import("./components/candidate/CandidatePortal"),
);
const MyApplications = lazy(
  () => import("./components/candidate/MyApplications"),
);
const ProfileManagement = lazy(
  () => import("./components/candidate/ProfileManagement"),
);
const HRDashboard = lazy(() => import("./components/dashboard/HRDashboard"));
const LoginForm = lazy(() => import("./components/auth/LoginForm"));
const RegistrationForm = lazy(
  () => import("./components/auth/RegistrationForm"),
);
const ContactForm = lazy(() => import("./components/common/ContactForm"));
const About = lazy(() => import("./components/common/About"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <div className="mt-20">
        {" "}
        {/* Add margin-top to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<ApplicationForm />} />
          <Route path="/candidate" element={<CandidatePortal />} />
          <Route path="/candidate/applications" element={<MyApplications />} />
          <Route path="/candidate/profile" element={<ProfileManagement />} />
          <Route path="/dashboard/*" element={<HRDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
