import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/Layout/Header";
import { Home } from "./pages/Home";
import { Campaigns } from "./pages/Campaigns";
import { CreateCampaign } from "./pages/CreateCampaign";
import { CampaignDetails } from "./pages/CampaignDetails";
import "./index.css";
import "./styles/neon.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 bg-cyber-grid">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:id" element={<CampaignDetails />} />
            <Route path="/create" element={<CreateCampaign />} />
          </Routes>
        </main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid #22d3ee",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
