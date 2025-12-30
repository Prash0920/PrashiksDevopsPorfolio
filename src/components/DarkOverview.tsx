export function DarkOverview() {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <p className="text-gray-500 dark:text-gray-500 uppercase tracking-widest text-sm mb-3">Introduction</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              Overview<span className="text-purple-500">.</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            I am a fresher DevOps Engineer with hands-on experience in AWS, Linux, CI/CD pipelines, 
            and cloud infrastructure. I enjoy automating workflows, improving deployment reliability, 
            and building scalable systems.
          </p>

          {/* Role Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-8 max-w-3xl">
            <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-purple-500/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-xl shadow-purple-500/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white">DevOps Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  CI/CD, Automation, Infrastructure as Code
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-cyan-500/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-xl shadow-cyan-500/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white">Cloud Engineer (AWS)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  EC2, S3, RDS, Lambda, CloudFront
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}