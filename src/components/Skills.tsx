import { Cloud, GitBranch, Container, Terminal, Activity, Server } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Cloud,
      title: 'Cloud Platform',
      items: 'AWS (EC2, S3, IAM, VPC, RDS, Lambda, Route 53, CloudFront)',
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      items: 'Git, GitHub, GitLab, Jenkins, GitHub Actions',
    },
    {
      icon: Container,
      title: 'Containers & IaC',
      items: 'Docker, Kubernetes (Basics), Terraform',
    },
    {
      icon: Terminal,
      title: 'OS & Scripting',
      items: 'Linux Administration, Bash, Python',
    },
    {
      icon: Activity,
      title: 'Monitoring',
      items: 'CloudWatch, Grafana, Prometheus',
    },
    {
      icon: Server,
      title: 'Web Servers',
      items: 'Apache, Nginx',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-900 mb-12">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-100 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-slate-900">{skill.title}</h3>
                    <p className="text-slate-600 text-sm">{skill.items}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
