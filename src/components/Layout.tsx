import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, BarChart3, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Jobs', path: '/jobs', icon: Briefcase },
    { name: 'Applicants', path: '/applicants', icon: Users },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-slate-50/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkbB9dP9nCa7GxyCOFUPyymDR-34SHpb2NFPgxQnGJ5DTDi707xCVcevaL6cwcMyjLeciPjaX-bh-rNApMgP8f3Yyjn_PGJxAG4ARETApNFHEzuAp0H3ZxSTUffGr7ujnD2JgKWxQrNf_OOjSXC_xob-1bgdbTYntTlmZpc5zhupj8L1speTNbczyr_Q4UnUIuugxEK-4inXkTAONrnuuGOOrxIq3bQU_eOgKOxBVZnEhMORycawmapSR3SGIY3UoyafjCrvWgNCw" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight font-headline">The Precision Curator</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = item.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(item.path);
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActive ? "text-primary font-semibold" : "text-slate-500"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-slate-200/50 transition-colors">
                <Search className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200/50 z-50">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-xl transition-all",
                  isActive 
                    ? "text-primary bg-primary/5" 
                    : "text-slate-400"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
