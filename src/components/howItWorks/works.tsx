import { FaCalendarCheck } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import { MdManageAccounts, MdSupervisorAccount } from "react-icons/md";
import careImage from '../../assets/supporting.jpg';

const steps = [
  {
    number: '01',
    title: 'Create an account',
    description: 'Sign up and choose your role (Admin or User).',
    icon: MdSupervisorAccount,
  },
  {
    number: '02',
    title: 'Add Clients and Caregivers',
    description: 'Add clients, caregivers and care details.',
    icon: IoMdAdd,
  },
  {
    number: '03',
    title: 'Schedule & plan',
    description: 'Schedule visits and plan care activities.',
    icon: FaCalendarCheck,
  },
  {
    number: '04',
    title: 'Track & manage',
    description: 'Monitor care progress and manage your schedule.',
    icon: MdManageAccounts,
  },
];

const Works = () => {
  return (
    <section className='border-y border-[#dfeae8] bg-[#f9f6f2] px-6 py-20 lg:px-10'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch'>
        <div className='overflow-hidden rounded-[28px] border border-[#dfeae8] bg-[#e5f4f1] p-3 shadow-[0_18px_45px_rgba(0,109,111,0.12)]'>
          <img
            src={careImage}
            alt='Caregiver spending time with a client at home'
            className='h-full min-h-[520px] w-full rounded-[20px] object-cover object-center'
          />
        </div>

        <div>
          <div className='mb-10 max-w-xl text-left'>
            <span className='nav-item inline-flex rounded-full bg-[#dff1ee] px-3 py-1 text-[10px] tracking-[0.2em] text-[#006d6f]'>HOW IT WORKS</span>
            <h1 className='body-font mt-5 text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>How to get started</h1>
            <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
              Getting dependable care at home should feel clear, personal, and reassuring from the very first conversation.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className='group flex min-h-[220px] flex-col rounded-2xl border border-[#e7e0db] bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#a9d4cf] hover:shadow-[0_14px_30px_rgba(0,109,111,0.1)]'>
                <div className='flex items-center justify-between'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f] transition-colors group-hover:bg-[#006d6f] group-hover:text-white'>
                  <Icon size={20} aria-hidden='true' />
                  </div>
                  <span className='nav-item text-xs tracking-[0.2em] text-[#a9d4cf]'>{step.number}</span>
                </div>
                <h3 className='body-font mt-8 text-xl font-bold text-[#1d2d2d]'>{step.title}</h3>
                <p className='body-font mt-3 text-sm leading-6 text-[#647171]'>{step.description}</p>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
