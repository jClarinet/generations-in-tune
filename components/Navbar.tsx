'use client'; // This makes the component a Client Component for dynamic features like active links (if needed)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Programs', href: '/programs' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-primary text-lightcolor shadow-md sticky top-0 z-50 w-full">
      <nav className="w-full mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Home Link */}
        <div className='size-40'>
        <Link href="/">
        <img src="generationslogo.png" alt="" />
        </Link>
        </div>
       
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Dynamically apply active styles based on the current path
              className={`
                px-3 py-2 rounded-md text-sm font-medium transition duration-50
                ${pathname === item.href
                  ? 'text-third bg-fourth'
                  : 'text-lightcolor hover:bg-fourth hover:text-third'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
