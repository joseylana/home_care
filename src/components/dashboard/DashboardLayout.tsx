import type { ReactNode } from 'react';
import { FiBell, FiCalendar, FiClipboard, FiGrid, FiLogOut, FiMenu, FiUsers } from 'react-icons/fi';

type DashboardLayoutProps = {
  active: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

const navItems = [
  { label: 'Overview', href: '#admin', icon: FiGrid },
  { label: 'Schedule', href: '#schedule', icon: FiCalendar },
  { label: 'Clients', href: '#clients', icon: FiUsers },
  { label: 'Care reports', href: '#reports', icon: FiClipboard },
];

const DashboardLayout = ({ active, title, subtitle, children }: DashboardLayoutProps) => (
  <div className='body-font min-h-screen bg-[#f4f8f7] text-[#1d2d2d]'>
    <aside className='fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-[#dfeae8] bg-white lg:flex'>
      <a href='#' className='logo-font px-8 py-7 text-3xl text-[#006d6f]'>Care Connect</a>
      <div className='px-5 pb-5'>
        <div className='flex items-center gap-3 rounded-xl bg-[#f5fbfa] px-4 py-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#006d6f] text-sm font-bold text-white'>AO</div>
          <div className='min-w-0 text-left'><p className='truncate text-sm font-semibold text-[#1d2d2d]'>Ada Okafor</p><p className='text-xs text-[#7a8988]'>Care coordinator</p></div>
        </div>
      </div>
      <nav className='flex-1 px-4'>
        <p className='nav-item px-3 pb-3 pt-4 text-[10px] text-[#8b9897]'>Workspace</p>
        <div className='space-y-1'>{navItems.map(({ label, href, icon: Icon }) => <a key={label} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${active === label ? 'bg-[#e5f4f1] font-semibold text-[#006d6f]' : 'text-[#647171] hover:bg-[#f5fbfa] hover:text-[#006d6f]'}`}><Icon size={18} aria-hidden='true' />{label}</a>)}</div>
      </nav>
      <div className='border-t border-[#edf1f0] p-4'><a href='#' className='flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#647171] hover:bg-[#f5fbfa] hover:text-[#006d6f]'><FiLogOut size={18} aria-hidden='true' />Sign out</a></div>
    </aside>

    <div className='lg:pl-64'>
      <header className='sticky top-0 z-10 flex items-center justify-between border-b border-[#dfeae8] bg-white/95 px-5 py-4 backdrop-blur sm:px-8'>
        <div className='flex items-center gap-3'><button type='button' className='text-[#006d6f] lg:hidden' aria-label='Open navigation'><FiMenu size={22} /></button><div className='lg:hidden'><a href='#' className='logo-font text-2xl text-[#006d6f]'>Care Connect</a></div><div className='hidden lg:block'><p className='nav-item text-[10px] text-[#8b9897]'>CARE MANAGEMENT</p><h1 className='mt-1 text-xl font-bold text-[#1d2d2d]'>{title}</h1></div></div>
        <div className='flex items-center gap-4'><button type='button' aria-label='Notifications' className='relative text-[#647171] hover:text-[#006d6f]'><FiBell size={19} /><span className='absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e28e68]' /></button><div className='hidden h-8 w-px bg-[#dfeae8] sm:block' /><div className='flex h-9 w-9 items-center justify-center rounded-full bg-[#f4d9c6] text-xs font-bold text-[#7b4b34]'>AO</div></div>
      </header>
      <main className='mx-auto max-w-7xl px-5 py-8 sm:px-8'><div className='mb-8 text-left'><p className='text-sm text-[#7a8988]'>{subtitle}</p><h2 className='mt-1 text-3xl font-bold text-[#1d2d2d] lg:hidden'>{title}</h2></div>{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
