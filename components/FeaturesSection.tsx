import React from 'react';
import { ArrowRight, Droplet, Target, Activity } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#EFF1F0]">
       <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column (Stats & CTA) */}
            <div className="lg:w-[28%] flex flex-col gap-8">
                {/* 95.5% Card */}
                <div className="bg-[#F4F4F6] rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-sm">
                    {/* Segmented Circle Chart */}
                    <div className="relative w-64 h-64 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            {/* Background Ticks */}
                            <circle 
                                cx="50" cy="50" r="44" 
                                fill="none" 
                                stroke="#E5E7EB" 
                                strokeWidth="8" 
                                strokeDasharray="1.5 3"
                            />
                            {/* Progress Ticks (Lime) */}
                            <circle 
                                cx="50" cy="50" r="44" 
                                fill="none" 
                                stroke="#DDF574" 
                                strokeWidth="8" 
                                strokeDasharray="1.5 3"
                                strokeDashoffset="10" 
                                pathLength="100"
                                className="opacity-100"
                                style={{ strokeDashoffset: '4' }} // Leaves a small gap for the 95.5% look
                            />
                        </svg>
                         
                         {/* Text Center */}
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl font-medium text-[#1A1A1A] tracking-tight">95,5%</span>
                         </div>
                    </div>

                    {/* Avatars */}
                    <div className="flex items-center justify-center -space-x-3 mb-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <img key={i} src={`https://i.pravatar.cc/100?img=${i + 15}`} className="w-12 h-12 rounded-full border-[3px] border-[#F4F4F6] object-cover" alt="user" />
                        ))}
                         <div className="w-12 h-12 rounded-full border-[3px] border-[#F4F4F6] bg-white flex items-center justify-center text-gray-500 shadow-sm z-10">
                            <span className="text-lg font-medium">+</span>
                         </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed px-1">
                        95.5% of our members report improved fitness levels and increased energy within the first 3 months at Fit n Fab.
                    </p>
                </div>

                {/* Bottom Description & Button */}
                <div className="mt-auto pt-4">
                    <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-8">
                        Fit n Fab delivers expert-led fitness programs designed to help you achieve your goals—whether it's weight loss, flexibility, or strength building—with personalized attention and a supportive community.
                    </p>
                    <button className="bg-white border border-gray-200 text-[#1A1A1A] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-gray-50 transition-colors shadow-sm w-fit group">
                        <span className="font-medium text-sm">Get Started Now</span>
                        <div className="w-8 h-8 rounded-full bg-[#F4F4F6] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4 text-black" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Right Column (Header + Grid) */}
            <div className="flex-1 flex flex-col">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1] font-medium text-[#1A1A1A] max-w-3xl tracking-tight">
                        Transform Your Body, Mind & Spirit
                    </h2>
                    <p className="text-gray-500 text-sm md:max-w-[280px] md:text-right leading-relaxed">
                        Fit n Fab offers Yoga, Zumba, and CrossFit programs to help you stay active, build strength, and live your healthiest life.
                    </p>
                </div>

                {/* Grid Layout for Images/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        {/* Woman Image */}
                        <div className="relative h-[280px] rounded-[2.5rem] overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Woman drinking" />
                        </div>
                        {/* Green Card */}
                        <div className="bg-[#F4F4F6] rounded-[2.5rem] p-6 h-[160px] flex flex-col justify-center">
                            <div className="w-10 h-10 rounded-full bg-[#CBE455] flex items-center justify-center mb-4 text-black">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-sm text-[#1A1A1A] mb-1">Yoga Classes</h4>
                            <p className="text-[11px] text-gray-500 leading-snug">Find balance and flexibility with our expert yoga instructors.</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        {/* Yellow Card */}
                        <div className="bg-[#F4F4F6] rounded-[2.5rem] p-6 h-[160px] flex flex-col justify-center">
                            <div className="w-10 h-10 rounded-full bg-[#F2F649] flex items-center justify-center mb-4 text-black">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-sm text-[#1A1A1A] mb-1">Zumba Dance</h4>
                            <p className="text-[11px] text-gray-500 leading-snug">Dance your way to fitness with high-energy Zumba sessions.</p>
                        </div>
                         {/* Couple Image */}
                        <div className="relative h-[280px] rounded-[2.5rem] overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Runners" />
                        </div>
                    </div>

                    {/* Column 3 (Tall Image) */}
                    <div className="relative h-[465px] md:h-auto rounded-[2.5rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1552674605-46f538355272?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Man with sunglasses" />
                        
                        {/* Overlay Card */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-[2rem] p-4 flex items-center gap-4 shadow-sm">
                             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 border border-gray-100">
                                <Target className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <h4 className="font-bold text-sm text-[#1A1A1A]">CrossFit Training</h4>
                                <p className="text-[10px] text-gray-600 leading-tight pr-2">Build strength and endurance with our CrossFit programs.</p>
                             </div>
                        </div>
                    </div>

                </div>

            </div>

          </div>

       </div>
    </section>
  );
};