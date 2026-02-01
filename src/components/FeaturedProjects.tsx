import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "AWS Two-Tier Infrastructure Deployment",
    subtitle: "Cloud Infrastructure & Secure Backend Architecture",
    description: [
      "Designed and deployed a secure two-tier architecture on AWS using EC2 and RDS",
      "Configured Apache web server for optimized application hosting",
      "Implemented secure EC2–RDS communication using controlled security groups",
      "Managed Linux server setup and service configuration",
      "Applied Git-based version control best practices"
    ],
    tech: ["AWS EC2", "RDS", "Linux", "Apache", "MariaDB", "Git"],
    link: "https://github.com/Prash0920/EasyCRUD.git"
  },
  {
    title: "Kubernetes Deployment on AWS EKS",
    subtitle: "Infrastructure as Code & Container Orchestration",
    description: [
      "Provisioned AWS infrastructure using Terraform (Infrastructure as Code)",
      "Deployed and configured Amazon EKS cluster for container orchestration",
      "Containerized application and deployed using Kubernetes manifests",
      "Configured IAM roles and AWS CLI authentication for cluster access",
      "Managed pods, services, and networking within Kubernetes environment",
      "Practiced scalable cloud-native deployment workflows"
    ],
    tech: ["AWS", "EKS", "Terraform", "Kubernetes", "Docker", "IAM", "Linux"],
    link: "https://github.com/Prash0920/Super_Mario.git"
  }
];

export function FeaturedProjects() {
  return (
    <section id="work" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-3"
            >
              My work
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6"
            >
              Featured Projects<span className="text-purple-500">.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl text-gray-600 dark:text-gray-400 text-lg"
            >
              Hands-on cloud and DevOps projects demonstrating infrastructure provisioning, container orchestration, and secure deployment practices.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Soft glow border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col bg-white/80 dark:bg-black/50 border dark:border-purple-500/20 shadow-2xl transition-all duration-300">
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{project.subtitle}</p>
                    </div>

                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm sm:text-base">
                          <span className="text-cyan-500 mt-1 flex-shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(145,94,255,0.4)]"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
