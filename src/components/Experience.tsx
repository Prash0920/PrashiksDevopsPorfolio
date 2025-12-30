import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-slate-700" />
              <h2 className="text-slate-900">Experience</h2>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-slate-900">Web Development Intern</h3>
                  <span className="text-sm text-slate-600">Jul 2022 – Aug 2022</span>
                </div>
                <p className="text-slate-700">InterPe</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Supported development and deployment of a scalable e-commerce application</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Integrated and tested RESTful APIs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Improved performance by ~30%</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Used Git for version control and delivery workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-slate-700" />
              <h2 className="text-slate-900">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="space-y-2">
                  <h3 className="text-slate-900">B.E. Electronics & Telecommunication</h3>
                  <p className="text-slate-700">Government College of Engineering, Avasari</p>
                  <p className="text-slate-600">2021 – Present</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="space-y-2">
                  <h3 className="text-slate-900">HSC (Science)</h3>
                  <p className="text-slate-700">Maharashtra State Board</p>
                  <p className="text-slate-600">90.14%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
