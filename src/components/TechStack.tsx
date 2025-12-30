export function TechStack() {
  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-900 mb-12">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center space-y-3 p-4 rounded-lg hover:bg-white transition-colors group"
            >
              <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
                {tech.icon}
              </div>
              <span className="text-sm text-slate-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
