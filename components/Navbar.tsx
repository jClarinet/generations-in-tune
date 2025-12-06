'use client'; // This makes the component a Client Component for dynamic features like active links (if needed)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
const navItems = [
  { name: 'About', href: '', submenu: [ 
    {name: 'About Us', href:'/about/aboutus'},
    {name: 'Our Team', href: '/about/ourteam'}

  ],},
  { name: 'Events', href: '',submenu: [
    { name: 'Upcoming Events', href: '/events/upcomingevents' },
    { name: 'Past Events', href: '/events/pastevents' },
    { name: 'Calendar', href: '/events/calendar' },
], },
  { name: 'Programs', href: '/programs' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-lightercolor text-primary shadow-md sticky top-0 z-50 w-full">
      <nav className="w-full mx-auto px-4 py-0 flex justify-between items-center">
        {/* Logo/Home Link */}
        <div className='size-30'>
        <Link href="/">
        <img src="generationslogo.png" alt="" />
        </Link>
        </div>
       
        {/* Navigation Links */}
        <div className="flex items-center space-x-3">
          {navItems.map((item) => (
            // The outer container handles the hover state for the dropdown
            <div key={item.name} className="relative group">
              
              <Link
                href={item.href}
                className={`
                  px-2 py-2 rounded-md text-l font-medium transition duration-50 flex items-center
                  ${pathname === item.href
                    ? 'text-primary bg-third opacity-50'
                    : 'text-primary hover:bg-third hover:text-primary hover:opacity-50'
                  }
                `}
              >
                {item.name}
                {/* Optional: Add a small dropdown indicator if a submenu exists */}
                {item.submenu && (
                  <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" xmlns="www.w3.org" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu Content (Hidden by default, shown on group-hover) */}
              {item.submenu && (
                <div className="absolute left-0 mt-0 space-y-1 w-48 bg-fourth text-primary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-third hover:text-primary whitespace-nowrap"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
