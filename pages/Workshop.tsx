import React from 'react';
import { Calendar, Clock, MapPin, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';

export const Workshop: React.FC = () => {
  const upcomingWorkshops = [
    {
      title: 'Laghu Shankh Prakshalan – Online Detox Workshop',
      date: 'May 25, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Online (Zoom)',
      spots: 'Limited spots available',
      level: 'Beginner',
      color: 'bg-[#EAF3DA]',
      price: '₹99',
      featured: true
    },
    {
      title: 'Yoga for Beginners',
      date: 'Jun 5, 2025',
      time: '6:00 AM - 7:00 AM',
      location: 'Ravet Studio',
      spots: '12 spots left',
      level: 'Beginner',
      color: 'bg-[#FDFEE8]',
      price: '₹299'
    },
    {
      title: 'CrossFit Fundamentals',
      date: 'Jun 12, 2025',
      time: '5:00 PM - 6:30 PM',
      location: 'Ravet Studio',
      spots: '8 spots left',
      level: 'Intermediate',
      color: 'bg-[#F4E4FF]',
      price: '₹499'
    }
  ];

  const pastWorkshops = [
    {
      title: 'Yoga for Stress Relief',
      attendees: 45,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop'
    },
    {
      title: 'Zumba Dance Fitness',
      attendees: 60,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop'
    },
    {
      title: 'CrossFit Basics',
      attendees: 35,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9FB]">
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#EFF1F0] px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-block bg-vitrus-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
                Health Workshops
              </div>
              <h1 className="text-5xl md:text-7xl font-medium text-vitrus-dark leading-[0.95] mb-8">
                Learn, Grow, and Thrive Together
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                Join our expert-led workshops to deepen your understanding of health tracking, wellness optimization, and personalized care strategies.
              </p>
              <button className="bg-vitrus-dark text-white px-8 py-4 rounded-full flex items-center gap-3 group hover:scale-105 transition-transform shadow-lg">
                <span className="font-medium text-lg">Browse Workshops</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop" 
                  alt="Workshop" 
                  className="w-full h-[400px] object-cover rounded-[2rem] mb-6"
                />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-medium text-vitrus-dark">50+</div>
                    <div className="text-sm text-gray-500">Workshops</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-vitrus-dark">5K+</div>
                    <div className="text-sm text-gray-500">Attendees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-vitrus-dark">4.9</div>
                    <div className="text-sm text-gray-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-gray-500 text-lg">
              Reserve your spot in our next sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, i) => (
              <div key={i} className={`${workshop.color} rounded-[2.5rem] p-8 hover:shadow-xl transition-shadow ${workshop.featured ? 'ring-2 ring-vitrus-lime' : ''}`}>
                {workshop.featured && (
                  <div className="bg-vitrus-lime text-vitrus-dark px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    ⭐ FEATURED WORKSHOP
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-vitrus-dark">
                    {workshop.level}
                  </span>
                  <span className="text-sm font-medium text-green-700">{workshop.spots}</span>
                </div>

                <h3 className="text-2xl font-medium text-vitrus-dark mb-6 leading-tight">
                  {workshop.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    {workshop.location.includes('Online') ? (
                      <Video className="w-5 h-5" />
                    ) : (
                      <MapPin className="w-5 h-5" />
                    )}
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-2xl p-4 mb-6">
                  <div className="text-3xl font-bold text-vitrus-dark">{workshop.price}</div>
                  <div className="text-xs text-gray-500">Per person</div>
                </div>

                <button className="w-full bg-vitrus-dark text-white py-3 rounded-full font-medium hover:scale-[1.02] transition-transform">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshop Details */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#F9F9FB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-gradient-to-br from-[#EAF3DA] to-[#FDFEE8] rounded-[3rem] p-12 md:p-16 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-vitrus-lime px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ FEATURED WORKSHOP
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
                  Laghu Shankh Prakshalan
                </h2>
                <p className="text-xl text-gray-600">
                  Online Detox Workshop – Ancient Yogic Gut Cleansing
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 mb-8">
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  A guided online gut-cleansing session rooted in ancient yogic techniques. Perfect for those suffering from constipation, acidity, or looking for a natural detox solution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-vitrus-dark" />
                    <div>
                      <div className="text-sm text-gray-500">Date</div>
                      <div className="font-medium text-vitrus-dark">25th May 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-vitrus-dark" />
                    <div>
                      <div className="text-sm text-gray-500">Time</div>
                      <div className="font-medium text-vitrus-dark">10:00 AM - 11:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-vitrus-dark" />
                    <div>
                      <div className="text-sm text-gray-500">Platform</div>
                      <div className="font-medium text-vitrus-dark">Online (Zoom)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-vitrus-lime rounded-2xl p-6 text-center mb-8">
                  <div className="text-5xl font-bold text-vitrus-dark mb-2">₹99</div>
                  <div className="text-sm text-gray-700">Special Introductory Price</div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-vitrus-dark mb-6">Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Detoxifies the digestive tract',
                      'Eases constipation, ulcers & bloating',
                      'Supports weight loss',
                      'Boosts energy & mental clarity',
                      'All-natural & beginner-friendly'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-vitrus-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-vitrus-dark" />
                        </div>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-medium text-vitrus-dark mb-6">Payment & Registration</h3>
                  <p className="text-gray-600 mb-6">To confirm your spot, follow these simple steps:</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-vitrus-dark text-white flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-medium text-vitrus-dark mb-2">Make the Payment</div>
                        <div className="bg-[#F9F9FB] rounded-xl p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">GPay:</span>
                            <span className="text-gray-600">9168050392</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">UPI:</span>
                            <span className="text-gray-600">Poorti@okicici</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-2">OR scan the QR code</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-vitrus-dark text-white flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-medium text-vitrus-dark mb-2">Fill the Registration Form</div>
                        <p className="text-gray-600 text-sm">Complete the registration form after payment to secure your spot</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-vitrus-dark text-white py-4 rounded-full font-medium text-lg hover:scale-[1.02] transition-transform shadow-lg">
                    Register Now for ₹99
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
              Past Workshop Highlights
            </h2>
            <p className="text-gray-500 text-lg">
              See what our community has experienced
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop, i) => (
              <div key={i} className="bg-[#F9F9FB] rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-vitrus-dark mb-4">{workshop.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{workshop.attendees} attendees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-medium text-vitrus-dark">{workshop.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#EFF1F0]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-4">
              What Attendees Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The yoga workshop helped me find balance in my hectic life. Poorti is an amazing instructor!",
                name: "Priya Sharma",
                role: "Workshop Attendee",
                img: "https://i.pravatar.cc/150?img=1"
              },
              {
                quote: "Best Zumba class I've attended! High energy and so much fun. Highly recommend!",
                name: "Rahul Desai",
                role: "Fitness Enthusiast",
                img: "https://i.pravatar.cc/150?img=12"
              },
              {
                quote: "CrossFit fundamentals workshop was perfect for beginners. Great community at Fit n Fab!",
                name: "Sneha Patel",
                role: "Fit n Fab Member",
                img: "https://i.pravatar.cc/150?img=5"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8">
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-medium text-vitrus-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-vitrus-dark">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join our Laghu Shankh Prakshalan workshop and experience the power of ancient yogic detox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-vitrus-lime text-vitrus-dark px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-xl">
              View All Workshops
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-vitrus-dark transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
