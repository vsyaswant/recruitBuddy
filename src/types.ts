export interface Applicant {
  id: string;
  name: string;
  role: string;
  avatar: string;
  source: string;
  status: 'New' | 'In Review' | 'Interviewing' | 'Offer Made' | 'Hired' | 'Rejected';
  appliedAt: string;
  tags?: string[];
}

export interface Interview {
  id: string;
  title: string;
  time: string;
  participants: string;
  status: 'upcoming' | 'completed';
}

export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  applicantsCount: number;
  status: 'Active' | 'Draft' | 'Closed';
}
