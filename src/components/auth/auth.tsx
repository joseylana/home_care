import { useState } from 'react';
import type { FormEvent } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { FiArrowLeft, FiEye, FiEyeOff, FiShield, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';

type AuthProps = { mode: 'login' | 'signup' };
type UserRole = 'admin' | 'customer' | null;

const Auth = ({ mode }: AuthProps) => {
  const isSignup = mode === 'signup';
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    // Here you would typically send data to a backend
    console.log('Form submitted:', { userRole, ...formData });
    setTimeout(() => {
      // Redirect based on role
      if (userRole === 'admin') {
        window.location.hash = '#admin-dashboard';
      } else {
        window.location.hash = '#dashboard';
      }
    }, 1500);
  };

  // Role Selection Screen
  if (!userRole) {
    return (
      <main className='body-font min-h-screen bg-[#f5fbfa] text-[#1d2d2d]'>
        <div className='mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[0.9fr_1.1fr]'>
          {/* Left Section - Branding */}
          <section className='relative hidden overflow-hidden bg-[#006d6f] px-12 py-12 text-left text-white lg:flex lg:flex-col lg:justify-between'>
            <a href='#' className='logo-font relative text-4xl'>Care Connect</a>
            <div className='relative max-w-md'>
              <FiShield className='mb-8 text-4xl text-[#f4d9c6]' />
              <p className='nav-item text-xs tracking-[0.22em] text-[#b7e0da]'>CARE, CONNECTED</p>
              <h1 className='body-font mt-5 text-5xl font-bold leading-tight'>
                A calmer way to care for the people who matter.
              </h1>
              <p className='mt-6 text-base leading-7 text-[#d8efec]'>
                Keep visits, trusted caregivers, and everyday care plans in one reassuring place.
              </p>
            </div>
            <p className='relative text-sm text-[#b7e0da]'>Simple tools for better days at home.</p>
          </section>

          {/* Right Section - Role Selection */}
          <section className='flex items-center justify-center px-6 py-10 sm:px-10'>
            <div className='w-full max-w-md text-left'>
              <a href='#' className='mb-10 inline-flex items-center gap-2 text-sm text-[#647171] hover:text-[#006d6f] transition-colors'>
                <FiArrowLeft /> Back to home
              </a>

              <div className='mb-8'>
                <p className='nav-item text-xs tracking-[0.2em] text-[#006d6f]'>SELECT YOUR ROLE</p>
                <h2 className='body-font mt-3 text-4xl font-bold text-[#1d2d2d]'>
                  {isSignup ? 'Join as' : 'Sign in as'}
                </h2>
                <p className='mt-3 text-base leading-7 text-[#647171]'>
                  {isSignup
                    ? 'Choose your role to create your account.'
                    : 'Select your role to continue.'}
                </p>
              </div>

              <div className='space-y-4'>
                {/* Admin Role Card */}
                <button
                  onClick={() => setUserRole('admin')}
                  className='w-full rounded-xl border-2 border-[#dfeae8] bg-white p-6 text-left transition-all duration-300 hover:border-[#006d6f] hover:bg-[#f5fbfa] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f] mb-4'>
                    <FiUser size={24} />
                  </div>
                  <h3 className='body-font text-lg font-bold text-[#1d2d2d]'>Care Coordinator</h3>
                  <p className='body-font mt-2 text-sm text-[#647171]'>
                    Manage clients, caregivers, schedules, and track care activities.
                  </p>
                </button>

                {/* Customer Role Card */}
                <button
                  onClick={() => setUserRole('customer')}
                  className='w-full rounded-xl border-2 border-[#dfeae8] bg-white p-6 text-left transition-all duration-300 hover:border-[#006d6f] hover:bg-[#f5fbfa] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0e7] text-[#b7673c] mb-4'>
                    <FiUser size={24} />
                  </div>
                  <h3 className='body-font text-lg font-bold text-[#1d2d2d]'>Family Member</h3>
                  <p className='body-font mt-2 text-sm text-[#647171]'>
                    Find caregivers, book services, and stay connected with your care team.
                  </p>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  // Auth Form Screen
  return (
    <main className='body-font min-h-screen bg-[#f5fbfa] text-[#1d2d2d]'>
      <div className='mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[0.9fr_1.1fr]'>
        {/* Left Section - Branding */}
        <section className='relative hidden overflow-hidden bg-[#006d6f] px-12 py-12 text-left text-white lg:flex lg:flex-col lg:justify-between'>
          <a href='#' className='logo-font relative text-4xl'>Care Connect</a>
          <div className='relative max-w-md'>
            <FiShield className='mb-8 text-4xl text-[#f4d9c6]' />
            <p className='nav-item text-xs tracking-[0.22em] text-[#b7e0da]'>CARE, CONNECTED</p>
            <h1 className='body-font mt-5 text-5xl font-bold leading-tight'>
              A calmer way to care for the people who matter.
            </h1>
            <p className='mt-6 text-base leading-7 text-[#d8efec]'>
              Keep visits, trusted caregivers, and everyday care plans in one reassuring place.
            </p>
          </div>
          <p className='relative text-sm text-[#b7e0da]'>Simple tools for better days at home.</p>
        </section>

        {/* Right Section - Form */}
        <section className='flex items-center justify-center px-6 py-10 sm:px-10'>
          <div className='w-full max-w-md text-left'>
            <button
              onClick={() => setUserRole(null)}
              className='mb-10 inline-flex items-center gap-2 text-sm text-[#647171] hover:text-[#006d6f] transition-colors'
            >
              <FiArrowLeft /> Change role
            </button>

            <div className='mb-8'>
              <p className='nav-item text-xs tracking-[0.2em] text-[#006d6f]'>
                {isSignup ? 'WELCOME TO CARE CONNECT' : 'WELCOME BACK'}
              </p>
              <h2 className='body-font mt-3 text-4xl font-bold text-[#1d2d2d]'>
                {isSignup ? 'Create your account' : 'Sign in to your account'}
              </h2>
              <p className='mt-3 text-base leading-7 text-[#647171]'>
                {isSignup
                  ? 'Start building a more supported care routine today.'
                  : 'Your care circle is waiting for you.'}
              </p>
              <p className='mt-4 inline-flex rounded-full bg-[#e5f4f1] px-3 py-1 text-xs font-medium text-[#006d6f] tracking-[0.1em]'>
                {userRole === 'admin' ? 'Care Coordinator' : 'Family Member'}
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className='grid grid-cols-2 gap-3 mb-6'>
              <button
                type='button'
                className='flex items-center justify-center gap-2 rounded-md border border-[#dfeae8] bg-white px-4 py-3 text-sm hover:bg-[#f9f6f2] transition-colors'
              >
                <FaGoogle className='text-[#db4437]' /> Google
              </button>
              <button
                type='button'
                className='flex items-center justify-center gap-2 rounded-md border border-[#dfeae8] bg-white px-4 py-3 text-sm hover:bg-[#f9f6f2] transition-colors'
              >
                <FaApple className='text-lg' /> Apple
              </button>
            </div>

            {/* Divider */}
            <div className='mb-6 flex items-center gap-3'>
              <div className='flex-1 border-t border-[#dfeae8]'></div>
              <span className='body-font text-xs text-[#647171]'>Or continue with email</span>
              <div className='flex-1 border-t border-[#dfeae8]'></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-4'>
              {isSignup && (
                <div>
                  <label htmlFor='fullName' className='body-font block text-sm font-medium text-[#1d2d2d] mb-2'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <FiUser className='absolute left-3 top-3 text-[#647171]' size={18} />
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder='John Doe'
                      required={isSignup}
                      className='w-full rounded-md border border-[#dfeae8] bg-white py-3 pl-10 pr-4 text-sm placeholder-[#809090] transition-colors focus:border-[#006d6f] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                    />
                  </div>
                </div>
              )}

              {isSignup && (
                <div>
                  <label htmlFor='phone' className='body-font block text-sm font-medium text-[#1d2d2d] mb-2'>
                    Phone Number
                  </label>
                  <div className='relative'>
                    <FiPhone className='absolute left-3 top-3 text-[#647171]' size={18} />
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='+234 800 123 4567'
                      className='w-full rounded-md border border-[#dfeae8] bg-white py-3 pl-10 pr-4 text-sm placeholder-[#809090] transition-colors focus:border-[#006d6f] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor='email' className='body-font block text-sm font-medium text-[#1d2d2d] mb-2'>
                  Email Address
                </label>
                <div className='relative'>
                  <FiMail className='absolute left-3 top-3 text-[#647171]' size={18} />
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@example.com'
                    required
                    className='w-full rounded-md border border-[#dfeae8] bg-white py-3 pl-10 pr-4 text-sm placeholder-[#809090] transition-colors focus:border-[#006d6f] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='body-font block text-sm font-medium text-[#1d2d2d] mb-2'>
                  Password
                </label>
                <div className='relative'>
                  <FiLock className='absolute left-3 top-3 text-[#647171]' size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='••••••••'
                    required
                    className='w-full rounded-md border border-[#dfeae8] bg-white py-3 pl-10 pr-10 text-sm placeholder-[#809090] transition-colors focus:border-[#006d6f] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-3 text-[#647171] hover:text-[#006d6f]'
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {isSignup && (
                <div>
                  <label htmlFor='confirmPassword' className='body-font block text-sm font-medium text-[#1d2d2d] mb-2'>
                    Confirm Password
                  </label>
                  <div className='relative'>
                    <FiLock className='absolute left-3 top-3 text-[#647171]' size={18} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id='confirmPassword'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder='••••••••'
                      required={isSignup}
                      className='w-full rounded-md border border-[#dfeae8] bg-white py-3 pl-10 pr-10 text-sm placeholder-[#809090] transition-colors focus:border-[#006d6f] focus:outline-none focus:ring-2 focus:ring-[#006d6f] focus:ring-opacity-10'
                    />
                    <button
                      type='button'
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className='absolute right-3 top-3 text-[#647171] hover:text-[#006d6f]'
                    >
                      {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {!isSignup && (
                <div className='flex items-center justify-between'>
                  <label className='flex items-center gap-2'>
                    <input type='checkbox' className='rounded border-[#dfeae8]' />
                    <span className='body-font text-sm text-[#647171]'>Remember me</span>
                  </label>
                  <a href='#' className='body-font text-sm text-[#006d6f] hover:text-[#3dbca8] transition-colors'>
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type='submit'
                disabled={submitted}
                className='w-full rounded-md bg-[#006d6f] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3dbca8] disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {submitted ? (isSignup ? 'Creating account...' : 'Signing in...') : (isSignup ? 'Create account' : 'Sign in')}
              </button>
            </form>

            {/* Sign Up / Login Link */}
            <div className='mt-6 border-t border-[#dfeae8] pt-6 text-center'>
              <p className='body-font text-sm text-[#647171]'>
                {isSignup ? "Already have an account? " : "Don't have an account? "}
                <a
                  href={isSignup ? '#login' : '#signup'}
                  className='font-medium text-[#006d6f] hover:text-[#3dbca8] transition-colors'
                >
                  {isSignup ? 'Sign in' : 'Sign up'}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
