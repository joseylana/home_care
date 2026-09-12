import { FiArrowUpRight, FiCalendar, FiClock, FiPlus, FiUsers } from 'react-icons/fi';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const visits = [
  { time: '09:00', client: 'Mrs. Grace Mensah', caregiver: 'Chidinma Eze', type: 'Morning care', color: 'bg-[#dff1ee]' },
  { time: '11:30', client: 'Mr. Daniel Cole', caregiver: 'Samuel Adeyemi', type: 'Wellness check', color: 'bg-[#fff0e7]' },
  { time: '14:00', client: 'Mrs. Beatrice Okoro', caregiver: 'Amina Yusuf', type: 'Medication support', color: 'bg-[#e8e8f7]' },
];

const AdminDashboard = () => (
  <DashboardLayout active='Overview' title='Good morning, Ada' subtitle='Monday, September 7, 2026 · Here is what needs your attention today.'>
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {[['Active clients', '24', '+3 this month', FiUsers], ['Visits today', '12', '4 completed', FiCalendar], ['Care team', '18', '2 unavailable', FiUsers], ['Open tasks', '07', '2 due today', FiClock]].map(([label, value, note, Icon]) => { const StatIcon = Icon as typeof FiUsers; return <article key={label as string} className='rounded-xl border border-[#dfeae8] bg-white p-5 text-left'><div className='flex items-center justify-between'><span className='text-sm text-[#647171]'>{label as string}</span><span className='flex h-9 w-9 items-center justify-center rounded-lg bg-[#e5f4f1] text-[#006d6f]'><StatIcon size={18} /></span></div><p className='mt-5 text-3xl font-bold text-[#1d2d2d]'>{value as string}</p><p className='mt-1 text-xs text-[#3d918d]'>{note as string}</p></article>; })}
    </div>
    <div className='mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]'>
      <section className='rounded-xl border border-[#dfeae8] bg-white p-6 text-left'><div className='flex items-center justify-between'><div><p className='nav-item text-[10px] text-[#006d6f]'>TODAY</p><h3 className='mt-2 text-xl font-bold'>Upcoming visits</h3></div><a href='#schedule' className='flex items-center gap-1 text-sm font-medium text-[#006d6f]'>View schedule <FiArrowUpRight /></a></div><div className='mt-6 divide-y divide-[#edf1f0]'>{visits.map((visit) => <div key={visit.time} className='flex items-center gap-4 py-4 first:pt-0 last:pb-0'><span className='w-12 text-sm font-semibold text-[#647171]'>{visit.time}</span><span className={`h-10 w-1 rounded-full ${visit.color}`} /><div className='flex-1'><p className='font-semibold text-[#1d2d2d]'>{visit.client}</p><p className='mt-1 text-xs text-[#7a8988]'>{visit.type} · {visit.caregiver}</p></div><span className='hidden rounded-full bg-[#e5f4f1] px-3 py-1 text-xs font-medium text-[#006d6f] sm:inline-flex'>Scheduled</span></div>)}</div></section>
      <section className='rounded-xl border border-[#dfeae8] bg-[#006d6f] p-6 text-left text-white'><div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white/15'><FiPlus size={19} /></div><h3 className='mt-8 text-xl font-bold'>Keep the care circle moving</h3><p className='mt-3 text-sm leading-6 text-[#d8efec]'>Add a client, assign a caregiver, or create a visit in a few steps.</p><div className='mt-8 space-y-2'><a href='#clients' className='flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#006d6f]'>Add a client <FiArrowUpRight /></a><a href='#schedule' className='flex items-center justify-between rounded-lg border border-white/30 px-4 py-3 text-sm font-medium text-white'>Schedule a visit <FiArrowUpRight /></a></div></section>
    </div>
  </DashboardLayout>
);

export default AdminDashboard;
