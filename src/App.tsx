import { ThemeProvider } from './components/ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';
import { DarkNavbar } from './components/DarkNavbar';
import { DarkHero } from './components/DarkHero';
import { DarkOverview } from './components/DarkOverview';
import { DarkSkills } from './components/DarkSkills';
import { DarkExperience } from './components/DarkExperience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DarkFooter } from './components/DarkFooter';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
        {/* Animated particle background */}
        <AnimatedBackground />
        
        {/* Radial gradient backgrounds */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-400/5 dark:bg-purple-600/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-[150px]"></div>
        </div>

        <div className="relative z-10">
          <DarkNavbar />
          <DarkHero />
          <DarkOverview />
          <DarkSkills />
          <DarkExperience />
          <FeaturedProjects />
          <DarkFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}