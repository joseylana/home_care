const Footer = () => {
  return (
    <footer className='border-t border-[#dfeae8] bg-[#f5fbfa] px-6 py-12 lg:px-10'>
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
              <a href='#' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>Services</a>
              <a href='#' className='body-font text-sm text-[#647171] transition-colors hover:text-[#006d6f]'>How it works</a>
            </nav>
          </div>

          <div className='text-left'>
            <h2 className='nav-item text-[10px] tracking-[0.2em] text-[#006d6f]'>GET IN TOUCH</h2>
            <div className='body-font mt-4 space-y-3 text-sm leading-6 text-[#647171]'>
              <p>hello@careconnect.com</p>
              <p>+234 800 123 4567</p>
              <p>Mon - Fri, 8:00am - 5:00pm</p>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-[#dfeae8] pt-5 text-left'>
          <p className='body-font text-xs text-[#809090]'>&copy; 2026 Care Connect. Caring starts at home.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
