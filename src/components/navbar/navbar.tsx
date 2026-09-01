const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className='bg-white shadow-md border-b border-[#e7e0db]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <div className='logo-font text-3xl text-[#006d6f]'>
          <a href='#'>Care Connect</a>
        </div>

        <nav className='hidden items-center text-[#006d6f] md:flex'>
          <ul className='flex items-center gap-8 list-none m-0 p-0'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='body-font text-sm tracking-[0.12em] text-[#006d6f] transition-colors hover:text-[#3dbca8]'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <button className='body-font rounded-md border border-[#006d6f] bg-white px-4 py-2 text-sm text-[#006d6f] transition-colors hover:bg-[#006d6f] hover:text-white'>
            Login
          </button>
          <button className='body-font rounded-md bg-[#006d6f] px-4 py-2 text-sm text-white transition-colors hover:bg-[#3dbca8]'>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
