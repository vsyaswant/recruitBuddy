import React from 'react';
import { TrendingUp, Timer, Briefcase, MoreVertical, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Talent Overview</h1>
          <p className="text-on-surface-variant font-medium">Monday, October 24 — You have 3 interviews today.</p>
        </div>
        <Link 
          to="/jobs/new"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
        >
          Post New Job
        </Link>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase">Volume</span>
            <TrendingUp className="w-5 h-5 text-outline-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="mt-8">
            <h3 className="text-5xl font-extrabold tracking-tighter text-primary">1,284</h3>
            <p className="text-on-surface-variant text-sm mt-1 font-medium">Total Applicants this month</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
            <span>+12.5% from last month</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between border border-outline-variant/10 hover:bg-surface-bright transition-all"
        >
          <div>
            <Timer className="w-6 h-6 text-tertiary-container mb-4" />
            <h3 className="text-3xl font-bold tracking-tight">18 Days</h3>
            <p className="text-on-surface-variant text-xs mt-2 font-medium">Avg. Time to Hire</p>
          </div>
          <div className="w-full h-1 bg-outline-variant/20 rounded-full mt-4 overflow-hidden">
            <div className="w-3/4 h-full bg-tertiary-container"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between border border-outline-variant/10 hover:bg-surface-bright transition-all"
        >
          <Link to="/jobs" className="block">
            <Briefcase className="w-6 h-6 text-primary mb-4" />
            <h3 className="text-3xl font-bold tracking-tight">24</h3>
            <p className="text-on-surface-variant text-xs mt-2 font-medium">Open Positions</p>
          </Link>
          <div className="mt-4 flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold text-white">
              +8
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Applicants */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Recent Applicants</h2>
            <Link to="/applicants" className="text-primary text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {[
              { id: '1', name: 'Adrian Thorne', role: 'Senior Frontend Engineer', source: 'LinkedIn', status: 'New', avatar: 'https://picsum.photos/seed/adrian/100/100' },
              { id: '2', name: 'Elena Moretti', role: 'Product Designer', source: 'Referral', status: 'In Review', avatar: 'https://picsum.photos/seed/elena/100/100' },
              { id: '3', name: 'Kevin Chen', role: 'Data Scientist', source: 'Indeed', status: 'Interviewing', avatar: 'https://picsum.photos/seed/kevin/100/100' },
            ].map((applicant, idx) => (
              <motion.div 
                key={applicant.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between group hover:translate-x-1 transition-all"
              >
                <Link to={`/applicants/${applicant.id}`} className="flex items-center gap-4 flex-1">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-surface-container">
                    <img 
                      src={applicant.avatar} 
                      alt={applicant.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{applicant.name}</h4>
                    <p className="text-xs text-on-surface-variant">{applicant.role}</p>
                  </div>
                </Link>
                <div className="flex items-center gap-8">
                  <div className="hidden md:block text-right">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Source</p>
                    <p className="text-sm font-medium">{applicant.source}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${
                    applicant.status === 'New' ? 'bg-primary-fixed text-on-primary-fixed' :
                    applicant.status === 'In Review' ? 'bg-surface-container-high text-on-surface-variant' :
                    'bg-secondary-container text-on-secondary-container'
                  }`}>
                    {applicant.status}
                  </span>
                  <button className="text-outline hover:text-primary transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Upcoming Interviews */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Upcoming Today</h2>
            <div className="space-y-4">
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline-variant/30"></div>
                <div className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-primary ring-4 ring-surface"></div>
                <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">10:00 AM — 11:00 AM</p>
                  <h5 className="font-bold text-sm">Technical Review: Adrian Thorne</h5>
                  <p className="text-xs text-on-surface-variant mt-1">with Sarah Jenkins (Eng Lead)</p>
                </div>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline-variant/30"></div>
                <div className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-outline-variant ring-4 ring-surface"></div>
                <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10 opacity-70">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">02:30 PM — 03:00 PM</p>
                  <h5 className="font-bold text-sm">Culture Fit: Marcus Aurelio</h5>
                  <p className="text-xs text-on-surface-variant mt-1">with HR Team</p>
                </div>
              </div>
            </div>
          </section>

          {/* Top Sourcing */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Top Sourcing</h2>
            <div className="bg-surface-container-lowest p-6 rounded-3xl space-y-5">
              {[
                { label: 'LinkedIn', value: 45, color: 'bg-primary' },
                { label: 'Internal Referrals', value: 32, color: 'bg-primary-container' },
                { label: 'Indeed', value: 18, color: 'bg-outline-variant' },
              ].map((channel) => (
                <div key={channel.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                    <span>{channel.label}</span>
                    <span>{channel.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${channel.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${channel.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
