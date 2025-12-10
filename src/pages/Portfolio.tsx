import { useState } from 'react';

// Project data with emoji placeholders and YouTube content
const projects = [
  // Unreal Engine Projects
  {
    id: 1,
    title: 'FPS Shooting Game',
    category: 'Unreal Engine',
    description: 'First-person shooter with gun mechanics, target system, and UI',
    technologies: ['Unreal Engine', 'Blueprints', 'Game Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_gamedevelopment-unrealengine-blueprints-activity-7263500070526865408-gzN_'
  },
  {
    id: 2,
    title: 'Fortnite Creative Map',
    category: 'Unreal Engine',
    description: 'Custom Fortnite creative map with unique gameplay',
    technologies: ['UEFN', 'Level Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_uefn-fortnite-gamedesign-activity-7368592041594851330-l6LB'
  },
  // Unity Projects
  {
    id: 3,
    title: 'Kitchen Simulator',
    category: 'Unity',
    description: 'Burger Builder game with cooking mechanics and recipe system',
    technologies: ['Unity', 'C#', 'Game Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-kitchen-simulation-game-burger-activity-7340990159942791169-jHjm',
    youtubeId: 'VIDEO_ID_1' // Replace with actual YouTube video ID
  },
  {
    id: 4,
    title: 'Chick and Egg Collector',
    category: 'Unity',
    description: 'Casual game with increasing difficulty as score grows',
    technologies: ['Unity', 'C#', 'Mobile Game'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7378041295400792064',
    youtubeId: 'VIDEO_ID_2' // Replace with actual YouTube video ID
  },
  {
    id: 5,
    title: 'Gyro Ball Game',
    category: 'Unity',
    description: 'Mobile game using device gyroscope for precise ball control and obstacle navigation',
    technologies: ['Unity', 'Mobile Sensors', 'C#', 'Gyroscope API'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7386302606744293376-tOlG',
    youtubeId: 'VIDEO_ID_3' // Replace with actual YouTube video ID
  },
  {
    id: 6,
    title: '2D Rocket Lander',
    category: 'Unity',
    description: 'Challenging physics-based rocket landing simulation with realistic controls',
    technologies: ['Unity 2D', 'Physics', 'C#', 'Particle Systems'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7403314998573404160-sDCk',
    youtubeId: 'VIDEO_ID_4' // Replace with actual YouTube video ID
  },
  {
    id: 11,
    title: '3D Third Person Controller',
    category: 'Unity',
    description: 'Advanced character movement system with blend trees and smooth animations',
    technologies: ['Unity 3D', 'Animation', 'C#', 'Blend Trees'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-blendtree-activity-7386747688173768704-O5HS',
    youtubeId: 'VIDEO_ID_6' // Replace with actual YouTube video ID
  },
  // Android Projects
  {
    id: 7,
    title: 'Navigation UI',
    category: 'Android',
    description: 'Modern navigation interface for Android applications',
    technologies: ['Android', 'Java', 'UI/UX'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_androiddevelopment-mobileappdevelopment-androidstudio-activity-7306606604865495040-kzxL'
  },
  // Blender Projects
  {
    id: 8,
    title: '3D Basketball Scene',
    category: 'Blender',
    description: '3D basketball scene with realistic materials and lighting',
    technologies: ['Blender', '3D Modeling', 'Materials', 'Lighting'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-3dmodeling-activity-7263475702652432384-FxeS'
  },
  {
    id: 9,
    title: 'Toon Shader Character',
    category: 'Blender',
    description: 'Stylized character with custom toon shader and rigging',
    technologies: ['Blender', 'Shading', 'Rigging', 'Texturing'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-shaders-activity-7263475702652432384-FxeS'
  },
  {
    id: 10,
    title: 'Grease Pencil Cake',
    category: 'Blender',
    description: '2D animation created with Blender\'s Grease Pencil',
    technologies: ['Blender', 'Grease Pencil', '2D Animation'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-greasepencil-animation-activity-7263475702652432384-FxeS',
    youtubeId: 'VIDEO_ID_5' // Replace with actual YouTube video ID
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Unreal Engine', 'Unity', 'Android', 'Blender'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full hover:opacity-90 transition-opacity"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-3">
                    {project.category === 'Unreal Engine' ? '🎮' : 
                     project.category === 'Unity' ? '🎲' :
                     project.category === 'Android' ? '📱' : '🎨'}
                  </div>
                  <p className="text-sm text-gray-400">Project Image</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-700 text-blue-300 px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
