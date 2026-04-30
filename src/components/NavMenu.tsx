"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between w-full py-6">
        <span className="font-semibold text-base text-black tracking-[-0.64px] capitalize">
          H.Studio
        </span>

        <div className="hidden md:flex gap-14 font-semibold text-base text-black tracking-[-0.64px] capitalize">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="leading-normal hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-black text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] cursor-pointer hover:bg-zinc-800 transition-colors">
          Let&apos;s talk
        </button>

        <button
          className="md:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="relative block w-6 h-4">
              <span className="absolute inset-0 flex items-center">
                <span className="block w-6 h-[2px] bg-white rotate-45" />
              </span>
              <span className="absolute inset-0 flex items-center">
                <span className="block w-6 h-[2px] bg-white -rotate-45" />
              </span>
            </span>
          ) : (
            <span className="flex flex-col gap-[5px]">
              <span className="block w-6 h-[2px] bg-black" />
              <span className="block w-6 h-[2px] bg-black" />
              <span className="block w-6 h-[2px] bg-black" />
            </span>
          )}
        </button>
      </nav>

      <div
        className={`md:hidden absolute left-0 right-0 z-30 bg-black overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-10" : "max-h-0 py-0"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-semibold text-2xl text-white tracking-[-0.1em] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-2 border border-white text-white text-sm font-medium tracking-[-0.56px] px-6 py-3 rounded-[24px] cursor-pointer hover:bg-white hover:text-black transition-colors">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </>
  );
}
