import { ImageWithFallback } from './figma/ImageWithFallback';

export function DarkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Greeting */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse shadow-lg shadow-purple-500/50"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Welcome to my portfolio</p>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block mt-2">
                Prashik Manohare
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I build scalable cloud infrastructure, automate deployments, and manage CI/CD pipelines
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-purple-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl border-2 border-gray-400 dark:border-purple-500 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}