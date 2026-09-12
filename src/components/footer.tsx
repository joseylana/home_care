const Footer = () => {
  return (
    <footer className='border-t border-[#cfe8e6] bg-[linear-gradient(135deg,#e5f4f1_0%,#f5fbfa_55%,#fff0e7_100%)] px-6 py-12 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]'>
          <div className='text-left'>
            <a href='#' className='logo-font text-3xl text-[#006d6f]'>Care Connect</a>
            <p className='body-font mt-4 max-w-sm text-sm leading-6 text-[#647171]'>
              Compassionate home care that helps families feel supported, connected, and at ease.
            </p>
          </div>

          <div className='text-left'>
            <h2 className='nav-item text-[10px] tracking-[0.2em] text-[#006d6f]'>EXPLORE</h2>
            <nav className='mt-4 flex flex-col items-start gap-3'>
              <a href='#' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>Home</a>
              <a href='#services' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>Services</a>
              <a href='#works' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>How it works</a>
              <a href='#about' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>About Us</a>
            </nav>
          </div>

          <div className='text-left'>
            <h2 className='nav-item text-[10px] tracking-[0.2em] text-[#006d6f]'>GET IN TOUCH</h2>
            <div className='body-font mt-4 space-y-3 text-sm leading-6 text-[#647171]'>
              <p>info@careconnect.com</p>
              <p>+234 800 123 4567</p>
              <p>Mon - Fri, 8:00am - 5:00pm</p>
              <p>Weekends, 10:00am - 4:00pm</p>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-[#dfeae8] pt-5 text-left'>
          <p className='body-font text-xs text-[#809090]'>&copy; 2026 Care Connect. Home is a place; we are your home.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
