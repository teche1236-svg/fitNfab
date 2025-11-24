import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#F9F9FB]" id="pricing">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark leading-tight mb-4">
                Choose the Right Plan for your <br/> Health Journey
            </h2>
            <p className="text-gray-500 max-w-lg">
                Vitrus.inc offers innovative health tracking solutions to help you monitor, analyze, and improve your wellness daily.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan, i) => (
                <div key={i} className={`p-8 rounded-[2rem] flex flex-col h-full ${plan.highlight ? 'bg-[#FDFEE8] border border-vitrus-lime' : 'bg-white border border-gray-100'}`}>
                    <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-8 min-h-[3rem]">{plan.description}</p>
                    
                    <div className="mb-8">
                        <span className="text-sm font-bold text-gray-800">Features:</span>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {plan.features.map((feature, idx) => (
                                <span key={idx} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-gray-100/50">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-medium">${plan.price}</span>
                            <span className="text-sm text-gray-400">/month</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};