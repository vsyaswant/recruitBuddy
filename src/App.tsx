import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ApplicantsList from './components/ApplicantsList';
import OnboardApplicant from './components/OnboardApplicant';
import JobsList from './components/JobsList';
import CreateJob from './components/CreateJob';
import JobPipeline from './components/JobPipeline';
import ApplicantDetails from './components/ApplicantDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applicants" element={<ApplicantsList />} />
          <Route path="/applicants/onboard" element={<OnboardApplicant />} />
          <Route path="/applicants/:id" element={<ApplicantDetails />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<CreateJob />} />
          <Route path="/jobs/:id" element={<JobPipeline />} />
          <Route path="/reports" element={<div className="flex items-center justify-center h-[60vh] text-slate-400 font-medium">Reports view coming soon</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
