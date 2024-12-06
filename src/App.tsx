import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Home } from "./pages/Home";
import { Campaigns } from "./pages/Campaigns";
import { CreateCampaign } from "./pages/CreateCampaign";
import { CampaignDetails } from "./pages/CampaignDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:id" element={<CampaignDetails />} />
            <Route path="/create" element={<CreateCampaign />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
