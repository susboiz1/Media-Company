import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  User,
  LogIn,
  Menu,
  X,
  Briefcase,
  Search,
  ChevronDown,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: "hr" | "candidate" | null;
  onLogin?: () => void;
  onRegister?: () => void;
  onLogout?: () => void;
}

const Header = ({
  isLoggedIn = false,
  userRole = null,
  onLogin = () => {},
  onRegister = () => {},
  onLogout = () => {},
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary h-10 w-10 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">HR</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">HR Portal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors",
                  )}
                  asChild
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors",
                  )}
                  asChild
                >
                  <Link to="/jobs">Jobs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors",
                  )}
                  asChild
                >
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors",
                  )}
                  asChild
                >
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Button */}
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for jobs..."
                  className="flex-1"
                  autoFocus
                />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Frontend Developer
                  </Button>
                  <Button variant="outline" size="sm">
                    HR Manager
                  </Button>
                  <Button variant="outline" size="sm">
                    UX Designer
                  </Button>
                  <Button variant="outline" size="sm">
                    Remote
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {userRole === "hr" ? (
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to="/dashboard">
                    <Briefcase className="h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to="/candidate/applications">
                    <Briefcase className="h-4 w-4" />
                    My Applications
                  </Link>
                </Button>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-4"
                  >
                    <User className="h-4 w-4" />
                    <span>Account</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={onLogin}
                asChild
              >
                <Link to="/login">
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button onClick={onRegister} asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={closeMenu}
            >
              Home
            </Link>
            <div className="relative">
              <Link
                to="/jobs"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Jobs
              </Link>
            </div>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  {userRole === "hr" ? (
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={closeMenu}
                    >
                      <Briefcase className="h-4 w-4" />
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/candidate/applications"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={closeMenu}
                    >
                      <Briefcase className="h-4 w-4" />
                      My Applications
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={closeMenu}
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                  <button
                    className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      onLogout();
                      closeMenu();
                    }}
                  >
                    <LogIn className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={closeMenu}>
                    <Button className="w-full">Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
