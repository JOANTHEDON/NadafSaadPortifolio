import { Sparkles, Zap, Flame, Shield, Terminal } from "lucide-react";
import gameDevIcon from "@/assets/game-developement.png";
import mobileDevIcon from "@/assets/mobile-developementt.png";
import webDevIcon from "@/assets/web-develeopemt.png";
import profileIcon from "@/assets/profile-removebg-preview.png";

const services = [
  {
    icon: profileIcon,
    tag: "UI / UX ART",
    title: "Web Design & Art",
    badge: "CREATIVE!",
    badgeColor: "bg-[#00F0FF] text-black",
    description: "Crafting modern, responsive, pixel-punching designs with intuitive user flows and high-voltage visual identity."
  },
  {
    icon: webDevIcon,
    tag: "FULL-STACK",
    title: "Web Development",
    badge: "LIGHTNING FAST!",
    badgeColor: "bg-[#FFE81F] text-black",
    description: "High-octane web engineering using React, TypeScript, Tailwind, and cutting-edge web technologies."
  },
  {
    icon: mobileDevIcon,
    tag: "NATIVE ANDROID",
    title: "Android App Development",
    badge: "POWERFUL!",
    badgeColor: "bg-[#39FF14] text-black",
    description: "Robust mobile application engineering with Java & XML, handling hardware sensors, state logic, and fluid user experience."
  },
  {
    icon: gameDevIcon,
    tag: "CORE SPECIALTY",
    title: "Game Development",
    badge: "HERO POWER!",
    badgeColor: "bg-[#FF2A2A] text-white",
    description: "Immersive 2D & 3D real-time experiences in Unity (C#) & Unreal Engine (Blueprints), from physics simulations to FPS & multiplayer network mechanics."
  }
];

export default function About() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl space-y-8 sm:space-y-10">
      {/* Chapter Title / Header Banner */}
      <div className="relative inline-block max-w-full">
        <div className="bg-[#FFE81F] text-black font-bangers text-3xl sm:text-4xl md:text-5xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] rotate-[-1deg] flex items-center gap-2 sm:gap-3">
          <Flame className="w-6 h-6 sm:w-8 sm:h-8 fill-black shrink-0" />
          <span className="truncate">ORIGIN STORY: SAAD NADAF</span>
        </div>
        <div className="absolute -bottom-3 right-2 sm:right-4 bg-[#FF2A2A] text-white font-bangers text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[3deg]">
          ISSUE #01: THE JOURNEY BEGINS
        </div>
      </div>

      {/* Comic Narration Speech Panel */}
      <section className="relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[5px_5px_0px_#000000] sm:shadow-[8px_8px_0px_#000000]">
        {/* Caption Ribbon */}
        <div className="absolute -top-3.5 left-4 sm:left-6 bg-[#00F0FF] text-black font-bangers text-xs sm:text-sm px-3 sm:px-4 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" /> LOG // ABOUT ME
        </div>

        <div className="mt-3 space-y-4 text-sm sm:text-base font-comic leading-relaxed text-gray-200">
          <p className="bg-[#11141c] p-3.5 sm:p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] relative">
            <span className="font-bangers text-[#FFE81F] text-lg sm:text-xl tracking-wider block mb-1">
              "GREETINGS, PLAYER ONE!"
            </span>
            I’m <strong className="text-[#FFE81F] font-bold">Saad Nadaf</strong>, a passionate and self-driven game developer currently pursuing a Bachelor of Technology in Computer Engineering at Indira College of Engineering and Management, Pune. With hands-on experience in both <strong className="text-[#00F0FF]">Unity (C#)</strong> and <strong className="text-[#FF7B00]">Unreal Engine (Blueprints)</strong>, I specialize in building immersive, high-action gameplay mechanics!
          </p>

          <p className="bg-[#11141c] p-3.5 sm:p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
            My game dev odyssey spans creating a high-stakes <span className="text-[#FF2A2A] font-bold">First Person Shooter in Unreal Engine</span>, a full-featured <span className="text-[#FFE81F] font-bold">Kitchen Simulation in Unity</span> using modular ScriptableObject architecture, and intricate mobile accelerometer sensor controls. Alongside game engines, I command robust skills in <strong className="text-white">C++, JavaScript, and Python</strong>, with battle-tested experience engineering Android applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
            <div className="bg-[#1e2433] p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] flex items-start gap-2.5 sm:gap-3">
              <Zap className="w-5 h-5 text-[#FFE81F] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bangers text-xs sm:text-sm text-[#FFE81F] tracking-wide">LEADERSHIP & EVENTS</h4>
                <p className="text-xs text-gray-300 font-comic">Actively led technical events as student coordinator, spearheading collaborative hackathons and tech festivals.</p>
              </div>
            </div>

            <div className="bg-[#1e2433] p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] flex items-start gap-2.5 sm:gap-3">
              <Sparkles className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bangers text-xs sm:text-sm text-[#00F0FF] tracking-wide">AI VISUALS & COMFYUI</h4>
                <p className="text-xs text-gray-300 font-comic">Interned with Edunet Foundation mastering Stable Diffusion pipelines and prompt engineering for generative game assets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers / What I'm Doing Section */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF2A2A] rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bangers tracking-wider text-white drop-shadow-[2px_2px_0px_#000]">
              SPECIAL ABILITIES & ARSENAL
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all duration-200 group overflow-hidden"
            >
              <div className={`absolute top-2.5 right-2.5 font-bangers text-[10px] sm:text-xs px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000] ${service.badgeColor}`}>
                {service.badge}
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#202534] border-2 sm:border-3 border-black flex items-center justify-center p-2 shrink-0 shadow-[2px_2px_0px_#000000] group-hover:scale-105 group-hover:bg-[#FFE81F] transition-all">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>

                <div className="flex-1 min-w-0 pr-4 sm:pr-6">
                  <span className="text-[9px] sm:text-[10px] font-bangers text-[#00F0FF] tracking-wider uppercase block">
                    {service.tag}
                  </span>
                  <h3 className="font-bangers text-lg sm:text-2xl text-[#FFE81F] tracking-wide mb-1 drop-shadow-[1px_1px_0px_#000] truncate">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-comic text-gray-300 leading-relaxed font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
