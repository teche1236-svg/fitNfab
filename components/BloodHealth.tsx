import React from 'react';
import { BLOOD_HEALTH_CARDS } from '../constants';

export const BloodHealth: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark leading-tight mb-4">
                Your Blood Holds the Clues — <br/> We Help You Decode Them
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Blood testing provides key insights into your body's balance and overall wellness. While standard panels test ~20 markers, Vitrus Health delivers unmatched clarity with over 100 in-depth evaluations.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[2.5rem] overflow-hidden h-[400px]">
                <img src="https://picsum.photos/seed/winter/400/500" className="w-full h-full object-cover" alt="person" />
            </div>

            {BLOOD_HEALTH_CARDS.map((card, i) => (
                <div key={i} className={`rounded-[2.5rem] p-8 flex flex-col justify-center h-[400px] ${card.color}`}>
                    <h3 className="text-2xl font-medium text-vitrus-dark mb-4">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
            ))}
            
            <div className="rounded-[2.5rem] overflow-hidden h-[400px]">
                <img src="https://picsum.photos/seed/manfitness/400/500" className="w-full h-full object-cover grayscale" alt="person" />
            </div>
        </div>
      </div>
    </section>
  );
};