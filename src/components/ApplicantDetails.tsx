import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Download, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  MoreVertical,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ApplicantDetails() {
  const { id } = useParams();

  // Mock data for the applicant
  const applicant = {
    id: id || '1',
    name: 'Adrian Thorne',
    role: 'Senior Frontend Engineer',
    avatar: 'https://picsum.photos/seed/adrian/200/200',
    email: 'adrian.thorne@example.com',
    phone: '+44 7700 900123',
    location: 'London, UK',
    status: 'Interviewing',
    appliedAt: '2 days ago',
    source: 'LinkedIn',
    summary: 'Senior Frontend Engineer with 8+ years of experience building scalable web applications. Expert in React, TypeScript, and modern CSS architectures. Passionate about performance, accessibility, and mentoring junior developers.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Jest', 'Cypress'],
    experience: [
      {
        company: 'TechFlow Systems',
        role: 'Lead Frontend Engineer',
        period: '2021 - Present',
        description: 'Leading the frontend team in developing a high-performance analytics dashboard. Reduced bundle size by 40% and improved Core Web Vitals by 60%.'
      },
      {
        company: 'Creative Pulse',
        role: 'Senior UI Engineer',
        period: '2018 - 2021',
        description: 'Developed and maintained a cross-platform design system used by 50+ developers. Implemented complex data visualizations using D3.js.'
      }
    ],
    education: [
      {
        school: 'University of London',
        degree: 'B.Sc. in Computer Science',
        year: '2016'
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Back Button */}
      <Link to="/applicants" className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Applicants
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Profile Info */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 text-center">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-3xl overflow-hidden ring-4 ring-primary/5">
                <img 
                  src={applicant.avatar} 
                  alt={applicant.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-xl shadow-md">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            
            <h1 className="text-2xl font-extrabold tracking-tight mb-1">{applicant.name}</h1>
            <p className="text-on-surface-variant font-medium mb-6">{applicant.role}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-xl text-xs font-bold">
                {applicant.status}
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-xl text-xs font-bold">
                {applicant.source}
              </span>
            </div>

            <div className="space-y-4 text-left border-t border-outline-variant/10 pt-8">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Mail className="w-4 h-4 text-primary" />
                <span>{applicant.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Phone className="w-4 h-4 text-primary" />
                <span>{applicant.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{applicant.location}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors">
                <Github className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors">
                <Globe className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </section>

          <section className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Schedule Interview
              </button>
              <button className="w-full py-3 px-4 border border-outline-variant/30 text-on-surface font-bold text-sm rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>
              <button className="w-full py-3 px-4 text-error font-bold text-sm rounded-xl hover:bg-error/5 transition-colors">
                Reject Application
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
            <p className="text-on-surface-variant leading-relaxed">
              {applicant.summary}
            </p>
          </section>

          {/* Skills */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {applicant.skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-xl text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-8">
              {applicant.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1 bottom-0 w-[2px] bg-outline-variant/20"></div>
                  <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm font-bold text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-lg">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Feed */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <button className="text-primary text-sm font-bold">View All</button>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">Passed Technical Review</p>
                  <p className="text-xs text-on-surface-variant mt-1">Completed by Sarah Jenkins • 1 day ago</p>
                  <div className="mt-2 p-3 bg-surface-container-low rounded-xl text-xs italic text-on-surface-variant">
                    "Strong understanding of React internals and system design. Excellent communication skills."
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">Application Received</p>
                  <p className="text-xs text-on-surface-variant mt-1">Via LinkedIn Integration • 2 days ago</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
