import React from 'react';
import { Dumbbell } from 'lucide-react';

interface AuthChoiceScreenProps {
  onGoToSignUp: () => void;
  onGoToSignIn: () => void;
}

const AuthChoiceScreen: React.FC<AuthChoiceScreenProps> = ({
  onGoToSignUp,
  onGoToSignIn
}) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Logo */}
        <div className="flex justify-center pt-16 pb-8">
          <div className="p-4 rounded-full bg-lime-400">
            <Dumbbell className="w-8 h-8 text-black" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Get Fit,
            <br />
            Get Strong,
            <br />
            <span className="text-lime-400">Get Healthy!</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-16 max-w-md leading-relaxed">
            Welcome to our fitness training program designed to help you achieve your fitness goals and transform your body and mind.
          </p>
        </div>

        {/* Auth Buttons */}
        <div className="p-6 pb-12 space-y-4">
          <button
            onClick={onGoToSignUp}
            className="w-full bg-white text-black font-semibold py-4 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            Sign up
          </button>
          
          <button
            onClick={onGoToSignIn}
            className="w-full bg-transparent border-2 border-white text-white font-semibold py-4 rounded-full text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200"
          >
            Sign in
          </button>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center pb-6">
          <div className="w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AuthChoiceScreen;