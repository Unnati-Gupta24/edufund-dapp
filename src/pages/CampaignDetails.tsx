import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, Target, Users } from "lucide-react";

export function CampaignDetails() {
  const { id } = useParams();

  // Mock data - in production this would come from smart contract
  const campaign = {
    id: parseInt(id || "1"),
    name: "Sarah's College Fund",
    description:
      "Help Sarah pursue her dream of studying Computer Science at a top university. Your support will cover tuition, books, and living expenses for her first year of studies.",
    goal: 5,
    raised: 2.5,
    deadline: new Date("2024-12-31"),
    beneficiary: "0x1234...5678",
    donors: 12,
  };

  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {campaign.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-gray-700">
              <Target className="w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Goal</p>
                <p className="font-semibold">{campaign.goal} ETH</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <Users className="w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Donors</p>
                <p className="font-semibold">{campaign.donors}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <p className="font-semibold">
                  {campaign.deadline.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <span>{campaign.raised} ETH raised</span>
              <span>{progress.toFixed(1)}%</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">About this campaign</h2>
            <p className="text-gray-600">{campaign.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Donate Now
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
              Share Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
