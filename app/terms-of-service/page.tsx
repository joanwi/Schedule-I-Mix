import { FlaskRound } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
      title: 'Terms of Service | Schedule1Mix',
      description: 'Terms of Service for Schedule1Mix - Your guide to mixing in Schedule 1',
};

export default function TermsOfService() {
      return (
            <div className="min-h-screen py-10">
                  <div className="max-w-4xl mx-auto px-4">
                        <div className="flex items-center space-x-2 mb-8">
                              <FlaskRound className="w-8 h-8 text-[#FFC107]" />
                              <h1 className="text-4xl font-bold text-[#FFC107]">Terms of Service</h1>
                        </div>

                        <div className="space-y-6 text-[#FFECB3]">
                              <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>

                              <section>
                                    <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">1. Acceptance of Terms</h2>
                                    <p>
                                          By accessing and using Schedule1Mix, you agree to be bound by these Terms of Service.
                                          If you do not agree with any part of these terms, please do not use our website.
                                    </p>
                              </section>
                              <section>
                                    <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">2. Disclaimer</h2>
                                    <p>
                                          The information provided on Schedule1Mix is for entertainment and educational purposes only. We are not responsible for any actions taken based on the information provided.
                                    </p>
                              </section>
                              <section>
                                    <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">3. Modifications</h2>
                                    <p>
                                          We may revise these terms of service at any time without notice. By using this website, you agree
                                          to be bound by the current version of these terms of service.
                                    </p>
                              </section>
                              <section>
                                    <h2 className="text-2xl font-semibold text-[#FFC107] mb-4">4. Contact</h2>
                                    <p>
                                          If you have any questions about these Terms of Service, please contact us at{" "}
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