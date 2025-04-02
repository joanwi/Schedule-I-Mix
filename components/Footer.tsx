import { FlaskRound, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2526] border-t border-[#FFC107]/10">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FlaskRound className="w-6 h-6 text-[#FFC107]" />
              <span className="text-lg font-bold text-[#FFC107]">Schedule 1 Mix</span>
            </Link>
            <p className="text-[#FFECB3]/80">Your ultimate guide to mixing in Schedule 1</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#FFC107] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#recipes" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="#how-to" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  How To Guide
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  FAQ
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FFC107] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Beginner's Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Advanced Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FFC107] mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[#FFECB3]/80 hover:text-[#FFC107] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
       
        <div className="mt-6 border-t border-[#FFC107]/10 text-center text-[#FFECB3]/60">
        <p className="text-sm">
        This is a fan project and not affiliated with Schedule I.
        </p>
          <p>&copy; {new Date().getFullYear()} Schedule1Mix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}