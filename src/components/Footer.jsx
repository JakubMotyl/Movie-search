import React from 'react'

export default function Footer() {
  const footerList = [
    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    ['Help Center', 'Account Settings', 'FAQ'],
    ['About', 'Careers', 'Press'],
    ['Contact', 'Advertise', 'Social Media']
  ]

  return (
    <div className='px-10 pt-10 pb-2 text-white flex flex-col gap-8'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
        {footerList.map((list, i) => (
          <ul key={i} className='space-y-2 text-center'>
            {list.map((item, j) => (
              <li key={j}>
                <a href="#" className='text-gray-400 hover:underline text-sm'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className='text-center'>
        <span className='text-xs text-gray-400'>©2025 FILMZONE. All rights reserved.</span>
      </div>
    </div>
  )
}
