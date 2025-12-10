const blogPosts = [
  {
    id: 1,
    title: "Design Conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    color: "bg-gradient-to-br from-pink-400 to-pink-600"
  },
  {
    id: 2,
    title: "Best Fonts Every Designer",
    category: "Design", 
    date: "Feb 23, 2022",
    description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    color: "bg-gradient-to-br from-orange-400 to-yellow-500"
  },
  {
    id: 3,
    title: "Design Digest #80",
    category: "Design",
    date: "Feb 23, 2022", 
    description: "Excepteur sint occaecat cupidatat no proident, sunt in culpa qui officia deserunt mollit anim laboris.",
    color: "bg-gradient-to-br from-blue-400 to-purple-500"
  },
  {
    id: 4,
    title: "UI Interactions of the Week", 
    category: "Design",
    date: "Feb 23, 2022",
    description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris.",
    color: "bg-gradient-to-br from-gray-400 to-gray-600"
  }
];

export default function Blog() {
  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Blog</h1>
      <div className="w-12 h-1 bg-gradient-primary rounded mb-8"></div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              {/* Featured Image */}
              <div className={`h-48 ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-black/30 text-white text-sm rounded-lg backdrop-blur-sm">
                    {post.category} • {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}