import profilePhoto from "@/assets/profile-removebg-preview.png";
import mailIcon from "@/assets/mail.png";
import phoneIcon from "@/assets/phone.png";
import calenderIcon from "@/assets/calender.png";
import locationIcon from "@/assets/location.png";

export function Sidebar() {
  return (
    <aside className="w-[320px] bg-background/50 backdrop-blur-xl border-r border-border/30 p-8 flex flex-col">
      {/* Profile Container - Separated with glassmorphism */}
      <div className="bg-card/60 backdrop-blur-xl border border-border/40 rounded-3xl p-8 mb-8 shadow-2xl shadow-black/20">
        {/* Profile Photo */}
        <div className="w-36 h-36 rounded-3xl overflow-hidden mb-8 shadow-xl ring-4 ring-primary/10 mx-auto">
          <img 
            src={profilePhoto} 
            alt="Richard Hanrick" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Nadaf Saad</h1>
          <div className="bg-secondary/80 backdrop-blur-sm px-6 py-3 rounded-2xl inline-block">
            <p className="text-muted-foreground text-sm font-medium">Software Developer | Android Developer | Web Developer | Game Developer</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:bg-secondary/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src={mailIcon} alt="Email" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</p>
                <p className="text-sm text-foreground font-medium">saadnadaf1210@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:bg-secondary/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src={phoneIcon} alt="Phone" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</p>
                <p className="text-sm text-foreground font-medium">+91 9325596618</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:bg-secondary/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src={calenderIcon} alt="Birthday" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Birthday</p>
                <p className="text-sm text-foreground font-medium">Oct-12-2003</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-4 border border-border/30 hover:bg-secondary/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src={locationIcon} alt="Location" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</p>
                <p className="text-sm text-foreground font-medium">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media icons removed as no PNGs provided and lucide-react icons are not imported */}
      </div>
    </aside>
  );
}