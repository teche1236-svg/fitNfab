import React from 'react';
import { Target, Heart, Users, Award, TrendingUp, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9FB]">
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#EFF1F0] px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block bg-vitrus-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Fit n Fab
            </div>
            <h1 className="text-5xl md:text-7xl font-medium text-vitrus-dark leading-[0.95] mb-8">
              A Journey from Corporate to Fitness & Wellness
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Founded by Poorti Abhijeet Nagre, Fit n Fab began as a mission to make health and fitness accessible to everyone—transforming lives through the power of movement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="bg-[#EAF3DA] rounded-[2.5rem] p-12">
              <div className="w-16 h-16 rounded-full bg-vitrus-lime flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-vitrus-dark" />
              </div>
              <h2 className="text-3xl font-medium text-vitrus-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                At Fit n Fab, we believe fitness is not just about weight loss—it's about feeling good, building strength, and finding joy in movement.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-vitrus-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Improve physical & mental well-being</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-vitrus-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Stay active, energetic, and stress-free</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-vitrus-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Build a positive, supportive fitness community</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFEE8] rounded-[2.5rem] p-12">
              <div className="w-16 h-16 rounded-full bg-[#F2F649] flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-vitrus-dark" />
              </div>
              <h2 className="text-3xl font-medium text-vitrus-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a thriving hub where people of all fitness levels come together to prioritize their health and transform their lives through Yoga, Zumba, and CrossFit—making fitness accessible, enjoyable, and sustainable for everyone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#F9F9FB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-6 leading-tight">
                From Boardrooms to Fitness Studios
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  After working for 15 years in the corporate world with leading companies like Walmart, Crisil, and ICICI, founder Poorti Abhijeet Nagre personally experienced the toll that stress, long hours, and sedentary lifestyles can take on overall well-being.
                </p>
                <p>
                  Realizing the need for a balanced, active, and stress-free life, she took the leap from boardrooms to fitness studios—turning her passion for health into a purpose-driven journey.
                </p>
                <p>
                  Fit n Fab was born to help people feel stronger, healthier, and more confident through the power of movement. With two studios in Ravet, Fit n Fab is now a thriving hub where people of all fitness levels come together to prioritize their health and transform their lives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <div className="text-4xl font-medium text-vitrus-dark mb-2">15+</div>
                  <div className="text-sm text-gray-500">Years Corporate Experience</div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <div className="text-4xl font-medium text-vitrus-dark mb-2">2</div>
                  <div className="text-sm text-gray-500">Studios in Ravet</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <div className="text-4xl font-medium text-vitrus-dark mb-2">500+</div>
                  <div className="text-sm text-gray-500">Happy Members</div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <div className="text-4xl font-medium text-vitrus-dark mb-2">3</div>
                  <div className="text-sm text-gray-500">Fitness Programs</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
              What We Offer
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Diverse fitness programs designed for every body and every goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#EAF3DA] rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-vitrus-lime flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-vitrus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-vitrus-dark mb-3">Yoga</h3>
              <p className="text-gray-600 leading-relaxed">
                Find balance, flexibility, and inner peace through traditional and modern yoga practices suitable for all levels.
              </p>
            </div>

            <div className="bg-[#FDFEE8] rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#F2F649] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-vitrus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-vitrus-dark mb-3">Zumba</h3>
              <p className="text-gray-600 leading-relaxed">
                Dance your way to fitness with high-energy Zumba classes that make cardio fun and exciting for everyone.
              </p>
            </div>

            <div className="bg-[#F4E4FF] rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#E0B3FF] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-vitrus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-vitrus-dark mb-3">CrossFit</h3>
              <p className="text-gray-600 leading-relaxed">
                Build strength, endurance, and power with our challenging CrossFit workouts designed to push your limits.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#EFF1F0]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
              Meet Our Founder
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The visionary behind Fit n Fab's transformation journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop" 
                    alt="Poorti Abhijeet Nagre" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-medium text-vitrus-dark mb-2">Poorti Abhijeet Nagre</h3>
                  <p className="text-lg text-gray-500 mb-6">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With 15 years of corporate experience at Walmart, Crisil, and ICICI, Poorti transformed her passion for wellness into a mission to help others achieve balanced, healthy lives.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-vitrus-lime"></div>
                      <span className="text-sm text-gray-600">15+ Years Corporate Leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-vitrus-lime"></div>
                      <span className="text-sm text-gray-600">Certified Fitness Professional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-vitrus-lime"></div>
                      <span className="text-sm text-gray-600">Passionate Wellness Advocate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-vitrus-dark">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join the Fit n Fab community and start your fitness journey today with Yoga, Zumba, or CrossFit
          </p>
          <button className="bg-vitrus-lime text-vitrus-dark px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-xl">
            Join Fit n Fab Today
          </button>
        </div>
      </section>

    </div>
  );
};
