import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'EasyCRUD – Two-Tier Web Application (AWS)',
      date: 'Nov 2025 – Dec 2025',
      description: [
        'Deployed a secure two-tier architecture on AWS EC2',
        'Configured Apache web server',
        'Used Amazon RDS (MariaDB) as database',
        'Secured EC2–RDS communication using security groups',
        'Managed source code using Git',
      ],
      tags: ['AWS EC2', 'RDS', 'Linux', 'Apache', 'MariaDB', 'Git'],
      link: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600">{project.date}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-slate-600">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    <span className="uppercase text-sm tracking-wide">View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
