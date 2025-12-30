import { ExternalLink } from 'lucide-react';

export function DarkProjects() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-gray-500 dark:text-gray-500 uppercase tracking-widest text-sm mb-3">My work</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              Projects<span className="text-purple-500">.</span>
            </h2>
          </div>

          {/* Project Card */}
          <div className="max-w-4xl">
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-purple-500/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2">
                    EasyCRUD – Two-Tier Web Application
                  </h3>
                  <p className="text-purple-500 dark:text-purple-400">Full-Stack AWS Deployment</p>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-500 mt-1.5">▹</span>
                    <span>Deployed a secure two-tier architecture on AWS EC2</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-500 mt-1.5">▹</span>
                    <span>Configured Apache web server for optimal performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-500 mt-1.5">▹</span>
                    <span>Used Amazon RDS (MariaDB) as the database backend</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-500 mt-1.5">▹</span>
                    <span>Secured EC2–RDS communication using security groups</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-500 mt-1.5">▹</span>
                    <span>Managed source code using Git version control</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 pt-4">
                  {['AWS EC2', 'RDS', 'Linux', 'Apache', 'MariaDB', 'Git'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-xl shadow-purple-500/50"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}