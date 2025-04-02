
import { FlaskRound } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Schedule1Mix",
  description: "Learn about how Schedule1Mix collects and uses data to improve your experience. Our privacy policy explains our use of Google Analytics and your data protection rights.",
};


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <FlaskRound className="w-8 h-8 text-[#FFC107]" />
          <h1 className="text-4xl font-bold text-[#FFC107]">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-[#FFECB3]">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">Introduction</h2>
            <p>
              Welcome to Schedule1Mix. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we handle your data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">Information We Collect</h2>
            <p>
              We use Google Analytics to collect anonymous usage data to improve our website's performance and user experience.
              This data includes:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>Browser type and device information</li>
              <li>Geographic location (country/city level)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">How We Use Your Information</h2>
            <p>
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our website content and user experience</li>
              <li>Optimize website performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">Cookies</h2>
            <p>
              We use cookies through Google Analytics to collect usage data. These cookies are essential for the proper functioning of our analytics system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Opt-out of Google Analytics tracking</li>
              <li>Clear your browser cookies</li>
              <li>Request information about your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@schedule1mix.com" className="text-[#FFC107] hover:text-[#FFECB3] transition-colors">
                support@schedule1mix.com
              </a>
            </p>
          </section>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-[#FFC107] hover:text-[#FFECB3] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 