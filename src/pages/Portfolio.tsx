import { useState } from 'react';
import ModelShowroom3D from '@/components/ModelShowroom3D';
import { Gamepad2, Play, Box, ExternalLink, Zap } from 'lucide-react';

// Import project images
import fpsGameImg from '@/assets/fps-game.jpg';
import fortniteImg from '@/assets/fortnite-creative.jpg';
import kitchenSimulatorImg from '@/assets/kitchen-simulator.jpg';
import chickEggImg from '@/assets/chick-egg.jpg';
import gyroBallImg from '@/assets/gyro-ball.jpg';
import rocketLanderImg from '@/assets/rocket-lander.jpg';
import thirdPersonImg from '@/assets/third-person.jpg';
import navigationUIImg from '@/assets/navigation-ui.jpg';
import basketballImg from '@/assets/basketball-scene.jpg';
import toonShaderImg from '@/assets/toon-shader.jpg';
import greasePencilImg from '@/assets/grease-pencil-cake.jpg';

const projects = [
  {
    id: 1,
    title: 'FPS Shooting Game',
    category: 'Unreal Engine',
    sfx: 'BANG! 💥',
    badgeColor: 'bg-[#FF2A2A] text-white',
    description: 'First-person shooter with dynamic recoil mechanics, procedural target systems, and combat UI.',
    technologies: ['Unreal Engine', 'Blueprints', 'Game Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_gamedevelopment-unrealengine-blueprints-activity-7263500070526865408-gzN_',
    image: fpsGameImg
  },
  {
    id: 2,
    title: 'Fortnite Creative Map',
    category: 'Unreal Engine',
    sfx: 'VICTORY! 🏆',
    badgeColor: 'bg-[#00F0FF] text-black',
    description: 'Custom Fortnite creative island with competitive level flow and tailored gameplay loops.',
    technologies: ['UEFN', 'Level Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_uefn-fortnite-gamedesign-activity-7368592041594851330-l6LB',
    image: fortniteImg
  },
  {
    id: 3,
    title: 'Kitchen Simulator',
    category: 'Unity',
    sfx: 'SIZZLE! 🍔',
    badgeColor: 'bg-[#FFE81F] text-black',
    description: 'Burger Builder cooking sim with recipe state machines, ScriptableObject recipes, and sound triggers.',
    technologies: ['Unity', 'C#', 'Modular Arch'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-kitchen-simulation-game-burger-activity-7340990159942791169-jHjm',
    image: kitchenSimulatorImg,
  },
  {
    id: 4,
    title: 'Chick and Egg Collector',
    category: 'Unity',
    sfx: 'CATCH! 🐣',
    badgeColor: 'bg-[#39FF14] text-black',
    description: 'Fast-paced arcade reflex title where velocity scales non-linearly with player score.',
    technologies: ['Unity', 'C#', 'Mobile Arcade'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7378041295400792064',
    image: chickEggImg,
  },
  {
    id: 5,
    title: 'Gyro Ball Game',
    category: 'Unity',
    sfx: 'TILT! ⚡',
    badgeColor: 'bg-[#FFE81F] text-black',
    description: 'Hardware-sensor gyro navigation game demanding millidegree device rotation precision.',
    technologies: ['Unity', 'Sensors API', 'C# Physics'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7386302606744293376-tOlG',
    image: gyroBallImg,
  },
  {
    id: 6,
    title: '2D Rocket Lander',
    category: 'Unity',
    sfx: 'THRUST! 🚀',
    badgeColor: 'bg-[#FF2A2A] text-white',
    description: 'Lunar lander physics tribute featuring thrust vectoring, gravitational pull, and fuel conservation.',
    technologies: ['Unity 2D', 'Physics Engine', 'C#'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7403314998573404160-sDCk',
    image: rocketLanderImg,
  },
  {
    id: 7,
    title: '3D Third Person Controller',
    category: 'Unity',
    sfx: 'DODGE! 🏃‍♂️',
    badgeColor: 'bg-[#00F0FF] text-black',
    description: 'Complete 3rd-person movement suite featuring 2D directional blend trees, rooting, and camera collision.',
    technologies: ['Unity 3D', 'Mixamo', 'Blend Trees'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-blendtree-activity-7386747688173768704-O5HS',
    image: thirdPersonImg,
  },
  {
    id: 8,
    title: 'Navigation UI App',
    category: 'Android',
    sfx: 'TAP! 📱',
    badgeColor: 'bg-[#39FF14] text-black',
    description: 'Sleek bottom-bar and navigation drawer application architecture for native Android systems.',
    technologies: ['Android Studio', 'Java', 'XML Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_androiddevelopment-mobileappdevelopment-androidstudio-activity-7306606604865495040-kzxL',
    image: navigationUIImg
  },
  {
    id: 9,
    title: '3D Basketball Scene',
    category: 'Blender',
    sfx: 'SLAM DUNK! 🏀',
    badgeColor: 'bg-[#FF7B00] text-black',
    description: 'Photorealistic basketball court rendered with procedural materials and atmospheric lighting.',
    technologies: ['Blender 3D', 'Cycles', 'PBR Shading'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-3dmodeling-activity-7263475702652432384-FxeS',
    image: basketballImg
  },
  {
    id: 10,
    title: 'Toon Shader Character',
    category: 'Blender',
    sfx: 'CEL SHADE! 🎨',
    badgeColor: 'bg-[#FFE81F] text-black',
    description: 'Anime / comic cell-shaded character rig crafted with inverted hull outlines and specular banding.',
    technologies: ['Blender', 'Toon Shaders', 'Rigging'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-shaders-activity-7263475702652432384-FxeS',
    image: toonShaderImg
  },
  {
    id: 11,
    title: 'Grease Pencil Cake',
    category: 'Blender',
    sfx: 'DELICIOUS! 🍰',
    badgeColor: 'bg-[#00F0FF] text-black',
    description: 'Hybrid 2D hand-drawn animation constructed inside Blender 3D space via Grease Pencil.',
    technologies: ['Blender', 'Grease Pencil', '2D Frame Anim'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-greasepencil-animation-activity-7263475702652432384-FxeS',
    image: greasePencilImg,
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'projects' | 'youtube' | '3d'>('projects');
  const categories = ['All', 'Unreal Engine', 'Unity', 'Android', 'Blender'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl space-y-6 sm:space-y-8">
      {/* Title & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative inline-block max-w-full">
          <div className="bg-[#FFE81F] text-black font-bangers text-3xl sm:text-4xl md:text-5xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] rotate-[-1deg] flex items-center gap-2 sm:gap-3">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 fill-black shrink-0" />
            <span className="truncate">MISSION ARCHIVES</span>
          </div>
          <div className="absolute -bottom-3 right-2 sm:right-4 bg-[#FF2A2A] text-white font-bangers text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] rotate-[3deg]">
            ACTION-PACKED!
          </div>
        </div>

        {/* Comic Tab Switcher */}
        <div className="flex bg-[#181c26] border-2 sm:border-3 border-black p-1 sm:p-1.5 rounded-2xl shadow-[4px_4px_0px_#000] gap-1 overflow-x-auto w-full md:w-auto">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 md:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bangers tracking-wider border-2 border-black transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'projects' 
                ? 'bg-[#FFE81F] text-black shadow-[2px_2px_0px_#000]' 
                : 'bg-[#202534] text-gray-300 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> PROJECTS
          </button>
          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex-1 md:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bangers tracking-wider border-2 border-black transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'youtube' 
                ? 'bg-[#FF2A2A] text-white shadow-[2px_2px_0px_#000]' 
                : 'bg-[#202534] text-gray-300 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" /> YOUTUBE
          </button>
          <button
            onClick={() => setActiveTab('3d')}
            className={`flex-1 md:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bangers tracking-wider border-2 border-black transition-all flex items-center justify-center gap-1.5 ${
              activeTab === '3d' 
                ? 'bg-[#00F0FF] text-black shadow-[2px_2px_0px_#000]' 
                : 'bg-[#202534] text-gray-300 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 3D LAB
          </button>
        </div>
      </div>
      
      {activeTab === 'projects' ? (
        <div className="space-y-6 sm:space-y-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl font-bangers text-xs sm:text-sm tracking-wider uppercase border-2 border-black transition-all ${
                  selectedCategory === category
                    ? 'bg-[#FFE81F] text-black shadow-[2px_2px_0px_#000]'
                    : 'bg-[#181c26] text-gray-300 hover:bg-[#202534] hover:text-white shadow-[1px_1px_0px_#000]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Comic Panels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                {/* SFX Action Callout */}
                <div className={`absolute top-2.5 right-2.5 z-20 font-bangers text-[11px] sm:text-xs px-2.5 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#000] ${project.badgeColor} rotate-2`}>
                  {project.sfx}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block flex-1 flex flex-col"
                >
                  <div className="h-44 sm:h-48 relative overflow-hidden bg-[#111319] border-b-3 sm:border-b-4 border-black">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-2 left-2 bg-[#FFE81F] text-black font-bangers text-[10px] sm:text-xs px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bangers text-white tracking-wide mb-1.5 group-hover:text-[#FFE81F] transition-colors flex items-center justify-between">
                        <span className="truncate">{project.title}</span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-[#FFE81F] ml-2" />
                      </h3>
                      <p className="text-gray-300 font-comic text-xs sm:text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2 border-t-2 border-black/60">
                      {project.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-bangers bg-[#202534] text-[#00F0FF] px-2 py-0.5 rounded border border-black"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === 'youtube' ? (
        <div className="relative bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center shadow-[6px_6px_0px_#000000] overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF2A2A] border-3 sm:border-4 border-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000000]">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bangers text-[#FFE81F] mb-3 tracking-wider">
              SAAD'S GAMING DISPATCH
            </h2>

            <p className="text-gray-200 font-comic text-sm sm:text-base leading-relaxed mb-6 bg-[#11141c] p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
              Catch live action gameplay, game dev breakdowns, and high-energy highlights from titles like <strong className="text-[#FFE81F]">Fortnite, PUBG, GTA Vice City, Meccha-Chameleon, Mario, and Uncharted</strong>!
            </p>

            <a 
              href="https://www.youtube.com/@SimpleEasy8557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF2A2A] hover:bg-[#ff4444] text-white font-bangers text-lg tracking-wider uppercase rounded-xl border-3 border-black shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 transition-all"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>VISIT YOUTUBE CHANNEL</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[6px_6px_0px_#000000] overflow-hidden">
          <div className="bg-[#00F0FF] text-black font-bangers text-xs sm:text-sm px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000] inline-block mb-4">
            ⚡ 3D LAB // TOUCH / DRAG TO ROTATE
          </div>
          <div className="w-full overflow-hidden">
            <ModelShowroom3D />
          </div>
        </div>
      )}
    </div>
  );
}
