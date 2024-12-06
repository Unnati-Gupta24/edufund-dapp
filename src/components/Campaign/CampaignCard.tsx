import React from "react";
import { Calendar, Target, Users } from "lucide-react";

interface CampaignCardProps {
  id: number;
  name: string;
  description: string;
  goal: number;
  raised: number;
  deadline: Date;
  onDonate: () => void;
}

export function CampaignCard({
  name,
  description,
  goal,
  raised,
  deadline,
  onDonate,
}: CampaignCardProps) {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-700">
            <Target className="w-5 h-5 mr-2" />
            <span>Goal: {goal} ETH</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Users className="w-5 h-5 mr-2" />
            <span>Raised: {raised} ETH</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Ends: {deadline.toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {progress.toFixed(1)}% funded
          </p>
        </div>

        <button
          onClick={onDonate}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
