import { Cloud, GitBranch, Container, Terminal, Activity, Server } from 'lucide-react';

export function DarkSkills() {
  const skills = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      items: [
        'AWS (EC2, S3, IAM, VPC, RDS, CloudWatch, Route 53, EBS, EFS, CloudFront)'
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      items: [
        'CI/CD Pipelines',
        'Jenkins',
        'GitHub Actions',
        'GitLab CI/CD'
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Container,
      title: 'Containers & Infrastructure',
      items: [
        'Docker',
        'Kubernetes (Basics)',
        'Terraform (Basics)',
        'Infrastructure as Code (IaC – Basics)'
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Terminal,
      title: 'Version Control',
      items: [
        'Git',
        'GitHub',
        'GitLab'
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Terminal,
      title: 'Operating Systems & Scripting',
      items: [
        'Linux (Basic Administration)',
        'Bash Scripting',
        'Python (Basics)'
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Activity,
      title: 'Monitoring & Web Servers',
      items: [
        'AWS CloudWatch',
        'Prometheus',
        'Grafana',
        'Apache',
        'Nginx'
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-gray-500 dark:text-gray-500 uppercase tracking-widest text-sm mb-3">My expertise</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              Technical Skills<span className="text-purple-500">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-purple-500/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 shadow-xl`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-gray-900 dark:text-white mb-3">{skill.title}</h3>
                        <ul className="space-y-2">
                          {skill.items.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}