import { GraduationCap, Briefcase, Zap, Trophy } from "lucide-react";
import gameDevIcon from "@/assets/game-developement.png";
import mobileDevIcon from "@/assets/mobile-developementt.png";
import webDevIcon from "@/assets/web-develeopemt.png";

export default function Resume() {
  const education = [
    {
      institution: "Indira College of Engineering and Management",
      period: "Aug 2023 – Aug 2026",
      degree: "B.Tech in Computer Engineering",
      score: "CGPA: 8.57 / 10",
      location: "Pune, Maharashtra",
      badge: "ACTIVE LEVEL",
      badgeColor: "bg-[#FFE81F] text-black"
    },
    {
      institution: "Karmaveer Bhaurao Patil Polytechnic",
      period: "July 2021 – Aug 2023",
      degree: "Diploma in Computer Engineering",
      score: "Percentage: 85%",
      location: "Satara, Maharashtra",
      badge: "COMPLETED",
      badgeColor: "bg-[#00F0FF] text-black"
    },
    {
      institution: "IQRA English Medium School",
      period: "July 2019 – May 2020",
      degree: "Secondary School Certificate",
      score: "Percentage: 86%",
      location: "Satara, Maharashtra",
      badge: "COMPLETED",
      badgeColor: "bg-[#39FF14] text-black"
    }
  ];

  const experience = [
    {
      position: "Game Developer Intern",
      company: "Idea Usher",
      period: "Jan 2026 – Jun 2026",
      badge: "LEGENDARY RAID",
      badgeColor: "bg-[#FF2A2A] text-white",
      highlights: [
        "Diagnosed and resolved critical multiplayer synchronization bugs using PUN (Photon Unity Networking), leveraging RPCs and OnPhotonSerializeView for stable real-time gameplay in Metaverse environments.",
        "Integrated and retargeted Mixamo character animations into Unity, including blend-tree setups and Animator Controller triggers.",
        "Fixed Multiplayer Animation Synchronization issues — avatar animations correctly replicated across the network for all players.",
        "Structured multi-branch Git / GitHub workflow across development, testing, staging, and production under standard CI/CD pipelines.",
        "Performed 3D asset optimization in Blender — cleaned topology, reduced draw calls, and boosted runtime framerates."
      ]
    },
    {
      position: "AI & Visual Generation Intern",
      company: "Edunet Foundation",
      period: "Jan 2025 – Feb 2025",
      badge: "AI SPECIAL OPS",
      badgeColor: "bg-[#FFE81F] text-black",
      highlights: [
        "Mastered AI image synthesis utilizing ComfyUI node graphs and Stable Diffusion pipelines for high-fidelity game art.",
        "Formulated tailored prompt engineering frameworks and upscaling workflows for rapid prototyping."
      ]
    }
  ];

  const statSkills = [
    { name: "Unity & C# Mechanics", score: 92, stat: "ATK 92", color: "from-[#FFE81F] to-[#FF7B00]", icon: gameDevIcon },
    { name: "Unreal Engine 5 & Blueprints", score: 88, stat: "PWR 88", color: "from-[#FF2A2A] to-[#FF7B00]", icon: gameDevIcon },
    { name: "Android App Development", score: 85, stat: "DEF 85", color: "from-[#39FF14] to-[#00F0FF]", icon: mobileDevIcon },
    { name: "Web & Front-End Architecture", score: 82, stat: "SPD 82", color: "from-[#00F0FF] to-[#0077FE]", icon: webDevIcon },
    { name: "3D Asset Pipeline & Blender", score: 78, stat: "ART 78", color: "from-[#FFE81F] to-[#39FF14]", icon: gameDevIcon },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl space-y-8 sm:space-y-12">
      {/* Page Header Banner */}
      <div className="relative inline-block max-w-full">
        <div className="bg-[#00F0FF] text-black font-bangers text-3xl sm:text-4xl md:text-5xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] rotate-[-1deg] flex items-center gap-2 sm:gap-3">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 fill-black shrink-0" />
          <span className="truncate">HERO DOSSIER & STAT SHEET</span>
        </div>
        <div className="absolute -bottom-3 right-2 sm:right-4 bg-[#FFE81F] text-black font-bangers text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[2deg]">
          RANK: S-TIER
        </div>
      </div>

      {/* Experience / Battle Log Section */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF2A2A] rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bangers tracking-wider text-white drop-shadow-[2px_2px_0px_#000]">
            COMBAT EXPERIENCE (WORK HISTORY)
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experience.map((item, idx) => (
            <div 
              key={idx}
              className="relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000]"
            >
              <div className={`sm:absolute sm:top-4 sm:right-4 font-bangers text-xs px-2.5 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#000] ${item.badgeColor} w-fit mb-2 sm:mb-0`}>
                {item.badge}
              </div>

              <div className="mb-3">
                <span className="text-[11px] font-bangers text-[#FFE81F] tracking-widest uppercase block mb-1">
                  {item.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bangers text-white tracking-wide">
                  {item.position} <span className="text-[#00F0FF]">@ {item.company}</span>
                </h3>
              </div>

              <ul className="space-y-2">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-comic text-gray-300">
                    <span className="font-bangers text-[#FFE81F] text-sm shrink-0">►</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Skill Attributes */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFE81F] rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bangers tracking-wider text-white drop-shadow-[2px_2px_0px_#000]">
            POWER GAUGES & SKILL METRICS
          </h2>
        </div>

        <div className="bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {statSkills.map((skill, index) => (
            <div key={index} className="space-y-2 bg-[#12151d] p-3 sm:p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
              <div className="flex justify-between items-center font-bangers">
                <span className="text-sm sm:text-base text-gray-200 tracking-wide">{skill.name}</span>
                <span className="bg-[#FFE81F] text-black text-xs px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
                  {skill.stat}
                </span>
              </div>
              
              <div className="w-full h-4 sm:h-5 bg-[#202534] border-2 border-black rounded-lg overflow-hidden p-0.5">
                <div 
                  className={`h-full rounded bg-gradient-to-r ${skill.color} border border-black`}
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education / Academy Training Section */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#39FF14] rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bangers tracking-wider text-white drop-shadow-[2px_2px_0px_#000]">
            ACADEMY TRAINING (EDUCATION)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {education.map((item, index) => (
            <div 
              key={index}
              className="relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#000000] flex flex-col justify-between"
            >
              <div className={`font-bangers text-[10px] px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000] ${item.badgeColor} w-fit mb-2`}>
                {item.badge}
              </div>

              <div>
                <span className="text-[10px] font-bangers text-[#00F0FF] tracking-widest uppercase block mb-1">
                  {item.period}
                </span>
                <h3 className="font-bangers text-lg sm:text-xl text-[#FFE81F] leading-tight mb-1.5">
                  {item.institution}
                </h3>
                <p className="text-xs font-comic font-bold text-gray-300 mb-1">
                  {item.degree}
                </p>
                <p className="text-xs font-comic text-gray-400">
                  {item.location}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t-2 border-black bg-[#12151d] -mx-1.5 -mb-1.5 p-2 rounded-lg text-center font-bangers text-xs sm:text-sm text-[#39FF14]">
                SCORE: {item.score}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
