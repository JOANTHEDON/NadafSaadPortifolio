import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, Zap, Radio } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("HOLD IT! Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "51c9d646-cd9d-4c33-a3d8-e390c5fa6359",
          name,
          email,
          message,
          subject: `[COMIC DISPATCH] New Portfolio Message from ${name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("BAM! Transmission sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Transmission glitch! Please try again.");
      }
    } catch (error) {
      toast.error("Connection severed! Check your network signal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl space-y-8 sm:space-y-10">
      {/* Page Title */}
      <div className="relative inline-block max-w-full">
        <div className="bg-[#39FF14] text-black font-bangers text-3xl sm:text-4xl md:text-5xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] rotate-[-1deg] flex items-center gap-2 sm:gap-3">
          <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" />
          <span className="truncate">TRANSMISSION HUB</span>
        </div>
        <div className="absolute -bottom-3 right-2 sm:right-4 bg-[#FFE81F] text-black font-bangers text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[3deg]">
          DISPATCH LINE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Left Comic Card: Direct Message Form */}
        <section className="lg:col-span-3 bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[5px_5px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] relative">
          <div className="absolute -top-3.5 left-4 sm:left-6 bg-[#FFE81F] text-black font-bangers text-xs sm:text-sm px-3 sm:px-4 py-0.5 sm:py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-black" /> SEND HERO SIGNAL
          </div>

          <p className="text-gray-300 font-comic text-xs sm:text-sm mt-2 mb-5">
            Looking for a game dev, mobile engineer, or creative coder? Fire away your signal below and I will respond pronto!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block font-bangers text-xs sm:text-sm text-[#FFE81F] tracking-wider uppercase mb-1">
                CODENAME / SENDER NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Agent / Recruiter / Fellow Dev"
                className="w-full bg-[#111319] text-white font-comic text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_#000] focus:outline-none focus:border-[#FFE81F] transition-all placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block font-bangers text-xs sm:text-sm text-[#00F0FF] tracking-wider uppercase mb-1">
                DISPATCH ADDRESS (EMAIL)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@hq.com"
                className="w-full bg-[#111319] text-white font-comic text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_#000] focus:outline-none focus:border-[#00F0FF] transition-all placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block font-bangers text-xs sm:text-sm text-[#FF2A2A] tracking-wider uppercase mb-1">
                MISSION BRIEF (MESSAGE)
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, game concept, or collaboration..."
                className="w-full bg-[#111319] text-white font-comic text-sm sm:text-base p-3 sm:p-4 rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_#000] focus:outline-none focus:border-[#FF2A2A] transition-all placeholder:text-gray-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 bg-[#FFE81F] hover:bg-[#ffd700] text-black font-bangers text-xl sm:text-2xl tracking-wider uppercase rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-black" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 text-black" />
                  <span>FIRE TRANSMISSION! (SEND)</span>
                </>
              )}
            </button>
          </form>
        </section>

        {/* Right Comic Card: HQ Location & Intel */}
        <section className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[5px_5px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] relative">
            <div className="bg-[#00F0FF] text-black font-bangers text-xs px-2.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000] inline-block mb-2">
              BASE RADAR
            </div>
            
            <h3 className="font-bangers text-xl sm:text-2xl text-[#FFE81F] tracking-wide mb-1">
              SATARA, MAHARASHTRA
            </h3>
            <p className="text-xs text-gray-300 font-comic mb-3">
              Latitude: 17.6805° N, Longitude: 74.0183° E
            </p>

            <div className="h-44 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 border-black shadow-[3px_3px_0px_#000]">
              <iframe
                title="Satara, Maharashtra, India Map"
                src="https://www.google.com/maps?q=Satara,+Maharashtra,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] text-center">
            <span className="font-bangers text-xs sm:text-sm text-[#39FF14] tracking-wider block mb-1">
              QUICK DIAL HOTLINE
            </span>
            <p className="font-bangers text-xl sm:text-2xl text-white tracking-wide">
              +91 9325596618
            </p>
            <p className="font-comic text-xs text-gray-400 mt-1">
              Available for game contracts & freelance quests!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
