"use client";

import { ChevronDown, Beaker, DollarSign, Brain, HelpCircle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I unlock the mixing station?",
      answer: "You need to reach Hoodlum 1 level and purchase it from Dan's Hardware for $500."
    },
    {
      question: "Where can I find ingredients?",
      answer: "Basic ingredients can be found at gas stations, including Bananas, Coke, and Mega Bean."
    },
    {
      question: "How does mixing work?",
      answer: "Combine base drugs with ingredients, then package them for sale. Different combinations yield different effects and profits."
    }
  ];

  const recipes = [
    {
      name: "Miracle Mix",
      ingredients: "Sour Diesel, Flu Medicine (x2), Energy Drink, Chili, Mouthwash, Banana, Iodine, Horsemen",
      cost: "~$200",
      effects: "Popular, NPC favorite, high profit"
    },
    {
      name: "Wedding Slime",
      ingredients: "Paramol → Cuke → Paramol → Gasoline → Cuke → Mega Bean → Battery",
      cost: "$200+",
      effects: "Alien skin + antigravity, early-game goldmine"
    },
    {
      name: "Green C Mix",
      ingredients: "Chili → Banana → The V Pill (Viag.) → Minty Stuff → Horsemen → Focus Drops → Motor Juice",
      cost: "$165+",
      effects: "Electric shock, flames, chaotic vision"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#1A2526] text-[#FFECB3]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 text-[#FFC107]">Schedule1mix</h1>
            <p className="text-2xl mb-8">Master the art of mixing in Schedule 1</p>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </div>
        </section>

        {/* What Section */}
        <section className="py-20 bg-[#3A3F47]" id="what">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">What is Schedule 1?</h2>
            
            <div className="space-y-20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Strategic Mixing Gameplay</h3>
                  <p className="text-lg">Schedule 1 revolutionizes the gaming experience with its unique mixing mechanics, allowing players to create custom combinations for maximum profit.</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
                    alt="Mixing gameplay"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Profit Maximization</h3>
                  <p className="text-lg">Learn to combine ingredients effectively to create high-value products that dominate the market and maximize your earnings.</p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                    alt="Profit charts"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Section */}
        <section className="py-20" id="how-to">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">How to Master Mixing</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3A3F47] p-8 rounded-lg">
                <Beaker className="w-12 h-12 mb-4 text-[#FFC107]" />
                <h3 className="text-xl font-semibold mb-4">Unlock the Station</h3>
                <p>Reach Hoodlum 1 level and visit Dan's Hardware. Purchase the mixing station for $500 to begin your mixing journey.</p>
              </div>
              
              <div className="bg-[#3A3F47] p-8 rounded-lg">
                <DollarSign className="w-12 h-12 mb-4 text-[#FFC107]" />
                <h3 className="text-xl font-semibold mb-4">Gather Ingredients</h3>
                <p>Source your ingredients from gas stations and other locations. Key items include Bananas, Coke, and Mega Bean.</p>
              </div>
              
              <div className="bg-[#3A3F47] p-8 rounded-lg">
                <Brain className="w-12 h-12 mb-4 text-[#FFC107]" />
                <h3 className="text-xl font-semibold mb-4">Mix and Profit</h3>
                <p>Combine base substances with ingredients, package your product, and sell for maximum profit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Recipes Section */}
        <section className="py-20 bg-[#3A3F47]" id="recipes">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">Top Mixing Recipes</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#FFC107]/20">
                    <th className="text-left p-4">Mix Name</th>
                    <th className="text-left p-4">Ingredients</th>
                    <th className="text-left p-4">Cost/Selling Price</th>
                    <th className="text-left p-4">Effects/Details</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe, index) => (
                    <tr key={index} className="border-b border-[#FFC107]/20">
                      <td className="p-4">{recipe.name}</td>
                      <td className="p-4">{recipe.ingredients}</td>
                      <td className="p-4">{recipe.cost}</td>
                      <td className="p-4">{recipe.effects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" id="faq">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">
              <HelpCircle className="w-12 h-12 mb-4 mx-auto" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#3A3F47] rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full p-4 text-left flex justify-between items-center"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === index && (
                    <div className="p-4 pt-0">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}