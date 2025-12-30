import { Award, Users, Trophy } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: 'Tech Coordinator',
      org: 'Innovation Labs Pune',
    },
    {
      icon: Award,
      title: 'Treasurer',
      org: 'ENTC Student Association',
    },
    {
      icon: Trophy,
      title: 'Winner',
      org: 'Avishkar Hackathon (2024)',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-900 mb-12">
          Leadership & Awards
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-slate-100 rounded-full">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">{achievement.title}</h3>
                    <p className="text-slate-600 text-sm">{achievement.org}</p>
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
