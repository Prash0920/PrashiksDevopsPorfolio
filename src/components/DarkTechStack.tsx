export function DarkTechStack() {
  const technologies = [
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
    { name: 'Linux', icon: '🐧', color: 'from-slate-600 to-slate-800' },
    { name: 'Git', icon: '📦', color: 'from-red-500 to-orange-600' },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 group float-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl sm:text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <p className="text-gray-400 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
