import React from "react";
import { Building, MapPin, Clock } from "lucide-react";
import { Badge } from "../ui/badge";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
}

const JobCard = ({
  title,
  company,
  location,
  type,
  salary,
  postedDate,
  description,
}: JobCardProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <Building className="h-4 w-4 mr-1" />
            <span className="mr-3">{company}</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <Badge className="bg-blue-100 text-blue-800">{type}</Badge>
      </div>

      <div className="mb-3">
        <span className="text-sm text-gray-500">{salary}</span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center text-gray-500 text-sm">
        <Clock className="h-4 w-4 mr-1" />
        <span>Posted {postedDate}</span>
      </div>
    </div>
  );
};

export default JobCard;
