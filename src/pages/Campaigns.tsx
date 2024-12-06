import React, { useState } from "react";
import { CampaignCard } from "../components/Campaign/CampaignCard";

export function Campaigns() {
  // Mock data - in production this would come from smart contract
  const [campaigns] = useState([
    {
      id: 1,
      name: "Sarah's College Fund",
      description: "Help Sarah pursue her dream of studying Computer Science",
      goal: 5,
      raised: 2.5,
      deadline: new Date("2024-12-31"),
    },
    {
      id: 2,
      name: "Tom's Medical School Journey",
      description:
        "Support Tom's journey to become a doctor and serve his community",
      goal: 10,
      raised: 3,
      deadline: new Date("2024-10-15"),
    },
  ]);

  const handleDonate = (campaignId: number) => {
    console.log(`Donate to campaign ${campaignId}`);
    // Implement donation logic here
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Active Campaigns</h1>
        <p className="mt-2 text-gray-600">
          Support education initiatives that change lives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            {...campaign}
            onDonate={() => handleDonate(campaign.id)}
          />
        ))}
      </div>
    </div>
  );
}
