import React from 'react';
import { Activity, Clock, MapPin } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white px-6 md:px-12">
       <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark leading-tight mb-4">
                    Revolutionizing Health <br/> Tracking for Tomorrow
                </h2>
                <p className="text-gray-500">
                    Vitrus.inc offers innovative health tracking solutions to help you monitor, analyze, and improve your wellness daily.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Card: Weekly Recap */}
                <div className="bg-[#EAF3DA] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-8">
                         <div className="bg-white p-3 rounded-full">
                            <Activity className="w-6 h-6 text-green-600" />
                         </div>
                         <div>
                             <div className="text-sm text-gray-500 font-medium">Weekly Recap</div>
                             <div className="text-xl md:text-2xl font-medium text-vitrus-dark">
                                You've Rested <span className="text-green-600 font-bold">195h</span> this month
                             </div>
                         </div>
                    </div>

                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Activities</div>
                            <div className="text-4xl font-medium">5</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Distance</div>
                            <div className="text-4xl font-medium">26,9km</div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</div>
                            <div className="text-4xl font-medium">4h 8m</div>
                        </div>
                    </div>

                    {/* Chart area mock */}
                    <div className="flex justify-between items-end h-24 gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                            <div key={day} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${i === 0 || i === 5 ? 'bg-vitrus-lime scale-110 shadow-md' : 'bg-white/50 border border-white'}`}>
                                    <Activity className={`w-4 h-4 ${i === 0 || i === 5 ? 'text-black' : 'text-gray-400'}`} />
                                </div>
                                <span className="text-xs text-gray-500 font-medium">{day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card: Calendar */}
                <div className="bg-[#F9F9FB] rounded-[2.5rem] p-8 md:p-12">
                     <div className="flex items-start gap-4 mb-8">
                         <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                            <Clock className="w-6 h-6 text-gray-600" />
                         </div>
                         <div>
                             <div className="text-sm text-gray-500 font-medium">Medical Record</div>
                             <div className="text-xl md:text-2xl font-medium text-vitrus-dark">
                                You've Rested <span className="text-green-600 font-bold">195h</span> this month
                             </div>
                         </div>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-7 gap-4 mb-4 text-center">
                             {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                 <div key={d} className="text-sm font-bold text-gray-800">{d}</div>
                             ))}
                        </div>
                        <div className="grid grid-cols-7 gap-y-6 gap-x-2 text-center text-sm text-gray-600">
                             {/* Mock Calendar Days */}
                             {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                                 <div key={day} className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full ${day === 10 ? 'bg-black text-white shadow-lg scale-110' : ''}`}>
                                     {day}
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 px-4">
                 <div className="flex flex-col gap-4">
                     <h3 className="text-2xl font-medium">Track Your Health Anytime, Anywhere with Vitrus App</h3>
                     <p className="text-sm text-gray-500">Vitrus.inc's mobile app brings advanced health tracking to your fingertips—monitor vital stats, set wellness goals, and get real-time insights to improve your health anytime, anywhere.</p>
                 </div>
                 <div className="flex flex-col gap-4">
                     <h3 className="text-2xl font-medium">Track Your Health Anytime, Anywhere with Vitrus App</h3>
                     <p className="text-sm text-gray-500">Vitrus.inc's mobile app brings advanced health tracking to your fingertips—monitor vital stats, set wellness goals, and get real-time insights to improve your health anytime, anywhere.</p>
                 </div>
            </div>

       </div>
    </section>
  );
};