import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            
            <div className="flex-1">
                <span className="text-sm text-gray-500">© 2024 Fit n Fab</span>
            </div>

            <div className="flex-1">
                <h4 className="font-bold text-lg mb-4">Contact Information:</h4>
                <p className="text-sm text-gray-600 mb-2">+91 98765 43210</p>
                <p className="text-sm text-gray-600 mb-4">info@fitnfab.com</p>
                <p className="text-sm text-gray-600">
                    Ravet, Pune,<br/>
                    Maharashtra,<br/>
                    India
                </p>
            </div>

            <div className="flex-1">
                <h4 className="font-bold text-lg mb-4">Links:</h4>
                <ul className="flex flex-col gap-2 text-sm text-gray-600">
                    <li><a href="#" className="underline">Privacy Policy</a></li>
                    <li><a href="#" className="underline">Terms & Conditions</a></li>
                    <li><a href="#" className="underline">Cookie Policy</a></li>
                    <li><a href="#" className="underline">Website development</a></li>
                </ul>
            </div>
        </div>

        <div className="w-full text-center">
            <h1 className="text-[12vw] font-medium leading-none tracking-tighter text-vitrus-dark">Fit n Fab</h1>
            <p className="text-right text-sm text-gray-500 mt-4 pr-4">Feel stronger, healthier, and more confident.</p>
        </div>
      </div>
    </footer>
  );
};