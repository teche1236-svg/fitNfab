import React from 'react';
import { ArrowRight, Utensils, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto md:h-[calc(100vh-80px)] min-h-[700px] bg-[#EFF1F0] overflow-hidden flex flex-col justify-center px-6 md:px-12 pt-10 md:pt-0">
      
      <div className="max-w-[1440px] w-full mx-auto relative h-full">
        
        {/* Left Content - Typography */}
        <div className="relative z-20 flex flex-col justify-center h-full max-w-2xl pt-20 md:pt-0 pointer-events-none">
          <div className="pointer-events-auto">
              {/* Sanskrit Quote */}
              <div className="mb-6">
                <p className="text-2xl md:text-3xl font-medium text-vitrus-dark mb-2" style={{fontFamily: 'serif'}}>
                  योग चित्त वृत्ति निरोध
                </p>
                <p className="text-sm text-gray-500 italic">Yoga is the cessation of the fluctuations of the mind</p>
              </div>

              <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] font-medium text-[#1A1A1A] tracking-tight mb-6">
                Welcome to <br/>
                <span className="text-vitrus-dark">"Fit N Fab"</span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                Your Ultimate Fitness Destination in Ravet! We bring you the perfect mix of <span className="font-semibold text-vitrus-dark">Yoga, Zumba, and CrossFit</span> to help you stay active, fit, and energetic.
              </p>

              <p className="text-gray-500 text-base max-w-lg leading-relaxed mb-10">
                Whether you are looking to lose weight, gain flexibility, or boost your strength, our expert trainers ensure fun, engaging, and result-driven workouts!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#2C2C2C] text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-4 group hover:scale-105 transition-transform shadow-xl shadow-black/5">
                  <span className="font-medium text-lg">Join Now</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
                <a href="tel:8452933588" className="bg-vitrus-lime text-vitrus-dark px-8 py-3 rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-lg text-center">
                  Call Us Now
                </a>
              </div>

              {/* Contact Numbers */}
              <div className="flex flex-col gap-2">
                <a href="tel:8452933588" className="text-gray-600 hover:text-vitrus-dark transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">845 2933 588</span>
                </a>
                <a href="tel:8698022555" className="text-gray-600 hover:text-vitrus-dark transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">869 8022 555</span>
                </a>
              </div>
          </div>
        </div>

        {/* Central Image & Visuals Container */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center lg:translate-x-20">
            
            {/* Main Character Image */}
            <div className="relative h-[85%] md:h-[95%] w-full max-w-[800px] flex items-end justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Woman tracking health" 
                    className="h-full w-full object-cover object-top mask-image-b-fade scale-110 md:scale-100 translate-y-10 md:translate-y-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                />
                
                {/* Connection Line (SVG) - Connecting Watch to Card */}
                {/* Adjusting coordinates to match the wrist position of this specific image */}
                <svg className="absolute bottom-[25%] right-[20%] w-[300px] h-[150px] z-30 hidden lg:block" viewBox="0 0 300 150">
                    {/* Path from wrist (approx left-bottom of svg) to card (right-top of svg) */}
                    <path 
                        d="M 20 120 C 80 120, 100 80, 280 40" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2" 
                        className="drop-shadow-sm opacity-80"
                    />
                    {/* Dot at the wrist */}
                    <circle cx="20" cy="120" r="4" fill="white" />
                </svg>
            </div>

            {/* Right Side Floating Cards */}
            <div className="absolute top-0 right-0 h-full w-full md:w-1/2 pointer-events-auto z-40 hidden md:block">
                
                {/* 1. Yellow Yoga Card - Top Right */}
                <div className="absolute top-[15%] right-0 xl:right-10 bg-[#F2F649] p-5 rounded-[2.5rem] shadow-xl w-[340px] animate-fade-in-up hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="text-[11px] text-gray-700 font-medium uppercase tracking-wide opacity-70">Today's Yoga Session</span>
                    </div>
                    
                    <div className="flex justify-between items-end gap-2 relative">
                        <div className="flex-1 relative z-10">
                            <h4 className="font-medium text-[1.15rem] text-black leading-tight mb-3 pr-2">Morning Flow & Meditation</h4>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] text-gray-600 font-medium uppercase">Time:</span>
                                <span className="text-sm font-bold">6:00 AM<span className="text-xs font-normal text-gray-500"> - 7:00 AM</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-600 font-medium uppercase">Level:</span>
                                <span className="text-xs bg-white px-2 py-1 rounded-full">All Levels</span>
                            </div>
                        </div>
                        <div className="w-24 h-24 flex-shrink-0 relative -mr-2 -mb-2">
                            <img 
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300" 
                                className="w-full h-full rounded-full object-cover border-[4px] border-white shadow-md transform rotate-12" 
                                alt="yoga" 
                            />
                        </div>
                    </div>
                </div>

                {/* 2. White Programs Card - Bottom Right */}
                <div className="absolute bottom-[8%] right-[5%] xl:right-[15%] bg-[#F4F4F6]/90 backdrop-blur-md p-5 rounded-[2.5rem] shadow-lg w-[300px] border border-white/50 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
                            <Target className="w-4 h-4 text-black" />
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Our Programs</span>
                    </div>
                    
                    <p className="text-base text-vitrus-dark font-medium mb-4 leading-tight">
                        Choose Your <span className="text-green-600 font-bold">Fitness Journey</span>
                    </p>
                    
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-3 bg-white/50 rounded-xl p-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#EAF3DA] flex items-center justify-center flex-shrink-0">
                                <span className="text-base">🧘</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-vitrus-dark">Yoga</div>
                                <div className="text-[10px] text-gray-500">Flexibility & Balance</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/50 rounded-xl p-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#FDFEE8] flex items-center justify-center flex-shrink-0">
                                <span className="text-base">💃</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-vitrus-dark">Zumba</div>
                                <div className="text-[10px] text-gray-500">Dance & Cardio</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/50 rounded-xl p-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#F4E4FF] flex items-center justify-center flex-shrink-0">
                                <span className="text-base">💪</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-vitrus-dark">CrossFit</div>
                                <div className="text-[10px] text-gray-500">Strength & Power</div>
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