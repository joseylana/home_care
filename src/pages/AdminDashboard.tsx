import { FiArrowUpRight, FiCalendar, FiClock, FiPlus, FiUsers, FiAlertCircle, FiGrid, FiMenu, FiLogOut, FiBell } from 'react-icons/fi';
import { FaChartBar, FaUser } from 'react-icons/fa';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Clients', value: '48', change: '+5 this month', icon: FiUsers },
    { label: 'Active Caregivers', value: '32', change: '2 unavailable', icon: FiUsers },
    { label: 'Scheduled Visits', value: '156', change: '28 this week', icon: FiCalendar },
    { label: 'Tasks Pending', value: '12', change: '3 overdue', icon: FiClock },
  ];

  const recentClients = [
    { name: 'Mrs. Grace Mensah', status: 'Active', lastVisit: '2 hours ago', visits: 45 },
    { name: 'Mr. Daniel Cole', status: 'Active', lastVisit: 'Yesterday', visits: 32 },
    { name: 'Mrs. Beatrice Okoro', status: 'Active', lastVisit: '3 days ago', visits: 18 },
    { name: 'Mr. Kwame Asante', status: 'Inactive', lastVisit: '2 weeks ago', visits: 5 },
  ];

  const upcomingVisits = [
    { time: '09:00', client: 'Mrs. Grace Mensah', caregiver: 'Chidinma Eze', type: 'Morning care' },
    { time: '11:30', client: 'Mr. Daniel Cole', caregiver: 'Samuel Adeyemi', type: 'Wellness check' },
    { time: '14:00', client: 'Mrs. Beatrice Okoro', caregiver: 'Amina Yusuf', type: 'Medication support' },
    { time: '16:30', client: 'Mr. Kwame Asante', caregiver: 'Chidinma Eze', type: 'Home support' },
  ];

  return (
    <div className='body-font min-h-screen bg-[#f4f8f7] text-[#1d2d2d]'>
      {/* Sidebar */}
      <aside className='fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-[#dfeae8] bg-white lg:flex'>
        <a href='#' className='logo-font px-8 py-7 text-3xl text-[#006d6f]'>Care Connect</a>
        <div className='px-5 pb-5'>
          <div className='flex items-center gap-3 rounded-xl bg-[#f5fbfa] px-4 py-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#006d6f] text-sm font-bold text-white'>
              AC
            </div>
            <div className='min-w-0 text-left'>
              <p className='truncate text-sm font-semibold text-[#1d2d2d]'>Admin Care</p>
              <p className='text-xs text-[#7a8988]'>Coordinator</p>
            </div>
          </div>
        </div>

        <nav className='flex-1 px-4'>
          <p className='nav-item px-3 pb-3 pt-4 text-[10px] text-[#8b9897]'>WORKSPACE</p>
          <div className='space-y-1'>
            {[
              { label: 'Dashboard', icon: FiGrid },
              { label: 'Clients', icon: FiUsers },
              { label: 'Caregivers', icon: FaUser },
              { label: 'Schedule', icon: FiCalendar },
              { label: 'Reports', icon: FaChartBar },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href='#'
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                  label === 'Dashboard'
                    ? 'bg-[#e5f4f1] font-semibold text-[#006d6f]'
                    : 'text-[#647171] hover:bg-[#f5fbfa] hover:text-[#006d6f]'
                }`}
              >
                <Icon size={18} aria-hidden='true' />
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className='border-t border-[#edf1f0] p-4'>
          <a href='#' className='flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#647171] hover:bg-[#f5fbfa] hover:text-[#006d6f]'>
            <FiLogOut size={18} aria-hidden='true' />
            Sign out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className='lg:pl-64'>
        {/* Header */}
        <header className='sticky top-0 z-10 flex items-center justify-between border-b border-[#dfeae8] bg-white/95 px-5 py-4 backdrop-blur sm:px-8'>
          <div className='flex items-center gap-3'>
            <button type='button' className='text-[#006d6f] lg:hidden' aria-label='Open navigation'>
              <FiMenu size={22} />
            </button>
            <div className='hidden lg:block'>
              <p className='nav-item text-[10px] text-[#8b9897]'>ADMIN DASHBOARD</p>
              <h1 className='mt-1 text-xl font-bold text-[#1d2d2d]'>Care Management System</h1>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <button type='button' aria-label='Notifications' className='relative text-[#647171] hover:text-[#006d6f]'>
              <FiBell size={19} />
              <span className='absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e28e68]' />
            </button>
            <div className='hidden h-8 w-px bg-[#dfeae8] sm:block' />
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f4f1] text-xs font-bold text-[#006d6f]'>
              AC
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className='mx-auto max-w-7xl px-5 py-8 sm:px-8'>
          <div className='mb-8 text-left'>
            <p className='text-sm text-[#7a8988]'>Monday, September 12, 2026</p>
            <h2 className='mt-1 text-3xl font-bold text-[#1d2d2d] lg:hidden'>Care Management System</h2>
          </div>

          {/* Statistics Cards */}
          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {stats.map(({ label, value, change, icon: Icon }) => (
              <article key={label} className='rounded-xl border border-[#dfeae8] bg-white p-5 text-left'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-[#647171]'>{label}</span>
                  <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-[#e5f4f1] text-[#006d6f]'>
                    <Icon size={18} />
                  </span>
                </div>
                <p className='mt-5 text-3xl font-bold text-[#1d2d2d]'>{value}</p>
                <p className='mt-1 text-xs text-[#3d918d]'>{change}</p>
              </article>
            ))}
          </div>

          {/* Main Grid */}
          <div className='mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]'>
            {/* Left Column */}
            <div className='space-y-6'>
              {/* Upcoming Visits */}
              <section className='rounded-xl border border-[#dfeae8] bg-white p-6 text-left'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='nav-item text-[10px] text-[#006d6f]'>TODAY</p>
                    <h3 className='mt-2 text-xl font-bold'>Upcoming Visits</h3>
                  </div>
                  <a href='#schedule' className='flex items-center gap-1 text-sm font-medium text-[#006d6f] transition-colors hover:text-[#3dbca8]'>
                    View all <FiArrowUpRight />
                  </a>
                </div>
                <div className='mt-6 divide-y divide-[#edf1f0]'>
                  {upcomingVisits.map((visit) => (
                    <div key={visit.time} className='flex items-center gap-4 py-4 first:pt-0 last:pb-0'>
                      <span className='w-12 text-sm font-semibold text-[#647171]'>{visit.time}</span>
                      <span className='h-10 w-1 rounded-full bg-[#dff1ee]' />
                      <div className='flex-1'>
                        <p className='font-semibold text-[#1d2d2d]'>{visit.client}</p>
                        <p className='mt-1 text-xs text-[#7a8988]'>
                          {visit.type} · {visit.caregiver}
                        </p>
                      </div>
                      <span className='hidden rounded-full bg-[#e5f4f1] px-3 py-1 text-xs font-medium text-[#006d6f] sm:inline-flex'>
                        Scheduled
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Clients List */}
              <section className='rounded-xl border border-[#dfeae8] bg-white p-6 text-left'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='nav-item text-[10px] text-[#006d6f]'>CLIENTS</p>
                    <h3 className='mt-2 text-xl font-bold'>Active Clients</h3>
                  </div>
                  <a href='#' className='flex items-center gap-1 text-sm font-medium text-[#006d6f] transition-colors hover:text-[#3dbca8]'>
                    View all <FiArrowUpRight />
                  </a>
                </div>
                <div className='mt-6 divide-y divide-[#edf1f0]'>
                  {recentClients.map((client) => (
                    <div key={client.name} className='flex items-center justify-between py-4 first:pt-0 last:pb-0'>
                      <div className='flex-1'>
                        <p className='font-semibold text-[#1d2d2d]'>{client.name}</p>
                        <p className='mt-1 text-xs text-[#7a8988]'>{client.visits} visits</p>
                      </div>
                      <div className='flex flex-col items-end'>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          client.status === 'Active'
                            ? 'bg-[#dff1ee] text-[#006d6f]'
                            : 'bg-[#f0f0f0] text-[#647171]'
                        }`}>
                          {client.status}
                        </span>
                        <p className='mt-2 text-xs text-[#7a8988]'>{client.lastVisit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className='space-y-6'>
              {/* Quick Actions */}
              <section className='rounded-xl border border-[#dfeae8] bg-[#006d6f] p-6 text-left text-white'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white/15'>
                  <FiPlus size={19} />
                </div>
                <h3 className='mt-8 text-xl font-bold'>Quick Actions</h3>
                <p className='mt-3 text-sm leading-6 text-[#d8efec]'>
                  Manage your care operations efficiently.
                </p>
                <div className='mt-8 space-y-2'>
                  <a href='#' className='flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#006d6f] transition-colors hover:bg-[#f9f6f2]'>
                    Add New Client <FiArrowUpRight />
                  </a>
                  <a href='#' className='flex items-center justify-between rounded-lg border border-white/30 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10'>
                    Schedule Visit <FiArrowUpRight />
                  </a>
                  <a href='#' className='flex items-center justify-between rounded-lg border border-white/30 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10'>
                    Add Caregiver <FiArrowUpRight />
                  </a>
                </div>
              </section>

              {/* System Status */}
              <section className='rounded-xl border border-[#dfeae8] bg-white p-6 text-left'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-bold'>System Status</h3>
                </div>
                <div className='mt-6 space-y-4'>
                  {[
                    { label: 'Care Team Availability', status: 'Good', color: 'text-[#06a96d]' },
                    { label: 'Schedule Coverage', status: 'Good', color: 'text-[#06a96d]' },
                    { label: 'Pending Approvals', status: '3 items', color: 'text-[#e28e68]' },
                    { label: 'Overdue Reports', status: '1 item', color: 'text-[#e28e68]' },
                  ].map((item) => (
                    <div key={item.label} className='flex items-center justify-between rounded-lg border border-[#edf1f0] p-4'>
                      <span className='text-sm text-[#647171]'>{item.label}</span>
                      <span className={`text-sm font-semibold ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Alerts */}
              <section className='rounded-xl border border-[#dfeae8] bg-white p-6 text-left'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-bold flex items-center gap-2'>
                    <FiAlertCircle className='text-[#e28e68]' />
                    Alerts
                  </h3>
                </div>
                <div className='mt-6 space-y-3'>
                  {[
                    { msg: 'Chidinma Eze marked unavailable for tomorrow', type: 'warning' },
                    { msg: 'New care report submitted for Mrs. Grace Mensah', type: 'info' },
                  ].map((alert, idx) => (
                    <div key={idx} className={`flex items-start gap-3 rounded-lg border p-3 ${
                      alert.type === 'warning'
                        ? 'border-[#fff0e7] bg-[#fffbf7]'
                        : 'border-[#e5f4f1] bg-[#f5fbfa]'
                    }`}>
                      <span className={`mt-1 ${alert.type === 'warning' ? 'text-[#b7673c]' : 'text-[#006d6f]'}`}>
                        {alert.type === 'warning' ? '⚠' : 'ℹ'}
                      </span>
                      <p className='text-xs text-[#647171]'>{alert.msg}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
