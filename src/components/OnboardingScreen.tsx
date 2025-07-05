import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingSlide {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  buttonText: string;
}

interface OnboardingScreenProps {
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
}

const slides: OnboardingSlide[] = [
  {
    title: "No Excuses",
    subtitle: "Just Do The",
    description: "Fitness is not about being better than someone else. It's about being better than you used to be.",
    image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
    buttonText: "Get Started"
  },
  {
    title: "Transform",
    subtitle: "Your Body",
    description: "Every workout brings you one step closer to your goals. Consistency is the key to transformation.",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    buttonText: "Continue"
  },
  {
    title: "Achieve",
    subtitle: "Your Goals",
    description: "Success isn't just about what you accomplish, but what you inspire others to do.",
    image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
    buttonText: "Start Journey"
  }
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  currentSlide,
  onNext,
  onPrev,
  onComplete
}) => {
  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;

  const handleButtonClick = () => {
    if (isLastSlide) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Arrows - Desktop Only */}
        <div className="hidden md:flex justify-between items-center p-6">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={onNext}
            disabled={isLastSlide}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-end p-6 pb-24">
          <div className="max-w-lg mx-auto w-full text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {slide.title}
              {slide.subtitle && (
                <>
                  <br />
                  <span className="text-lime-400">{slide.subtitle}</span>
                </>
              )}
            </h1>
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-md mx-auto md:mx-0">
              "{slide.description}"
            </p>

            <button
              onClick={handleButtonClick}
              className="w-full max-w-sm mx-auto md:mx-0 bg-lime-400 text-black font-semibold py-4 px-8 rounded-full text-lg hover:bg-lime-300 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              {slide.buttonText}
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index < currentSlide) onPrev();
                if (index > currentSlide) onNext();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-lime-400 w-6' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;