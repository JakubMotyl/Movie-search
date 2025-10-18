import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const navList = [
    {category: 'Movies', link: ''},
    {category: 'TV Shows', link: ''}, 
    {category: 'Upcoming', link: ''}, 
    {category: 'My List', link: '/mylist'}
  ]

  return (
    <nav className={`fixed w-full z-50 flex items-center justify-between duration-300 transition-colors
      py-2 md:py-3 px-10 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'} text-white`}
    >
      {/* Logo */}
      <div>
        <Link to={'/'}
          className='font-bold flex items-center gap-[3px]'>
          <span className='text-[1rem] md:text-2xl'>FILM</span>
          <span className="border-l-[2px] border-white h-5 md:h-6"></span>
          <span className='text-[1rem] md:text-2xl'>ZONE</span>
        </Link>
      </div>
      {/* Nav List */}
      <div>
        <ul className='hidden md:flex items-center gap-6'>
          {navList.map((item, key) => (
            <li key={key} className='li-content'>
              <Link
                to={item.link}
                className='li-text group'
              >
                {item.category}
                <span className='li-underline'></span>
              </Link>
            </li>
          ))}
          <li className='li-content'>
            <button className='li-text group'>
              <i className="fa-regular fa-user"></i>
              <span className='li-underline'></span>
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <div 
        className='block md:hidden cursor-pointer text-[1rem] md:text-2xl text-white'
        onClick={() => setShowList(prev => !prev)}
      >
        {showList ? '' : <i className="fa-solid fa-bars-staggered"></i>}
      </div>

      <div 
        className={`absolute md:hidden h-[100vh] flex justify-between transform
        right-0 top-0 bg-black/80 w-1/2 p-4 rounded-l-[0.3rem] duration-300 backdrop-blur-md
        ${showList ? 'translate-x-0' : 'translate-x-full'}
        ${showList ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      >
        <ul className='flex flex-col items-start gap-2'>
          {navList.map((item, key) => (
            <li key={key} className='li-content'>
              <Link
                to={item.link}
                className='li-text group'
              >
                {item.category}
                <span className='li-underline'></span>
              </Link>
            </li>
          ))}
          <li className='li-content'>
            <button className='li-text group'>
              <i className="fa-regular fa-user"></i>
              <span className='li-underline'></span>
            </button>
          </li>
        </ul>
        <div 
          className='cursor-pointer'
          onClick={() => setShowList(prev => !prev)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </nav>
  )
}
