// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EduFund {
    struct Campaign {
        address payable beneficiary;
        string name;
        string description;
        uint256 goal;
        uint256 raised;
        uint256 deadline;
        bool claimed;
        mapping(address => uint256) donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;
    
    event CampaignCreated(uint256 indexed campaignId, address beneficiary, uint256 goal);
    event DonationReceived(uint256 indexed campaignId, address donor, uint256 amount);
    event FundsClaimed(uint256 indexed campaignId, address beneficiary, uint256 amount);

    function createCampaign(
        string memory _name,
        string memory _description,
        uint256 _goal,
        uint256 _durationDays
    ) external returns (uint256) {
        require(_goal > 0, "Goal must be greater than 0");
        require(_durationDays > 0, "Duration must be greater than 0");

        uint256 campaignId = campaignCount++;
        Campaign storage campaign = campaigns[campaignId];
        
        campaign.beneficiary = payable(msg.sender);
        campaign.name = _name;
        campaign.description = _description;
        campaign.goal = _goal;
        campaign.deadline = block.timestamp + (_durationDays * 1 days);
        
        emit CampaignCreated(campaignId, msg.sender, _goal);
        return campaignId;
    }

    function donate(uint256 _campaignId) external payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp < campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Donation must be greater than 0");

        campaign.donations[msg.sender] += msg.value;
        campaign.raised += msg.value;
        
        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function claimFunds(uint256 _campaignId) external {
        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.beneficiary, "Only beneficiary can claim");
        require(block.timestamp >= campaign.deadline, "Campaign not ended");
        require(campaign.raised >= campaign.goal, "Goal not reached");
        require(!campaign.claimed, "Funds already claimed");

        campaign.claimed = true;
        uint256 amount = campaign.raised;
        campaign.beneficiary.transfer(amount);
        
        emit FundsClaimed(_campaignId, campaign.beneficiary, amount);
    }
}