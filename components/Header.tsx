"use client";

import { Menu, X, FlaskRound } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Recipes", href: "#recipes" },
    { name: "How To Mix", href: "#how-to" },
    { name: "Guides", href: "#" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed w-full z-50 bg-[#1A2526]/95 backdrop-blur-sm border-b border-[#FFC107]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FlaskRound className="w-8 h-8 text-[#FFC107]" />
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