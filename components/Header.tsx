"use client";

import { Menu, X, } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Recipes", href: "#recipes" },
    { name: "How To Mix", href: "#how-to" },
    { name: "Guides", href: "#" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full bg-[#1A2526] backdrop-blur-sm border-b border-[#FFC107]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/LOGO-Schedule-1-Mix.png"
              alt="Schedule 1 Mix Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-xl font-bold text-[#FFC107]">Schedule 1 Mix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#FFECB3] hover:text-[#FFC107] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Empty div to maintain spacing */}
          <div className="w-[120px] md:block hidden"></div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFECB3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-[#FFECB3] hover:text-[#FFC107] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}