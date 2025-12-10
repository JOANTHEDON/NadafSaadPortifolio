import { Monitor, Smartphone, Camera, Code } from "lucide-react";
import gameDevIcon from "@/assets/game-developement.png";
import mobileDevIcon from "@/assets/mobile-developementt.png";
import webDevIcon from "@/assets/web-develeopemt.png";
import profileIcon from "@/assets/profile-removebg-preview.png";
import React from "react";

const services = [
  {
    icon: profileIcon,
    title: "Web Design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: webDevIcon,
    title: "Web Development", 
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: mobileDevIcon,
    title: "Android Application Development",
    description: "Android Application Development in XML and Java."
  },
  {
    icon: gameDevIcon,
    title: "Game Development",
    description: "Immersive and interactive game experiences built with Unity and Unreal Engine."
  }
];

export default function About() {
  return (
    <div className="p-8 max-w-4xl">
      {/* About Me Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-6">About Me</h1>
        <div className="w-12 h-1 bg-gradient-primary rounded mb-6"></div>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          I’m Saad Nadaf, a passionate and self-driven game developer currently pursuing a Bachelor of Technology in Computer Engineering at Indira College of Engineering and Management, Pune. With hands-on experience in both Unity (C#) and Unreal Engine (Blueprints), I specialize in building immersive and interactive gameplay experiences.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          My journey in game development includes creating a First Person Shooter in Unreal Engine and a Kitchen Simulation Game in Unity using advanced systems like ScriptableObjects, modular interaction logic, and prefabs for scalable architecture. I also have strong foundations in programming with C++, JavaScript, and Python, and practical experience building Android applications.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Beyond development, I’ve actively led technical events as a coordinator, showcasing my organizational and communication skills. My recent internship with Edunet Foundation deepened my AI skills, working on Stable Diffusion and ComfyUI for AI-generated visuals.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I’m always excited to bring stories to life through gameplay and technology, and I aim to contribute to teams that value creativity, innovation, and player experience.
        </p>
      </section>

      {/* What I'm Doing Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">What I'm doing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0">
                  {typeof service.icon === 'string' ? (
                    <img src={service.icon} alt={service.title + ' icon'} className="w-16 h-16" />
                  ) : typeof service.icon === 'function' ? (
                    React.createElement(service.icon, { className: "w-10 h-10 text-primary-foreground" })
                  ) : null}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}