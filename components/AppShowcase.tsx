import React from 'react';
import { Activity, Zap, Target } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#F9F9FB] px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-white pt-10 px-4 pb-4 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <img src="https://picsum.photos/seed/user1/40/40" className="w-8 h-8 rounded-full" alt="profile"/>
                        <div>
                            <div className="text-[10px] text-gray-500">Hi, Gabriel!</div>
                            <div className="text-xs font-bold">Check Today's Summary</div>
                        </div>
                    </div>

                    {/* Cards inside phone */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded-2xl">
                            <div className="flex justify-between mb-2">
                                <Activity className="w-4 h-4 text-gray-400"/>
                                <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Good</span>
                            </div>
                            <div className="text-[10px] text-gray-400">Blood Pressure</div>
                            <div className="text-lg font-bold">112<span className="text-xs text-gray-400 font-normal">/75</span></div>
                        </div>
                         <div className="bg-gray-50 p-3 rounded-2xl">
                            <div className="flex justify-between mb-2">
                                <Zap className="w-4 h-4 text-gray-400"/>
                                <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Good</span>
                            </div>
                            <div className="text-[10px] text-gray-400">Blood Glucose</div>
                            <div className="text-lg font-bold">80<span className="text-xs text-gray-400 font-normal">/90</span></div>
                        </div>
                    </div>

                    {/* Goal Card */}
                    <div className="bg-black text-white p-4 rounded-3xl mb-4 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-[10px] text-gray-400 mb-1">Coaching Goals</div>
                            <div className="text-sm font-medium mb-3">You've Rested <span className="text-vitrus-lime">195h</span> this month</div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-1">
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">1</div>
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">2</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold">30</div>
                                    <div className="text-[8px] text-gray-400">mins walk</div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-800 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                    
                    {/* Breathing Card */}
                    <div className="bg-orange-50 p-4 rounded-3xl flex items-center gap-4 relative">
                        <div className="flex-1">
                            <div className="text-xs font-bold text-gray-800">Breathing</div>
                            <div className="text-2xl font-bold mt-1">142<span className="text-sm font-normal text-gray-400">/160h</span></div>
                        </div>
                        <img src="https://picsum.photos/seed/yoga/100/100" className="w-16 h-16 object-cover rounded-full" alt="breathing" />
                    </div>
                </div>
            </div>
        </div>

        {/* Text Content */}
        <div>
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark leading-tight mb-8">
                Track Your Health Anytime, <br/> Anywhere with Vitrus App
            </h2>
            <p className="text-gray-500 mb-12 max-w-md">
                Vitrus.inc's mobile app brings advanced health tracking to your fingertips—monitor vital stats, set wellness goals, and get real-time insights to improve your health anytime, anywhere.
            </p>

            <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-vitrus-lime/30 flex items-center justify-center flex-shrink-0 text-green-800">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-vitrus-dark mb-1">Track Wellness Effectively</h4>
                        <p className="text-sm text-gray-500">Monitor health data to track progress and improve wellness.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-vitrus-lime/30 flex items-center justify-center flex-shrink-0 text-green-800">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-vitrus-dark mb-1">Real-Time Insights Provided</h4>
                        <p className="text-sm text-gray-500">Get real-time insights to optimize your health and fitness.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-vitrus-lime/30 flex items-center justify-center flex-shrink-0 text-green-800">
                        <Target className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-vitrus-dark mb-1">Personalized Health Goals</h4>
                        <p className="text-sm text-gray-500">Set tailored goals based on your health data.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};