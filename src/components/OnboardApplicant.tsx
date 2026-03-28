import React from 'react';
import { UploadCloud, Link as LinkIcon, FileText, Search, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function OnboardApplicant() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Onboard New Applicant</h2>
        <p className="text-on-surface-variant max-w-2xl">
          Streamline your talent acquisition by adding candidates through manual entry, resume parsing, or direct platform integration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Resume Upload */}
          <section className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1 block">Efficiency First</span>
                <h3 className="text-xl font-bold">Upload Resume</h3>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 flex flex-col items-center justify-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-primary" />
              </div>
              <p className="text-on-surface font-medium mb-1">Drag and drop CV here</p>
              <p className="text-on-surface-variant text-sm">PDF, DOCX up to 10MB</p>
              <button className="mt-6 px-6 py-2 bg-surface-container-high text-on-primary-fixed-variant font-medium rounded-xl hover:bg-surface-variant transition-colors">
                Browse Files
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Naukri Integration */}
            <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-on-secondary-container" />
                </div>
                <h3 className="font-bold">Naukri Integration</h3>
              </div>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Import candidate profile directly using their profile URL or candidate ID.
              </p>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="https://naukri.com/profile/..." 
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all"
                />
                <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-semibold rounded-xl hover:bg-secondary-container/80 transition-colors flex items-center justify-center gap-2">
                  Fetch Profile Data
                </button>
              </div>
            </section>

            {/* Manual Entry */}
            <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-on-surface-variant" />
                </div>
                <h3 className="font-bold">Manual Entry</h3>
              </div>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Create a profile from scratch for referrals or walk-in candidates.
              </p>
              <button className="w-full py-3 border border-outline-variant/30 text-primary font-semibold rounded-xl hover:bg-surface-container-low transition-colors">
                Open Entry Form
              </button>
            </section>
          </div>

          {/* Candidate Details Form */}
          <section className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15">
            <h3 className="text-xl font-bold mb-6">Candidate Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Full Name', placeholder: 'Johnathan Doe' },
                { label: 'Email Address', placeholder: 'john.doe@company.com' },
                { label: 'Phone Number', placeholder: '+1 (555) 000-0000' },
                { label: 'Current Location', placeholder: 'San Francisco, CA' },
              ].map((field) => (
                <div key={field.label} className="space-y-2">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-on-surface-variant">{field.label}</label>
                  <input 
                    type="text" 
                    placeholder={field.placeholder}
                    className="w-full border-b border-outline-variant/30 focus:border-primary bg-transparent py-2 focus:ring-0 transition-all outline-none"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Tag to Job */}
          <aside className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15">
            <h3 className="text-lg font-bold mb-4">Tag to Job</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search active postings..." 
                className="w-full bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
            <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2 no-scrollbar">
              {[
                { title: 'Senior Product Designer', meta: 'Design Team • 12 Applicants' },
                { title: 'Backend Engineer (Node.js)', meta: 'Engineering • 45 Applicants' },
                { title: 'Growth Marketing Lead', meta: 'Marketing • 8 Applicants' },
              ].map((job) => (
                <label key={job.title} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high cursor-pointer transition-colors group">
                  <input type="radio" name="job" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant" />
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-on-surface">{job.title}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{job.meta}</p>
                  </div>
                </label>
              ))}
            </div>
          </aside>

          {/* Recruitment Flow */}
          <aside className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15">
            <h3 className="text-lg font-bold mb-6">Recruitment Flow</h3>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-outline-variant/30"></div>
              {[
                { label: 'Applied', sub: 'Entry Point', active: true },
                { label: 'Screening', sub: 'Automated Review' },
                { label: 'Interview', sub: 'Technical & Cultural' },
                { label: 'Offer', sub: 'Negotiation Phase' },
                { label: 'Hired', sub: 'Final Onboarding' },
              ].map((stage) => (
                <div key={stage.label} className="relative">
                  <div className={`absolute -left-5 w-3 h-3 rounded-full ${
                    stage.active ? 'bg-primary ring-4 ring-primary-fixed' : 'bg-surface-container-high border-2 border-outline-variant'
                  }`}></div>
                  <p className={`text-sm font-bold ${stage.active ? 'text-on-surface' : 'text-on-surface-variant'}`}>{stage.label}</p>
                  <p className="text-[11px] text-on-surface-variant/60">{stage.sub}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button className="pipeline-gradient w-full py-4 text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Complete Onboarding
            </button>
            <button className="w-full py-3 text-on-surface-variant font-medium hover:bg-surface-container-high rounded-xl transition-colors">
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
