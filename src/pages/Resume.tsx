import gameDevIcon from "@/assets/game-developement.png";
import mobileDevIcon from "@/assets/mobile-developementt.png";

export default function Resume() {
  const education = [
    {
      institution: "IQRA English Medium School",
      period: "July 2019 – May 2020",
      description: "Percentage: 86% | Satara"
    },
    {
      institution: "Karmaveer Bhaurao Patil Polytechnic",
      period: "July 2021 – Aug 2023",
      description: "Diploma in Computer Engineering, Percentage: 85% | Satara"
    },
    {
      institution: "Indira College of Engineering and Management",
      period: "Aug 2023 – Aug 2026",
      description: "Bachelor of Technology in Computer Engineering, CGPA: 8.57/10 | Pune"
    }
  ];

  const experience = [
    {
      position: "Intern At Edunet Foundation",
      period: "Jan-2025 – Feb-2025",
      description: `• Worked on AI-based image generation using ComfyUI and Stable Diffusion, creating custom workflows for text-to-image tasks.\n• Gained hands-on experience in prompt engineering, image enhancement, and visual content generation.`
    }
  ];

  const skills = [
    { name: "Game Developer", percentage: 80, icon: gameDevIcon },
    { name: "Mobile apps", percentage: 75, icon: mobileDevIcon },
    { name: "Graphic design", percentage: 70 }
  ];

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Resume</h1>
      <div className="w-12 h-1 bg-gradient-primary rounded mb-8"></div>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">📚</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg mb-2">
                  {item.period}
                </span>
                <h3 className="font-semibold text-foreground mb-3">{item.institution}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">💼</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg mb-2">
                  {item.period}
                </span>
                <h3 className="font-semibold text-foreground mb-3">{item.position}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">My Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground flex items-center gap-2">
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name + ' icon'} className="w-8 h-8" />
                  )}
                  {skill.name}
                </span>
                <span className="text-primary font-semibold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}