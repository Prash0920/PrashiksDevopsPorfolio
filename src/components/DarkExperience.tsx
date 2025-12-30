export function DarkExperience() {
  return (
    <section id="work" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-gray-500 dark:text-gray-500 uppercase tracking-widest text-sm mb-3">What I've done so far</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              Work Experience<span className="text-purple-500">.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>

            {/* Timeline item */}
            <div className="relative pl-8 sm:pl-20 pb-12">
              {/* Glowing node */}
              <div className="absolute left-0 sm:left-8 top-0 w-0 h-0 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 glow-purple"></div>
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-purple-500/30">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white">Web Development Intern</h3>
                      <p className="text-purple-500 dark:text-purple-400">InterPe</p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Jul 2022 – Aug 2022</div>
                  </div>

                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-purple-500 mt-1.5">▹</span>
                      <span>Supported development and deployment of a scalable e-commerce application</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 mt-1.5">▹</span>
                      <span>Integrated and tested RESTful APIs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 mt-1.5">▹</span>
                      <span>Improved performance by ~30%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 mt-1.5">▹</span>
                      <span>Used Git for version control and delivery workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}