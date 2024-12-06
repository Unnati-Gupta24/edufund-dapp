import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Wallet } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduFund
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/campaigns"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Campaigns
            </Link>
            <Link
              to="/create"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Start Campaign
            </Link>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Wallet className="h-5 w-5 mr-2" />
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
