"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { links } from "@/utils/links";
import { useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  console.log("params", pathname);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col shadow-lg h-screen bg-white w-full lg:max-w-3xs  fixed lg:relative">
      <header className="flex justify-between items-center gap-2 p-2 md:p-4 mb-1 h-fit w-full ">
        <div className="flex items-center gap-2 ">
          <Image src="/favicon.svg" alt="HAEKKOK LABS" width={20} height={20} />
          <Link className="font-bold" href="/">
            HAEKKOK LABS
          </Link>
        </div>

        <button
          type="button"
          className="block lg:hidden p-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
      </header>
      <nav
        className={`${isOpen ? "flex" : "hidden"}  lg:flex  flex-col items-start gap-2 p-4 h-screen w-full z-10 drop-shadow-lg`}
      >
        {links.map((link) => (
          <div
            key={`${link.label}-${link.content.map((item) => item.href).join("-")}`}
            className="flex flex-col items-start gap-2 mb-4"
          >
            {link.label && (
              <p className="text-gray-500 text-sm">{link.label}</p>
            )}
            <ul>
              {link.content.map((item) => (
                <li
                  key={`${item.href}-${item.label}`}
                  className={`${item.href.includes(pathname) ? "text-blue-500" : ""} hover:text-blue-500 transition-colors duration-200`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
