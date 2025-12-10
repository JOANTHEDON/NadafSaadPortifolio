import React from 'react';

interface YouTubeVideoProps {
  id: string;
  title: string;
  description?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ id, title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-16 aspect-h-9 w-full">
      <iframe
        className="w-full h-48 md:h-64"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && <p className="text-gray-300 text-sm">{description}</p>}
    </div>
  </div>
);

const YouTubeVideos = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-10 left-20 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4 relative z-10">Game On! 🎮</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 relative z-10"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto mb-8 text-lg relative z-10">
          When I'm not coding games, you'll find me conquering them! Join me on my gaming adventures, epic wins, and hilarious fails.
        </p>
        
        <div className="relative z-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
          <a 
            href="https://www.youtube.com/@SimpleEasy8557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-lg transition-all duration-200 group-hover:scale-105"
          >
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            <span className="text-xl">Join the Adventure on YouTube</span>
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['🏆', '🎯', '⚔️', '🎮'].map((emoji, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-75 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl block mb-2">{emoji}</span>
              <span className="text-gray-300">
                {['Epic Wins', 'Pro Tips', 'Boss Fights', 'Live Streams'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideos;
