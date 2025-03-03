import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  FileText,
  Briefcase,
  Users,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  LogOut,
  Settings,
  User,
  Home,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  activePage?: string;
}

const Sidebar = ({
  collapsed = false,
  onToggleCollapse = () => {},
  activePage = "dashboard",
}: SidebarProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      path: "/dashboard",
      id: "dashboard",
    },
    {
      name: "Declaration",
      icon: <FileText className="h-5 w-5" />,
      path: "/dashboard/declaration",
      id: "declaration",
      subItems: [
        { name: "All Declarations", path: "/dashboard/declaration" },
        { name: "Create New", path: "/dashboard/declaration/new" },
      ],
    },
    {
      name: "Recruitment",
      icon: <Briefcase className="h-5 w-5" />,
      path: "/dashboard/recruitment",
      id: "recruitment",
      subItems: [
        { name: "Job Listings", path: "/dashboard/recruitment" },
        { name: "Create Job", path: "/dashboard/recruitment/new" },
        { name: "Published Jobs", path: "/dashboard/recruitment/published" },
      ],
    },
    {
      name: "Candidates",
      icon: <Users className="h-5 w-5" />,
      path: "/dashboard/candidates",
      id: "candidates",
      subItems: [
        { name: "All Candidates", path: "/dashboard/candidates" },
        { name: "New Applications", path: "/dashboard/candidates/new" },
        { name: "Shortlisted", path: "/dashboard/candidates/shortlisted" },
        { name: "Interviews", path: "/dashboard/candidates/interviews" },
      ],
    },
    {
      name: "Reports",
      icon: <BarChart3 className="h-5 w-5" />,
      path: "/dashboard/reports",
      id: "reports",
      subItems: [
        { name: "Application Stats", path: "/dashboard/reports/applications" },
        { name: "Position Stats", path: "/dashboard/reports/positions" },
        { name: "Custom Reports", path: "/dashboard/reports/custom" },
      ],
    },
  ];

  return (
    <div
      className={cn(
        "h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      {/* Logo and collapse button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="bg-primary h-8 w-8 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">HR</span>
            </div>
            <span className="font-semibold text-lg">HR Portal</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto bg-primary h-8 w-8 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">HR</span>
          </div>
        )}
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {collapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="h-8 w-8 absolute -right-4 top-4 bg-white border border-gray-200 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <div key={item.id}>
              <TooltipProvider
                delayDuration={0}
                disableHoverableContent={!collapsed}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        activePage === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100",
                        collapsed && "justify-center",
                      )}
                      onClick={() => item.subItems && toggleSection(item.id)}
                    >
                      {item.icon}
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.name}</span>
                          {item.subItems &&
                            (expandedSection === item.id ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            ))}
                        </>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right">{item.name}</TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>

              {/* Submenu */}
              {!collapsed && item.subItems && expandedSection === item.id && (
                <div className="mt-1 ml-9 space-y-1">
                  {item.subItems.map((subItem, index) => (
                    <Link
                      key={index}
                      to={subItem.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* User profile section */}
      <div className="p-4 border-t border-gray-200">
        {collapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=hr-admin"
                      alt="HR Admin"
                    />
                    <AvatarFallback>HR</AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>HR Admin</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=hr-admin"
                alt="HR Admin"
              />
              <AvatarFallback>HR</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                HR Admin
              </p>
              <p className="text-xs text-gray-500 truncate">
                admin@hrportal.com
              </p>
            </div>
          </div>
        )}

        {!collapsed && (
          <div className="mt-3 space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-700"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-700"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
