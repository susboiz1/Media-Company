import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardSummary from "./DashboardSummary";
import DeclarationSection from "./sections/DeclarationSection";
import RecruitmentSection from "./sections/RecruitmentSection";
import CandidatesSection from "./sections/CandidatesSection";
import ReportsSection from "./sections/ReportsSection";

const HRDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Determine active page based on current path
  const getActivePage = () => {
    const path = location.pathname;
    if (path.includes("/dashboard/declaration")) return "declaration";
    if (path.includes("/dashboard/recruitment")) return "recruitment";
    if (path.includes("/dashboard/candidates")) return "candidates";
    if (path.includes("/dashboard/reports")) return "reports";
    return "dashboard";
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        activePage={getActivePage()}
      />

      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<DashboardSummary />} />
          <Route path="/declaration/*" element={<DeclarationSection />} />
          <Route path="/recruitment/*" element={<RecruitmentSection />} />
          <Route path="/candidates/*" element={<CandidatesSection />} />
          <Route path="/reports/*" element={<ReportsSection />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default HRDashboard;
