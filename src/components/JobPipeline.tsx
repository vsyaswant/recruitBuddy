import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Users, MoreHorizontal, ExternalLink, Video, FileCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function JobPipeline() {
  const { id } = useParams();

  const stages = [
    {
      name: 'Screening',
      count: 5,
      applicants: [
        { id: '1', name: 'Adrian Fletcher', time: 'Applied 2d ago', tags: ['Figma', 'Prototyping'], avatar: 'https://picsum.photos/seed/adrian/100/100' },
        { id: '2', name: 'Elena Rodriguez', time: 'Applied 4d ago', tags: ['UI Design', 'Storytelling'], avatar: 'https://picsum.photos/seed/elena/100/100', badge: 'High Intent' },
      ]
    },
    {
      name: 'Interviewing',
      count: 3,
      highlight: true,
      applicants: [
        { id: '3', name: 'Marcus Thorne', time: 'Interview: Tomorrow 10:00', type: 'Panel Interview (3/3)', avatar: 'https://picsum.photos/seed/marcus/100/100' },
        { id: '4', name: 'Sasha Kovic', time: 'Completed Round 2', status: 'Pending Feedback', avatar: 'https://picsum.photos/seed/sasha/100/100' },
      ]
    },
    {
      name: 'Background Check',
      count: 2,
      applicants: [
        { id: '5', name: 'Thomas Wright', time: 'In Progress (70%)', progress: 70, avatar: 'https://picsum.photos/seed/thomas/100/100' },
      ]
    },
    {
      name: 'Offer Made',
      count: 1,
      applicants: [
        { id: '6', name: 'Isabella Chen', time: 'Offer Sent Today', isOffer: true, avatar: 'https://picsum.photos/seed/isabella/100/100' },
      ]
    }
  ];

  return (
    <div className="space-y-10">
      {/* Back Button */}
      <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Jobs
      </Link>

      {/* Job Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-fixed px-2 py-0.5 rounded">Active</span>
            <span className="text-[10px] font-medium text-on-surface-variant uppercase">JOB ID: {id || 'ATS-PR-2024-082'}</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Senior Experience Designer</h2>
          <div className="flex flex-wrap gap-4 text-on-surface-variant text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> London, UK (Remote Eligible)</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> £85,000 - £110,000</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 14 Total Applicants</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold text-sm hover:brightness-95 transition-all">Edit Posting</button>
          <button className="px-5 py-2.5 rounded-xl pipeline-gradient text-white font-bold text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all">Share Role</button>
        </div>
      </section>

      {/* Pipeline Board */}
      <div className="relative overflow-x-auto pb-6 -mx-4 px-4 no-scrollbar">
        <div className="flex gap-6 min-w-max">
          {stages.map((stage) => (
            <div key={stage.name} className={`w-80 flex-shrink-0 ${stage.highlight ? 'bg-surface-container-low/50 rounded-3xl p-1' : ''}`}>
              <div className={`flex items-center justify-between mb-6 px-3 ${stage.highlight ? 'mt-4' : ''}`}>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{stage.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stage.highlight ? 'bg-primary text-white' : 'bg-surface-container-highest text-outline'}`}>
                    {stage.count}
                  </span>
                </div>
                <button className="text-outline hover:text-primary transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className={`flex flex-col gap-4 ${stage.highlight ? 'px-3 pb-4' : ''}`}>
                {stage.applicants.map((applicant) => (
                  <motion.div 
                    key={applicant.id}
                    layoutId={applicant.id}
                    className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all group ${
                      applicant.isOffer ? 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent border-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Link to={`/applicants/${applicant.id}`} className="flex gap-3 flex-1">
                        <div className={`w-10 h-10 rounded-xl overflow-hidden bg-surface-container ${applicant.isOffer ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                          <img src={applicant.avatar} alt={applicant.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-on-surface">{applicant.name}</h4>
                          <p className="text-[11px] text-on-surface-variant">{applicant.time}</p>
                        </div>
                      </Link>
                      {!applicant.isOffer && <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />}
                    </div>

                    {applicant.tags && (
                      <div className="flex gap-1.5 flex-wrap mb-4">
                        {applicant.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-outline font-bold">{tag}</span>
                        ))}
                      </div>
                    )}

                    {applicant.type && (
                      <div className="flex items-center gap-2 mb-4 bg-primary-fixed/30 p-2 rounded-lg">
                        <Video className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold text-primary">{applicant.type}</span>
                      </div>
                    )}

                    {applicant.status && (
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-lg border border-outline-variant/20">
                        <FileCheck className="w-3 h-3 text-outline" />
                        <span className="text-[10px] font-bold text-on-surface-variant">{applicant.status}</span>
                      </div>
                    )}

                    {applicant.progress !== undefined && (
                      <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden mb-4">
                        <div className="bg-primary h-full" style={{ width: `${applicant.progress}%` }}></div>
                      </div>
                    )}

                    {applicant.isOffer && (
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-on-surface-variant">Base Salary</span>
                          <span className="font-bold text-on-surface">£105,000</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-on-surface-variant">Equity</span>
                          <span className="font-bold text-on-surface">0.05%</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <Link to={`/applicants/${applicant.id}`} className="text-[11px] font-medium text-primary hover:underline cursor-pointer">
                        {applicant.isOffer ? 'View Offer Document' : applicant.status ? 'Scorecard' : 'View Portfolio'}
                      </Link>
                      {applicant.badge && (
                        <span className="text-[10px] text-tertiary-container font-bold px-1.5 py-0.5 rounded bg-tertiary-container/5">{applicant.badge}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
