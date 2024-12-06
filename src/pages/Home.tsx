import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EducationModel } from "../components/3d/EducationModel";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { NeonButton } from "../components/ui/NeonButton";
import { NeonCard } from "../components/ui/NeonCard";

export function Home() {
  return (
    <div className="space-y-16">
      <section className="relative h-[600px] -mt-8 rounded-3xl overflow-hidden neon-border">
        <div className="absolute inset-0 bg-gray-900/50">
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                color="#0ff"
                intensity={1}
              />
              <pointLight
                position={[-10, -10, -10]}
                color="#0ff"
                intensity={0.5}
              />
              <EducationModel />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl mx-auto text-center p-8">
            <h1 className="text-5xl font-bold mb-6 neon-text">
              Empowering Education Through Blockchain
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Support orphans' education through transparent and secure
              crowdfunding
            </p>
            <Link to="/campaigns">
              <NeonButton>
                View Campaigns
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <NeonCard>
          <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            Secure & Transparent
          </h3>
          <p className="text-cyan-100">
            Smart contracts ensure your donations reach the right beneficiaries
          </p>
        </NeonCard>

        <NeonCard>
          <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            Community Driven
          </h3>
          <p className="text-cyan-100">
            Join a community of donors making education accessible
          </p>
        </NeonCard>

        <NeonCard>
          <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            Impact Tracking
          </h3>
          <p className="text-cyan-100">
            Track your contributions and see the real impact of your support
          </p>
        </NeonCard>
      </section>
    </div>
  );
}
