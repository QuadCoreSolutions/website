import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="QuadCoreSolutions" className="w-[124px] h-[32px]" />  */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-xl sm:text-2xl tracking-wide">QuadCore <span className='text-gradient'>Solutions</span></span>
        <span className="text-gradient">Engineering the Future, Today.</span>
      </div>


      {/* Desktop Navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
