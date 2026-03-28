import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  ExternalLink,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ApplicantsList() {
  const [searchQuery, setSearchQuery] = useState('');

  const applicants = [
    { id: '1', name: 'Adrian Thorne', role: 'Senior Frontend Engineer', job: 'Senior Experience Designer', status: 'Interviewing', appliedAt: '2 days ago', avatar: 'https://picsum.photos/seed/adrian/100/100' },
    { id: '2', name: 'Elena Moretti', role: 'Product Designer', job: 'Senior Experience Designer', status: 'In Review', appliedAt: '4 days ago', avatar: 'https://picsum.photos/seed/elena/100/100' },
    { id: '3', name: 'Kevin Chen', role: 'Data Scientist', job: 'ML Engineer (Search)', status: 'Interviewing', appliedAt: '1 week ago', avatar: 'https://picsum.photos/seed/kevin/100/100' },
    { id: '4', name: 'Sasha Kovic', role: 'UX Researcher', job: 'Senior Experience Designer', status: 'Interviewing', appliedAt: '3 days ago', avatar: 'https://picsum.photos/seed/sasha/100/100' },
    { id: '5', name: 'Thomas Wright', role: 'Backend Developer', job: 'Backend Engineer (Node.js)', status: 'Background Check', appliedAt: '2 weeks ago', avatar: 'https://picsum.photos/seed/thomas/100/100' },
    { id: '6', name: 'Isabella Chen', role: 'Product Lead', job: 'Growth Marketing Lead', status: 'Offer Made', appliedAt: '5 days ago', avatar: 'https://picsum.photos/seed/isabella/100/100' },
    { id: '7', name: 'Marcus Aurelio', role: 'HR Specialist', job: 'People Operations', status: 'Screening', appliedAt: 'Today', avatar: 'https://picsum.photos/seed/marcus/100/100' },
  ];

  const filteredApplicants = applicants.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.job.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Applicant Pool</h1>
          <p className="text-on-surface-variant font-medium">Manage and track your global talent pipeline.</p>
        </div>
        <Link 
          to="/applicants/onboard"
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Onboard New Applicant
        </Link>
      </section>

      {/* Filters & Search */}
      <section className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by name, role, or job..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl font-semibold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </section>

      {/* Applicants List */}
      <section className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/10">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Applicant</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Tagged Job</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Applied</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {filteredApplicants.map((applicant, idx) => (
                <motion.tr 
                  key={applicant.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-surface-container-low/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <Link to={`/applicants/${applicant.id}`} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-container flex-shrink-0">
                        <img src={applicant.avatar} alt={applicant.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">{applicant.name}</p>
                        <p className="text-xs text-on-surface-variant">{applicant.role}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-on-surface">
                      <Briefcase className="w-4 h-4 text-outline" />
                      {applicant.job}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      applicant.status === 'Offer Made' ? "bg-green-100 text-green-700" :
                      applicant.status === 'Interviewing' ? "bg-blue-100 text-blue-700" :
                      applicant.status === 'Background Check' ? "bg-purple-100 text-purple-700" :
                      "bg-surface-container-high text-on-surface-variant"
                    )}>
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">
                    {applicant.appliedAt}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        to={`/applicants/${applicant.id}`}
                        className="p-2 rounded-xl text-outline hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
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
        
        {filteredApplicants.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-on-surface-variant font-medium">No applicants found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
