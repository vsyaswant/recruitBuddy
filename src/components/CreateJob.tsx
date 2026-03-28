import React from 'react';
import { RefreshCw, Bold, Italic, List, Link as LinkIcon, PlusCircle, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export default function CreateJob() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Create Job Posting</h1>
        <p className="text-on-surface-variant text-sm font-medium">Define the core requirements and curator parameters for your next talent acquisition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Form */}
        <div className="md:col-span-8 space-y-8">
          {/* Basic Info */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Job Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Senior Product Curator"
                  className="w-full bg-surface-container-low border-none focus:ring-0 border-b-2 border-outline-variant focus:border-primary transition-all px-0 py-3 text-lg font-medium text-on-surface placeholder:text-outline/50"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Job ID</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      defaultValue="REQ-2024-082"
                      className="w-full bg-surface-container-low border-none focus:ring-0 border-b-2 border-outline-variant focus:border-primary transition-all px-0 py-3 text-sm font-body text-on-surface"
                    />
                    <button className="p-2 hover:bg-primary-fixed-dim/20 rounded-lg text-primary">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Recruiting Manager</label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-0 border-b-2 border-outline-variant focus:border-primary transition-all px-0 py-3 text-sm font-body text-on-surface appearance-none">
                    <option>Eleanor Shellstrop</option>
                    <option>Michael Scott</option>
                    <option>Tahani Al-Jamil</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-4">Job Description</label>
            <div className="border border-outline-variant/30 rounded-lg overflow-hidden">
              <div className="flex items-center gap-1 p-2 bg-surface-container-high border-b border-outline-variant/30">
                <button className="p-1.5 hover:bg-surface-variant rounded text-slate-600"><Bold className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-surface-variant rounded text-slate-600"><Italic className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-surface-variant rounded text-slate-600"><List className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-outline-variant/50 mx-1"></div>
                <button className="p-1.5 hover:bg-surface-variant rounded text-slate-600"><LinkIcon className="w-4 h-4" /></button>
              </div>
              <textarea 
                className="w-full p-4 bg-transparent border-none focus:ring-0 text-sm leading-relaxed text-on-surface placeholder:text-outline/40" 
                placeholder="Outline the vision, responsibilities, and the impact this role will have..." 
                rows={8}
              ></textarea>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-4">Expected Skills</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Strategic Thinking', 'Visual Design', 'Stakeholder Mgmt'].map(skill => (
                <span key={skill} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-medium">
                  {skill}
                  <button className="hover:text-primary transition-colors">×</button>
                </span>
              ))}
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Add a skill (e.g. React, Product Strategy)..." 
                className="w-full bg-surface-container-low border-none focus:ring-0 border-b-2 border-outline-variant focus:border-primary transition-all px-0 py-3 text-sm"
              />
              <PlusCircle className="absolute right-0 top-1/2 -translate-y-1/2 text-primary w-5 h-5 cursor-pointer" />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-6">
          {/* Budget */}
          <section className="bg-surface-container-low p-6 rounded-xl space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <DollarSign className="w-4 h-4" />
              <h3 className="font-bold text-sm uppercase tracking-tight">Budget Range</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant/70 uppercase mb-1">Min Annual ($)</label>
                <input type="number" defaultValue="120000" className="w-full bg-white/50 border-none rounded-lg px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant/70 uppercase mb-1">Max Annual ($)</label>
                <input type="number" defaultValue="165000" className="w-full bg-white/50 border-none rounded-lg px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="pt-2">
                <div className="w-full h-1.5 bg-outline-variant/30 rounded-full relative">
                  <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm"></div>
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Tip */}
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <h4 className="text-xs font-bold text-primary uppercase mb-2">Curator's Tip</h4>
            <p className="text-xs text-on-primary-fixed-variant leading-relaxed">
              Precision starts with the Job Title. High-end candidates search for specialized roles rather than generic descriptions. Ensure your "Expected Skills" are ranked by priority.
            </p>
          </div>

          {/* Actions */}
          <div className="hidden md:flex flex-col gap-3">
            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 px-6 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Publish Job
            </button>
            <button className="w-full bg-surface-container-high text-on-primary-fixed-variant py-4 px-6 rounded-xl font-bold text-sm tracking-wide hover:bg-surface-variant transition-colors">
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
