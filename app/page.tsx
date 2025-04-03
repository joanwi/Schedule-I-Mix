"use client";
import Image from "next/image";
import { ChevronDown, Beaker, DollarSign, Brain, HelpCircle } from "lucide-react";
import { useState } from "react";
import { recipes } from "@/lib/recipes";


export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I unlock the Mixing Station in Schedule 1?",
      answer: "To unlock the Mixing Station, reach Hoodlum 1 rank. Then, head to Dan’s Hardware Store and buy it for $500. It’s your starting point for crafting mixes like OG Kush with Cuke to boost profits early on."
    },
    {
      question: "Where can I find Substances?",
      answer: "Basic ingredients can be found at gas stations, including Bananas, Coke, and Mega Bean."
    },
    {
      question: "Which ingredients make the most profitable mixes?",
      answer: "Top ingredients for high-profit mixes include Horse Semen, Mega Bean, and Battery. For example, the Meth mix (Banana, Cuke, Paracetamol, Gasoline, Battery, Horse Semen, Mega Bean) costs $38 and sells for $340, netting $302 profit. Experiment with these for big returns."
    },
    {
      question: "How do mix effects impact gameplay in Schedule 1?",
      answer: "Effects shape NPC demand and profits. Glowing (e.g., OG Kush mix, $164) draws premium buyers, while Zombifying (e.g., Meth, $340) hooks repeat customers. Sedating effects (e.g., Granddaddy Purple, $154) suit chill NPCs—match effects to market needs."
    },
    {
      question: "How can I calculate costs and selling prices for max profit?",
      answer: "Add up ingredient costs (e.g., Meth at $38) and estimate selling price with tools like the Mixing Calculator. It sells for $340, giving a $302 profit. Test prices in-game and tweak based on NPC feedback to stay profitable."
    },
    {
      question: "Why aren’t my mixes selling, and how do I boost sales?",
      answer: "Mixes might not sell if prices are too high (e.g., OG Kush at $80 shouldn’t exceed $200) or effects don’t appeal. Add popular effects like Glowing with Horse Semen, or try hot recipes like Ice Cream Slime ($275+) to attract buyers."
    }
  ];



  const [sortConfig, setSortConfig] = useState<{
    key: 'cost' | 'sellingPrice' | 'profit';
    direction: 'ascending' | 'descending';
  } | null>(null);

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const getValue = (recipe: typeof recipes[0], key: typeof sortConfig.key) => {
      if (key === 'profit') {
        const cost = recipe.cost === '-' ? 0 : Number(recipe.cost);
        return recipe.sellingPrice - cost;
      }
      return key === 'cost' && recipe.cost === '-' ? 0 : Number(recipe[key]);
    };
    
    const aValue = getValue(a, sortConfig.key);
    const bValue = getValue(b, sortConfig.key);
    
    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: 'cost' | 'sellingPrice' | 'profit') => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: 'cost' | 'sellingPrice' | 'profit') => {
    if (!sortConfig || sortConfig.key !== key) return '↕️';
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl font-bold mb-6 text-[#FFC107]">Welcome to Schedule 1 Mix</h1>
              <p className="text-2xl mb-8">Master the art of mixing in Schedule 1</p>
              <ChevronDown 
                className="w-8 h-8 animate-bounce hidden md:block cursor-pointer hover:text-[#FFC107] transition-colors" 
                onClick={() => {
                  document.getElementById('what')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
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
                  <p className="text-lg">Get the lowdown on mixing in Schedule 1 with our detailed guides! We'll help you nail the mixing mechanics like a pro.</p>
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
                  <p className="text-lg">We've got exclusive drug variant recipes up our sleeve! Unlock these unique formulas with smart mixing and get a leg up on the competition in the Schedule 1.</p>
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
                  <p className="text-lg">Learn how to mix substances to whip up high-value products. With our tips, you'll rule the market and rake in the biggest earnings in Schedule 1!</p>
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
        <section className="py-20" id="recipes">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-[#FFC107]">Top Schedule 1 Mix Recipes</h2>
             <p className="text-center">These are the top recipes for Schedule 1 mix. Click on the column headers to sort by cost, selling price, or profit.</p>
             <p className="text-center">Note: Costs and selling prices are approximate and may vary based on game updates.</p>
             <p className="text-right font-bold text-sm text-[#FFC107]/70 my-2 pr-20">Last update: April 2, 2025</p>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-[#FFC107]/20">
                    <th className="text-left p-4 w-[200px]">Mix Name</th>
                    <th className="text-left p-4 w-[300px]">Substances</th>
                    <th className="text-left p-4 w-[100px] cursor-pointer hover:text-[#FFC107] transition-colors" onClick={() => requestSort('cost')}>
                      Cost ${getSortIcon('cost')}
                    </th>
                    <th className="text-left p-4 w-[100px] cursor-pointer hover:text-[#FFC107] transition-colors" onClick={() => requestSort('sellingPrice')}>
                      Selling ${getSortIcon('sellingPrice')}
                    </th>
                    <th className="text-left p-4 w-[100px] cursor-pointer hover:text-[#FFC107] transition-colors" onClick={() => requestSort('profit')}>
                      Profit ${getSortIcon('profit')}
                    </th>
                    <th className="text-left p-4 w-[300px]">Effects/Details</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedRecipes.map((recipe, index) => (
                    <tr key={index} className="border-b border-[#FFC107]/20">
                      <td className="p-2 truncate">{recipe.name}</td>
                      <td className="p-2 whitespace-pre-wrap break-words">{recipe.ingredients}</td>
                      <td className="p-2">${recipe.cost}</td>
                      <td className="p-2">${recipe.sellingPrice}</td>
                      <td className="p-2">${recipe.cost === '-' ? recipe.sellingPrice : recipe.sellingPrice - Number(recipe.cost)}</td>
                      <td className="p-2 whitespace-pre-wrap break-words">{recipe.effects}</td>
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
              Schedule 1 Mix FAQ
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
                    <h3 className="font-semibold text-xl text-[#FFC107]">{faq.question}</h3>
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