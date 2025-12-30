import { Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-slate-600 uppercase tracking-wide text-sm">
                DevOps Engineer (Fresher) | Pune, India
              </p>
              <h1 className="text-slate-900">
                Automating Infrastructure & Streamlining Deployment
              </h1>
              <p className="text-slate-600">
                I am a fresher DevOps Engineer with hands-on experience in AWS, Linux, and CI/CD. 
                Passionate about building scalable and reliable cloud infrastructure.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-slate-900 text-white px-8 py-3 rounded-lg uppercase text-sm tracking-wide hover:bg-slate-800 transition-colors"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg uppercase text-sm tracking-wide hover:bg-slate-50 transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/prashikmanohare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-300 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://linkedin.com/in/prashikmanohare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-300 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="mailto:prashikmanohare99@gmail.com"
                className="p-3 border border-slate-300 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
              >
                <Mail className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Prashik Manohare - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
