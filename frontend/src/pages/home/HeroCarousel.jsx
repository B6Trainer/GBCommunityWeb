import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import {X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "@/assets/css/carousel.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GoldBoxPlan1 from '@/assets/images/GoldBoxPlan1.jpg';
import GoldBoxPlan2 from '@/assets/images/GoldBoxPlan2.jpg';
import ComPlan1 from '@/assets/images/ComPlan1.jpg';
import ComPlan2 from '@/assets/images/ComPlan2.jpg';
import Tech1 from '@/assets/images/Tech1.jpg';
import ZaraAi from '@/assets/images/ZaraAi.gif';

const HeroCarousel = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [carouselKey, setCarouselKey] = useState(0);
  const sectionid=props.sectionid;

  // Force carousel to remount when component mounts
  useEffect(() => {
    setCarouselKey(prev => prev + 1);
  }, []);

  const carouselImages = [
    GoldBoxPlan1,
    GoldBoxPlan2,
    ComPlan1,    
    ComPlan2,
    Tech1,
    ZaraAi,
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 carousel-arrow rounded-full flex items-center justify-center"
    >
      <ChevronRight className="text-gold-400 w-4 h-4" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 carousel-arrow rounded-full flex items-center justify-center"
    >
      <ChevronLeft className="text-gold-400 w-4 h-4" />
    </button>
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     window.dispatchEvent(new Event('resize'));
  //   };
  //   handleResize(); // run once
  //   window.addEventListener('orientationchange', handleResize);
  //   return () => window.removeEventListener('orientationchange', handleResize);
  // }, []);



  return (
    <div className="hero-carousel-wrapper">
      {/* Hero Carousel Section */}
      <section className="hero-carousel" data-testid={sectionid}>
        <div className="carousel-container">
          <Slider key={carouselKey} {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="carousel-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="carousel-image-wrapper">
                    <img
                      src={image}
                      alt={`Gold investment ${index + 1}`}
                      className="carousel-image"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
          data-testid="image-popup"
        >
          <div className="image-popup-content">
            <button
              onClick={() => setSelectedImage(null)}
              className="image-popup-close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="image-popup-img"
            />
          </div>
        </div>
      )}
    </div>
  );


  //   <div >
  //     {/* Hero Carousel Section */}
  //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 mb-20" data-testid="hero-section">
  //       <div className="carousel-container">
  //         <Slider key={carouselKey} {...carouselSettings}>
  //           {carouselImages.map((image, index) => (
  //             <div key={index} className="px-1">
  //               <motion.div
  //                 initial={{ opacity: 0, scale: 0.8 }}
  //                 animate={{ opacity: 1, scale: 1 }}
  //                 transition={{ delay: index * 0.1, duration: 0.5 }}
  //                 className="relative group cursor-pointer"
  //                 onClick={() => setSelectedImage(image)}
  //               >
  //                 <div className="aspect-video overflow-hidden rounded-2xl glass-morphism border border-gold-400/30 hover:scale-105 transition-transform duration-300">
  //                   <img
  //                     src={image}
  //                     alt={`Gold investment ${index + 1}`}
  //                     className="w-full h-full object-cover"
  //                     loading="lazy"
  //                   />
  //                 </div>
  //               </motion.div>
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>

  //       <style>{`
  //         .carousel-container .slick-dots {
  //           bottom: -40px;
  //         }
  //         .carousel-container .slick-dots li button:before {
  //           color: #FFD700;
  //           font-size: 10px;
  //         }
  //         .carousel-container .slick-dots li.slick-active button:before {
  //           color: #FFD700;
  //         }
  //         .carousel-container .slick-slide > div {
  //           margin: 0 8px;
  //         }
  //       `}</style>
  //     </section>

  //     {/* Image Popup - 80% screen */}
  //     {selectedImage && (
  //       <div
  //         className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
  //         onClick={() => setSelectedImage(null)}
  //         data-testid="image-popup"
  //       >
  //         <div className="relative w-[80%] h-[80%] flex items-center justify-center">
  //           <button
  //             onClick={() => setSelectedImage(null)}
  //             className="absolute -top-12 right-0 text-gold-400 hover:text-gold-300 transition-smooth z-10"
  //           >
  //             <X size={32} />
  //           </button>
  //           <img
  //             src={selectedImage}
  //             alt="Expanded view"
  //             className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl gold-glow"
  //           />
  //         </div>
  //       </div>
  //     )}

  //   </div>
  // );
};

export default HeroCarousel;