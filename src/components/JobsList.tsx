import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Users, 
  User,
  ShieldCheck,
  ChevronRight,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function JobsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const jobs = [
    { 
      id: 'ATS-PR-2024-082', 
      title: 'Senior Experience Designer', 
      status: 'Active', 
      applicants: 14, 
      hiringManager: 'Eleanor Shellstrop', 
      hrPartner: 'Chidi Anagonye',
      location: 'London, UK',
      postedAt: '2 weeks ago'
    },
    { 
      id: 'ATS-PR-2024-085', 
      title: 'ML Engineer (Search)', 
      status: 'Active', 
      applicants: 8, 
      hiringManager: 'Michael Scott', 
      hrPartner: 'Pam Beesly',
      location: 'Remote',
      postedAt: '1 week ago'
    },
    { 
      id: 'ATS-PR-2024-090', 
      title: 'Backend Engineer (Node.js)', 
      status: 'Active', 
      applicants: 45, 
      hiringManager: 'Tahani Al-Jamil', 
      hrPartner: 'Janet',
      location: 'New York, US',
      postedAt: '3 days ago'
    },
    { 
      id: 'ATS-PR-2024-092', 
      title: 'Growth Marketing Lead', 
      status: 'Active', 
      applicants: 8, 
      hiringManager: 'Jason Mendoza', 
      hrPartner: 'Bad Janet',
      location: 'Jacksonville, FL',
      postedAt: '5 days ago'
    },
    { 
      id: 'ATS-PR-2024-095', 
      title: 'Senior Product Designer', 
      status: 'Draft', 
      applicants: 0, 
      hiringManager: 'Eleanor Shellstrop', 
      hrPartner: 'Chidi Anagonye',
      location: 'London, UK',
      postedAt: 'Just now'
    },
  ];

  const filteredJobs = jobs.filter(j => 
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    j.hiringManager.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Job Postings</h1>
          <p className="text-on-surface-variant font-medium">Manage your active roles and recruitment parameters.</p>
        </div>
        <Link 
          to="/jobs/new"
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5" />
          Post New Job
        </Link>
      </section>

      {/* Filters & Search */}
      <section className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by job title or manager..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl border border-outline-variant/10">
          <button 
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2.5 rounded-xl transition-all",
              viewMode === 'list' ? "bg-white shadow-sm text-primary" : "text-outline hover:text-on-surface"
            )}
          >
            <ListIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2.5 rounded-xl transition-all",
              viewMode === 'grid' ? "bg-white shadow-sm text-primary" : "text-outline hover:text-on-surface"
            )}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl font-semibold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </section>

      {/* Jobs List/Grid */}
      {viewMode === 'list' ? (
        <section className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 border-b border-outline-variant/10">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Job Details</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Applicants</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Stakeholders</th>
                  <th className="px-6 py-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filteredJobs.map((job, idx) => (
                  <motion.tr 
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group hover:bg-surface-container-low/30 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <Link to={`/jobs/${job.id}`} className="block">
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">{job.title}</p>
                        <p className="text-xs text-on-surface-variant font-medium">{job.id} • {job.location}</p>
                      </Link>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        job.status === 'Active' ? "bg-green-100 text-green-700" : "bg-surface-container-high text-on-surface-variant"
                      )}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm font-bold text-on-surface">
                        <Users className="w-4 h-4 text-outline" />
                        {job.applicants}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-on-surface">
                          <User className="w-3 h-3 text-primary" />
                          <span className="text-on-surface-variant">HM:</span> {job.hiringManager}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-on-surface">
                          <ShieldCheck className="w-3 h-3 text-secondary" />
                          <span className="text-on-surface-variant">HR:</span> {job.hrPartner}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          to={`/jobs/${job.id}`}
                          className="p-2 rounded-xl text-outline hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                        <button className="p-2 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container-high transition-all">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  job.status === 'Active' ? "bg-green-100 text-green-700" : "bg-surface-container-high text-on-surface-variant"
                )}>
                  {job.status}
                </span>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <Link to={`/jobs/${job.id}`} className="block mb-6">
                <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-1">{job.title}</h3>
                <p className="text-xs text-on-surface-variant font-medium">{job.id} • {job.location}</p>
              </Link>

              <div className="grid grid-cols-2 gap-4 mb-6 border-y border-outline-variant/5 py-4">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Applicants</p>
                  <p className="text-lg font-bold text-primary">{job.applicants}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Posted</p>
                  <p className="text-sm font-medium text-on-surface">{job.postedAt}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
                    <User className="w-4 h-4 text-on-primary-fixed" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Hiring Manager</p>
                    <p className="text-xs font-semibold text-on-surface">{job.hiringManager}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-on-secondary-container" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">HR Partner</p>
                    <p className="text-xs font-semibold text-on-surface">{job.hrPartner}</p>
                  </div>
                </div>
              </div>

              <Link 
                to={`/jobs/${job.id}`}
                className="mt-6 w-full py-3 bg-surface-container-low text-primary font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
              >
                View Pipeline
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </section>
      )}

      {filteredJobs.length === 0 && (
        <div className="py-20 text-center bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant/30">
          <p className="text-on-surface-variant font-medium">No jobs found matching your search.</p>
        </div>
      )}
    </div>
  );
}
