import { useState } from "react";
import profilePhoto from "@/assets/profile-removebg-preview.png";
import mailIcon from "@/assets/mail.png";
import phoneIcon from "@/assets/phone.png";
import calenderIcon from "@/assets/calender.png";
import locationIcon from "@/assets/location.png";
import { Sparkles, Zap, ChevronDown, ChevronUp } from "lucide-react";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="w-full lg:w-[330px] p-4 sm:p-6 flex flex-col shrink-0 select-none">
      {/* Main Comic Panel Card */}
      <div className="relative bg-[#181c26] border-4 border-black rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] lg:shadow-[8px_8px_0px_#000000] text-center">
        
        {/* Comic Corner Badge / Issue Number */}
        <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-3 bg-[#FFE81F] text-black font-bangers text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[-5deg] z-10 flex items-center gap-1">
          <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black" /> VOL. 1 #2026
        </div>

        {/* Action Burst Tag */}
        <div className="absolute -top-3 -right-2 bg-[#FF2A2A] text-white font-bangers text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[6deg] z-10">
          ★ HERO DEV!
        </div>

        {/* Top Header layout for mobile & desktop */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 sm:gap-6 lg:gap-0 mt-3 sm:mt-2">
          {/* Profile Avatar inside a Comic Frame */}
          <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 shrink-0">
            <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#FFE81F] via-[#FF7B00] to-[#FF2A2A] p-1.5 border-4 border-black shadow-[4px_4px_0px_#000000] overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-xl bg-[#111319] overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE81F_2px,transparent_2px)] [background-size:10px_10px]" />
                <img 
                  src={profilePhoto} 
                  alt="Nadaf Saad" 
                  className="w-full h-full object-cover object-top relative z-10"
                />
              </div>
            </div>
            {/* Level tag */}
            <div className="absolute -bottom-2 right-1 sm:right-2 bg-[#00F0FF] text-black font-bangers text-xs px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#000]">
              LVL. 99
            </div>
          </div>

          {/* Name and Comic Title */}
          <div className="text-center sm:text-left lg:text-center flex-1">
            <h1 className="text-2xl sm:text-3xl font-bangers tracking-wider text-[#FFE81F] drop-shadow-[2px_2px_0px_#000000] mb-1">
              NADAF SAAD
            </h1>
            <div className="bg-[#FFE81F] text-black font-bangers text-xs tracking-wider px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] inline-block uppercase">
              GAME & SOFTWARE DEV
            </div>
            <p className="text-xs text-gray-400 font-comic mt-2 font-bold leading-tight">
              Unity • Unreal Engine • Android • Web
            </p>
          </div>
        </div>

        {/* Mobile Toggle Button for Contact Details */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden mt-4 w-full py-2 bg-[#202534] hover:bg-[#282f42] border-2 border-black rounded-xl font-bangers text-xs tracking-wider text-[#FFE81F] flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
        >
          <span>{isExpanded ? "HIDE DISPATCH DETAILS" : "SHOW DISPATCH DETAILS (HOTLINE, EMAIL...)"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Contact Info - Collapsible on Mobile, always open on Desktop */}
        <div className={`space-y-2.5 sm:space-y-3 mt-4 text-left ${isExpanded ? "block" : "hidden lg:block"}`}>
          <div className="bg-[#202534] rounded-xl p-2.5 sm:p-3 border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#282f42] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFE81F] border-2 border-black flex items-center justify-center p-1.5 shrink-0 shadow-[1px_1px_0px_#000]">
                <img src={mailIcon} alt="Email" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] uppercase font-bangers text-[#FFE81F] tracking-wide block">DISPATCH (EMAIL)</span>
                <span className="text-xs font-comic font-bold text-gray-200 truncate block">saadnadaf1210@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-[#202534] rounded-xl p-2.5 sm:p-3 border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#282f42] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#00F0FF] border-2 border-black flex items-center justify-center p-1.5 shrink-0 shadow-[1px_1px_0px_#000]">
                <img src={phoneIcon} alt="Phone" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] uppercase font-bangers text-[#00F0FF] tracking-wide block">HOTLINE (PHONE)</span>
                <span className="text-xs font-comic font-bold text-gray-200 block">+91 9325596618</span>
              </div>
            </div>
          </div>

          <div className="bg-[#202534] rounded-xl p-2.5 sm:p-3 border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#282f42] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF2A2A] border-2 border-black flex items-center justify-center p-1.5 shrink-0 shadow-[1px_1px_0px_#000]">
                <img src={calenderIcon} alt="Birthday" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] uppercase font-bangers text-[#FF7B00] tracking-wide block">ORIGIN DATE</span>
                <span className="text-xs font-comic font-bold text-gray-200 block">Oct 12, 2003</span>
              </div>
            </div>
          </div>

          <div className="bg-[#202534] rounded-xl p-2.5 sm:p-3 border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#282f42] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#39FF14] border-2 border-black flex items-center justify-center p-1.5 shrink-0 shadow-[1px_1px_0px_#000]">
                <img src={locationIcon} alt="Location" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] uppercase font-bangers text-[#39FF14] tracking-wide block">BASE OF OPS</span>
                <span className="text-xs font-comic font-bold text-gray-200 block">Satara, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun comic stamp */}
        <div className="mt-4 pt-3 border-t-2 border-black/60 flex items-center justify-center gap-2 text-xs font-bangers text-gray-400">
          <Sparkles className="w-4 h-4 text-[#FFE81F]" /> READY FOR THE NEXT MISSION!
        </div>

      </div>
    </aside>
  );
}
