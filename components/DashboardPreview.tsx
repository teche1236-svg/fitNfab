import React from 'react';
import { Home, Activity, Calendar, Settings, Bell, Search, Sun, Droplet, Clock } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#F9F9FB] px-2 md:px-12 flex justify-center">
      <div className="w-full max-w-[1200px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[700px]">
         
         {/* Sidebar */}
         <div className="w-20 bg-vitrus-dark flex flex-col items-center py-8 gap-8 flex-shrink-0 hidden md:flex">
             <div className="w-8 h-8 rounded-full bg-vitrus-lime mb-8"></div>
             <Home className="text-white w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer" />
             <Activity className="text-white w-5 h-5 opacity-100 cursor-pointer" />
             <Calendar className="text-white w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer" />
             <Settings className="text-white w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer mt-auto" />
         </div>

         {/* Main Content Area */}
         <div className="flex-1 bg-gray-50 p-6 md:p-8 overflow-y-auto">
             
             {/* Header */}
             <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-vitrus-lime hidden md:block"></div> {/* Logo duplicate for mobile if sidebar hidden? No, following design */}
                     <div>
                         <h3 className="font-bold text-lg">Hi Valerie!</h3>
                         <p className="text-xs text-gray-500">Check Today's Activity Summary</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                     <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-gray-100 shadow-sm">
                         <Search className="w-4 h-4 text-gray-400" />
                         <input type="text" placeholder="Search Anything for health..." className="text-xs outline-none bg-transparent w-40 hidden lg:block" />
                     </div>
                     <button className="bg-white p-2 rounded-full shadow-sm"><Bell className="w-4 h-4 text-gray-600"/></button>
                     <img src="https://picsum.photos/seed/valerie/40/40" className="w-10 h-10 rounded-full" alt="user" />
                 </div>
             </div>

             {/* Dashboard Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 
                 {/* Column 1: Vitals */}
                 <div className="flex flex-col gap-6">
                     <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-4 rounded-3xl shadow-sm">
                             <div className="flex justify-between mb-2">
                                 <Activity className="w-4 h-4 text-gray-400"/>
                                 <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Good</span>
                             </div>
                             <div className="text-xs text-gray-400">Blood Pressure</div>
                             <div className="text-xl font-bold">112<span className="text-sm font-normal text-gray-400">/75</span></div>
                         </div>
                         <div className="bg-white p-4 rounded-3xl shadow-sm">
                             <div className="flex justify-between mb-2">
                                 <Droplet className="w-4 h-4 text-gray-400"/>
                                 <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Good</span>
                             </div>
                             <div className="text-xs text-gray-400">Blood Glucose</div>
                             <div className="text-xl font-bold">80<span className="text-sm font-normal text-gray-400">.90</span></div>
                         </div>
                     </div>

                     <div className="bg-vitrus-dark text-white p-5 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-xs text-gray-400 mb-1">Coaching Goals</div>
                            <div className="text-sm font-medium mb-4">You've Rested <span className="text-vitrus-lime">195h</span> this month</div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-1">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">1</div>
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">2</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">30</div>
                                    <div className="text-[9px] text-gray-400">mins walk</div>
                                </div>
                            </div>
                        </div>
                     </div>

                     <div className="bg-white p-4 rounded-3xl relative overflow-hidden h-40">
                         <div className="text-xs text-gray-500 mb-1">Wellness Summary</div>
                         <div className="text-sm font-medium mb-4">You've Rested <span className="text-green-600">195h</span> this month</div>
                         <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-4">
                             <div className="flex flex-col">
                                 <span className="text-xs font-bold">Breathing</span>
                                 <span className="text-2xl font-bold">142<span className="text-sm text-gray-400 font-normal">/160h</span></span>
                             </div>
                             <img src="https://picsum.photos/seed/breathe/80/80" className="w-20 h-20 rounded-full object-cover" alt="breathe" />
                         </div>
                     </div>
                 </div>

                 {/* Column 2: Calendar & Schedule */}
                 <div className="flex flex-col gap-6">
                     <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-sm">Medical Record</h4>
                            <span className="text-xs text-green-600 font-bold">195h</span>
                        </div>
                        {/* Tiny calendar grid */}
                         <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500">
                             {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="font-bold text-black">{d}</div>)}
                             {Array.from({length: 28}, (_, i) => i+1).map(d => (
                                 <div key={d} className={`w-6 h-6 mx-auto flex items-center justify-center rounded-full ${d===10 ? 'bg-black text-white':''}`}>{d}</div>
                             ))}
                         </div>
                     </div>

                     <div className="bg-white p-6 rounded-3xl shadow-sm flex-1">
                         <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-sm">Morning Routine</h4>
                             <div className="text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded-full">On Schedule</div>
                         </div>
                         <div className="flex flex-col gap-4">
                             <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><Sun className="w-4 h-4 text-orange-400"/></div>
                                 <div className="flex-1">
                                     <div className="text-xs font-bold">08:00 AM</div>
                                     <div className="text-[10px] text-gray-400">Daily Health Logging</div>
                                 </div>
                             </div>
                             <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><Clock className="w-4 h-4 text-blue-400"/></div>
                                 <div className="flex-1">
                                     <div className="text-xs font-bold">07:00 AM</div>
                                     <div className="text-[10px] text-gray-400">Medications</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Column 3: Shoes & Water */}
                 <div className="flex flex-col gap-6">
                     <div className="bg-[#EAF3DA] p-6 rounded-3xl shadow-sm">
                         <div className="text-xs text-gray-500 mb-1">Weekly Recap</div>
                         <div className="text-sm font-medium mb-6">You've Rested <span className="text-green-600 font-bold">195h</span> this month</div>
                         <div className="grid grid-cols-3 gap-2 text-center mb-6">
                             <div>
                                 <div className="text-[10px] text-gray-500 uppercase">Activities</div>
                                 <div className="text-xl font-bold">5</div>
                             </div>
                             <div>
                                 <div className="text-[10px] text-gray-500 uppercase">Distance</div>
                                 <div className="text-xl font-bold">26.9km</div>
                             </div>
                             <div>
                                 <div className="text-[10px] text-gray-500 uppercase">Time</div>
                                 <div className="text-xl font-bold">4h 8m</div>
                             </div>
                         </div>
                         <div className="flex justify-around">
                             <div className="bg-vitrus-lime w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-black/10">M</div>
                             <div className="bg-white/50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">T</div>
                             <div className="bg-vitrus-lime w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-black/10">W</div>
                         </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-4 rounded-3xl text-center">
                             <div className="text-[10px] text-gray-400 mb-2">Current Shoes</div>
                             <div className="text-xs font-bold mb-2">Cloudrunner 2</div>
                             <img src="https://picsum.photos/seed/shoe/100/60" className="w-full h-12 object-contain mix-blend-multiply mb-2" alt="shoe" />
                             <div className="text-[9px] text-gray-400">Used 2 Days ago</div>
                         </div>
                          <div className="bg-white p-4 rounded-3xl text-center">
                             <div className="text-[10px] text-gray-400 mb-2">Connected Device</div>
                             <div className="text-xs font-bold mb-2">Apple Watch Ultra 2</div>
                             <img src="https://picsum.photos/seed/iwatch/100/60" className="w-full h-12 object-contain mix-blend-multiply mb-2" alt="watch" />
                             <div className="text-[9px] text-gray-400">Last Sync 2 Days ago</div>
                         </div>
                     </div>

                     <div className="bg-white p-4 rounded-3xl flex-1">
                         <div className="flex items-center gap-2 mb-4">
                             <Droplet className="w-4 h-4 text-blue-400" />
                             <div className="text-xs font-bold">Water Intake</div>
                         </div>
                         <div className="text-xl font-bold mb-4">14,2 Liters</div>
                         <div className="flex items-end justify-between h-20 gap-2">
                             <div className="w-2 bg-gray-100 h-full rounded-full relative"><div className="absolute bottom-0 left-0 w-full bg-blue-400 h-[40%] rounded-full"></div></div>
                             <div className="w-2 bg-gray-100 h-full rounded-full relative"><div className="absolute bottom-0 left-0 w-full bg-blue-400 h-[60%] rounded-full"></div></div>
                             <div className="w-2 bg-gray-100 h-full rounded-full relative"><div className="absolute bottom-0 left-0 w-full bg-orange-400 h-[30%] rounded-full"></div></div>
                             <div className="w-2 bg-gray-100 h-full rounded-full relative"><div className="absolute bottom-0 left-0 w-full bg-blue-400 h-[80%] rounded-full"></div></div>
                         </div>
                     </div>
                 </div>

             </div>
         </div>
      </div>
    </section>
  );
};