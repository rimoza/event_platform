'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", route: "/" },
    { label: "Create Event", route: "/events/create" },
    { label: "My Profile", route: "/profile" },
  ];

  return (
    <ul className="md:flex-between flex flex-col md:flex-row items-start gap-5 w-full">
      {navItems.map((nav) => {
        const isActive = pathname === nav.route
        return (
          <li key={nav.label} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={nav.route}>{nav.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
