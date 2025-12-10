import { useState } from 'react';

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

// Project data with images
const projects = [
  // Unreal Engine Projects
  {
    id: 1,
    title: 'FPS Shooting Game',
    category: 'Unreal Engine',
    description: 'First-person shooter with gun mechanics, target system, and UI',
    technologies: ['Unreal Engine', 'Blueprints', 'Game Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_gamedevelopment-unrealengine-blueprints-activity-7263500070526865408-gzN_',
    image: fpsGameImg
  },
  {
    id: 2,
    title: 'Fortnite Creative Map',
    category: 'Unreal Engine',
    description: 'Custom Fortnite creative map with unique gameplay',
    technologies: ['UEFN', 'Level Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_uefn-fortnite-gamedesign-activity-7368592041594851330-l6LB',
    image: fortniteImg
  },
  // Unity Projects
  {
    id: 3,
    title: 'Kitchen Simulator',
    category: 'Unity',
    description: 'Burger Builder game with cooking mechanics and recipe system',
    technologies: ['Unity', 'C#', 'Game Design'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-kitchen-simulation-game-burger-activity-7340990159942791169-jHjm',
    image: kitchenSimulatorImg,
    youtubeId: 'VIDEO_ID_1' // Replace with actual YouTube video ID
  },
  {
    id: 4,
    title: 'Chick and Egg Collector',
    category: 'Unity',
    description: 'Casual game with increasing difficulty as score grows',
    technologies: ['Unity', 'C#', 'Mobile Game'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7378041295400792064',
    image: chickEggImg,
    youtubeId: 'VIDEO_ID_2' // Replace with actual YouTube video ID
  },
  {
    id: 5,
    title: 'Gyro Ball Game',
    category: 'Unity',
    description: 'Mobile game using device gyroscope for precise ball control and obstacle navigation',
    technologies: ['Unity', 'Mobile Sensors', 'C#', 'Gyroscope API'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7386302606744293376-tOlG',
    image: gyroBallImg,
    youtubeId: 'VIDEO_ID_3' // Replace with actual YouTube video ID
  },
  {
    id: 6,
    title: '2D Rocket Lander',
    category: 'Unity',
    description: 'Challenging physics-based rocket landing simulation with realistic controls',
    technologies: ['Unity 2D', 'Physics', 'C#', 'Particle Systems'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-indiegamedev-activity-7403314998573404160-sDCk',
    image: rocketLanderImg,
    youtubeId: 'VIDEO_ID_4' // Replace with actual YouTube video ID
  },
  {
    id: 7,
    title: '3D Third Person Controller',
    category: 'Unity',
    description: 'Advanced character movement system with blend trees and smooth animations',
    technologies: ['Unity 3D', 'Animation', 'C#', 'Blend Trees'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_unity-gamedevelopment-blendtree-activity-7386747688173768704-O5HS',
    image: thirdPersonImg,
    youtubeId: 'VIDEO_ID_6' // Replace with actual YouTube video ID
  },
  // Android Projects
  {
    id: 8,
    title: 'Navigation UI',
    category: 'Android',
    description: 'Modern navigation interface for Android applications',
    technologies: ['Android', 'Java', 'UI/UX'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_androiddevelopment-mobileappdevelopment-androidstudio-activity-7306606604865495040-kzxL',
    image: navigationUIImg
  },
  // Blender Projects
  {
    id: 9,
    title: '3D Basketball Scene',
    category: 'Blender',
    description: '3D basketball scene with realistic materials and lighting',
    technologies: ['Blender', '3D Modeling', 'Materials', 'Lighting'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-3dmodeling-activity-7263475702652432384-FxeS',
    image: basketballImg
  },
  {
    id: 10,
    title: 'Toon Shader Character',
    category: 'Blender',
    description: 'Stylized character with custom toon shader and rigging',
    technologies: ['Blender', 'Shading', 'Rigging', 'Texturing'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-3dart-shaders-activity-7263475702652432384-FxeS',
    image: toonShaderImg
  },
  {
    id: 11,
    title: 'Grease Pencil Cake',
    category: 'Blender',
    description: '2D animation created with Blender\'s Grease Pencil',
    technologies: ['Blender', 'Grease Pencil', '2D Animation'],
    link: 'https://www.linkedin.com/posts/saad-nadaf_blender-greasepencil-animation-activity-7263475702652432384-FxeS',
    image: greasePencilImg,
    youtubeId: 'VIDEO_ID_5' // Replace with actual YouTube video ID
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'youtube'
  const categories = ['All', 'Unreal Engine', 'Unity', 'Android', 'Blender'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">My Work</h1>
        <div className="flex rounded-md bg-gray-800 p-1">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              activeTab === 'projects' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('youtube')}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              activeTab === 'youtube' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            YouTube
          </button>
        </div>
      </div>
      
      {activeTab === 'projects' ? (
        <div>
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
                  <div className="h-48 bg-gray-700 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const emoji = project.category === 'Unreal Engine' ? '🎮' : 
                                      project.category === 'Unity' ? '🎲' :
                                      project.category === 'Android' ? '📱' : '🎨';
                          e.currentTarget.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-center">
                                <div class="text-5xl">${emoji}</div>
                                <p class="text-sm text-gray-400 mt-2">Project Image</p>
                              </div>
                            </div>`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl">
                            {project.category === 'Unreal Engine' ? '🎮' : 
                             project.category === 'Unity' ? '🎲' :
                             project.category === 'Android' ? '📱' : '🎨'}
                          </div>
                          <p className="text-sm text-gray-400">No Image Available</p>
                        </div>
                      </div>
                    )}
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
      ) : (
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-10 h-10 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Check out my YouTube Channel</h2>
            <p className="text-gray-300 mb-6">I create tutorials and showcase my game development projects on my YouTube channel. Subscribe to stay updated with my latest work!</p>
            <a 
              href="https://www.youtube.com/@SimpleEasy8557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Visit My Channel
            </a>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-6">Featured Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.youtubeId)
                  .map(project => (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-gray-700 aspect-video mb-3">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400">{project.category}</p>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
