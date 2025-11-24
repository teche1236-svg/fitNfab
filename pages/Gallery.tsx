import React, { useState } from 'react';
import { X, ZoomIn, Calendar, MapPin } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
  date: string;
  location?: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryImages: GalleryImage[] = [
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkca4gnJ9K4wk1A56Wnlb4jtsLyCDisNPnO4PdL3OCcnBPdWJZQSvWnzu58_G2s8_07RzD0A6E7z6Yl3oelGC_TboUzImxFJZISTyIgojNXfta0W0a8r4Kmy8WOv46hYMb07sgL-XH0RIfWM0OaL1CkavxxFvlhtPu7Q-LjcSFd3yLh-6AwVLF_vqeXfHsuUF1Rw_2BmKb9-CYP_dkeE-f604tnq4RIsJqTo=w1280',
      title: 'Health Workshop Session',
      category: 'Workshops',
      date: 'Nov 2024',
      location: 'San Francisco, CA'
    },
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkevaXJSF_k25tUd4FraWw48awg7ZQgePysySHVyiipDqaeaPxpLLkPrJF4OArA9-txO2pQaAqh2QGkMQXMI2KCoZCF8AugzomY1dP_Ow8YPLF-GeeM750NGeenW2SF0bby8muw4JeLXWfGpLmT5GS1sml36GJfxSGCyi3PGhSjt21I98UBF3tVw-NbDAszpHnbi5Hj6fPVeGLzbQb585lrw17Lww8KtFUTn=w1280',
      title: 'Community Wellness Event',
      category: 'Events',
      date: 'Oct 2024',
      location: 'New York, NY'
    },
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkeINJAp8CDsvDPeANcNuRKjTNIm3sRbW25J14lhRKFvetzYFKtuW8If3Lb-qvOMpYZugwIfL23KBL5JqloxzIpaRTQKgZCOgEa4ogClIMPnItsrLF_FVTpt8gOC3mQlogeJa1b4UiHQ8QRCxX0VTmYvdklFDtqrtax540lnjymizZeSYXU4HWi85La8e1B3lMGi2v_gzIjmYeiHxTonqDXf3ciyxuMms2n3YEg=w1280',
      title: 'Team Collaboration',
      category: 'Team',
      date: 'Sep 2024',
      location: 'Remote'
    },
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkfK1EfLfQyn0r2cxwL5e2OQHmzP7xo-wo_tcc5_H0NfggH-gsCtvbC7Vna0GxBGBCdr4J6rlxx7DdGV9GK4-bbdWzosJtR_P_4Fr_CfrINOLbjjRXODu8j_UZobFZAeEIBNOUma_cmpvhlWWxRW0SlQpmrIw6xbEvNNhawmLMt9iSFDntVmP5steRQaVBnuqcyE47-nRmp9sJDNQikXodNKsgK2rx3eG2pfIlc=w1280',
      title: 'Health Tech Innovation',
      category: 'Innovation',
      date: 'Aug 2024',
      location: 'Boston, MA'
    },
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkdqYkEzfQ0SlGzlUUrfXow2Inho6W_VodN1pPFaVnisV-wj3Ly1U90Mzs2uHjDxaRuN2Txn3Am8aohuU4Vd_zsQrYBx3sdc7merjwGmihP19khQiY0bcyH6dwG7p2pTM6v-ryKJ7NlLpH_-sSQL50cHPYPUVsDvmn8lrgLZurJ_ybQw0T5bM54C7sNTkebrATE8Ra-Yc80HtJ-cV0iKFL_QuwlOBrJifnP4Yt8=w1280',
      title: 'Wellness Conference',
      category: 'Events',
      date: 'Jul 2024',
      location: 'Los Angeles, CA'
    },
    {
      url: 'https://lh3.googleusercontent.com/sitesv/AAzXCkfK3nerur-U-h3GjV2SBigTavcV2cFIMEHR6liH0ue25SlpwOYJbMdyZ5mC2_FUny5QVHMquSoTnm0DmKB1fjlWHyBju-VRgAkP7LKPGtRTDFZzu6mcsfxRZqLff7CcTW5pIxKVY5Q6xlH8vFGQioju09qxpwZZ4z-g2F2e0FbBUCnr6RDdrSAQvf0WQPb8aKecbGaA5KiqR8t0O_Rbj5-yxrwnpkyb17_F=w1280',
      title: 'Product Launch Event',
      category: 'Events',
      date: 'Jun 2024',
      location: 'Seattle, WA'
    }
  ];

  const categories = ['All', 'Workshops', 'Events', 'Team', 'Innovation'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F9F9FB]">
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#EFF1F0] px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="inline-block bg-vitrus-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Gallery
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-vitrus-dark leading-[0.95] mb-8">
            Moments That Matter
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Explore our journey through workshops, events, and community gatherings as we revolutionize health tracking together.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-12 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-vitrus-dark text-white shadow-lg'
                    : 'bg-[#F9F9FB] text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#F9F9FB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-vitrus-lime text-vitrus-dark px-3 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{image.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{image.date}</span>
                        </div>
                        {image.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{image.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Info Section (Always Visible) */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#F9F9FB] text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-vitrus-dark mb-2">{image.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-2">50+</div>
              <div className="text-gray-500">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-2">5K+</div>
              <div className="text-gray-500">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-2">30+</div>
              <div className="text-gray-500">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-vitrus-dark mb-2">100+</div>
              <div className="text-gray-500">Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-vitrus-dark">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join our upcoming events and workshops to connect with our community
          </p>
          <button className="bg-vitrus-lime text-vitrus-dark px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-xl">
            View Upcoming Events
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-6 text-center">
              <div className="inline-block bg-vitrus-lime px-4 py-2 rounded-full text-sm font-medium mb-3">
                {selectedImage.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                {selectedImage.title}
              </h3>
              <div className="flex items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{selectedImage.date}</span>
                </div>
                {selectedImage.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{selectedImage.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
