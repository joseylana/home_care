const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
    },
    {
      name: 'Services',
    },
    {
      name: 'How it Works',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ];

  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='logo-font text-3xl text-[#006d6f]'>
        <a href="#">Care Connect</a>
      </div>
      <nav className='flex items-center text-[#006d6f]'>
        <ul className='flex items-center gap-6 list-none m-0 p-0'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className='hover:text-[#3dbca8]'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center'>
        <button className='bg-[#006d6f] text-white py-2 px-4 rounded-md hover:bg-[#3dbca8]'>
          Login
        </button>
      </div>
      <div className='flex items-center'>
        <button className='bg-[#006d6f] text-white py-2 px-4 rounded-md hover:bg-[#3dbca8]'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
