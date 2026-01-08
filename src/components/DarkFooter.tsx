import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function DarkFooter() {
  return (
    <footer id="contact" className="relative py-20 overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-purple-500 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-cyan-500 rounded-full top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-500 rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-500 rounded-full top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-1 h-1 bg-cyan-500 rounded-full bottom-1/3 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center space-y-8 bg-white/80 dark:bg-gray-900/50 border-2 dark:border-purple-500/30">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              I'm currently open to DevOps and Cloud Engineering opportunities. 
              Let's build something amazing together!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a
              href="mailto:prashikmanohare99@gmail.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>prashikmanohare99@gmail.com</span>
            </a>
            <a
              href="tel:+919699237247"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9699237247</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/Prash0920"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-purple-500/30 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-purple-500/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashiik-manohare-346466241/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-cyan-500/30 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-cyan-500/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prashikmanohare99@gmail.com"
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-purple-500/30 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-purple-500/20 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="pt-8 border-t border-gray-300 dark:border-purple-500/30">
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © 2025 Prashik Manohare. Designed & Built with React, Tailwind CSS & Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}