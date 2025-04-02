"use client";
import Image from "next/image";
import { ChevronDown, Beaker, DollarSign, Brain, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I unlock the mixing station?",
      answer: "You need to reach Hoodlum 1 level and purchase it from Dan's Hardware for $500."
    },
    {
      question: "Where can I find Substances?",
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
        {/* Hero Section */}
        <section className="relative h-screen flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl font-bold mb-6 text-[#FFC107]">Welcome to Schedule 1 Mix</h1>
              <p className="text-2xl mb-8">Master the art of mixing in Schedule 1</p>
              <ChevronDown className="w-8 h-8 animate-bounce hidden md:block" />
            </div>
            <div className="md:w-1/2 aspect-video w-full">
              <iframe
                title="Schedule 1 Mix"
                src="https://www.youtube.com/embed/fR1-GXVPbuo?autoplay=1&mute=1"
                className="w-full h-full rounded-lg shadow-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </section>

        {/* What Section */}
        <section className="py-20" id="what">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">What is Mixing in Schedule 1?</h2>

            <div className="space-y-20">

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Mixing Guide</h3>
                  <p className="text-lg">Get the lowdown on mixing in Schedule 1 with our detailed guides! We’ll help you nail the mixing mechanics like a pro.</p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/Mixing-Guide-on-Schedule-1-mix.png"
                    alt="Mixing Guide on Schedule 1 mix"
                    className="rounded-lg shadow-xl"
                    width={1000}
                    height={500}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Special Recipes</h3>
                  <p className="text-lg">We’ve got exclusive drug variant recipes up our sleeve! Unlock these unique formulas with smart mixing and get a leg up on the competition in the Schedule 1.</p>
                </div>
                <div className="md:w-1/2">  
                  <Image
                    src="/Special-Recipes-in-Schedule-1-mix.png"
                    alt="Special Recipes in Schedule 1 mix"
                    className="rounded-lg shadow-xl"
                    width={1000}
                    height={500}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Maximize Profits</h3>
                  <p className="text-lg">Learn how to mix substances to whip up high-value products. With our tips, you’ll rule the market and rake in the biggest earnings in Schedule 1!</p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/Maximize-Profits-in-Schedule-1.png"
                    alt="Maximize Profits in Schedule 1 mix"
                    className="rounded-lg shadow-xl"
                    width={1000}
                    height={500}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How Section */}
        <section className="py-20" id="how-to">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">How to Master Schedule 1 Mixing</h2>

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
        <section className="py-20 " id="recipes">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#FFC107]">Top Schedule 1  Mix Recipes</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#FFC107]/20">
                    <th className="text-left p-4">Mix Name</th>
                    <th className="text-left p-4">Substances</th>
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
    </>
  );
}