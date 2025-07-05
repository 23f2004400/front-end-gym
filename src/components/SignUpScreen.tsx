import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, Upload } from 'lucide-react';

interface SignUpScreenProps {
  onSignUp: (data: { 
    name: string; 
    email: string; 
    password: string;
    gender: string;
    height: string;
    weight: string;
    photo: File | null;
  }) => void;
  onBackToAuth: () => void;
  onSwitchToSignIn: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ 
  onSignUp, 
  onBackToAuth, 
  onSwitchToSignIn 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    height: '',
    weight: '',
    photo: null as File | null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      onSignUp(formData);
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Green glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full bg-[#A8FF35] blur-[120px] opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <button
            onClick={onBackToAuth}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Create Account</h1>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#A8FF35] mb-2">Sign Up</h2>

              {/* Profile Upload */}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                {formData.photo ? (
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <Upload className="w-8 h-8 text-[#A8FF35]" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange('photo', e.target.files ? e.target.files[0] : null)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>

              <p className="text-gray-400 mt-3">Upload profile pic</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Height */}
              <div>
                <input
                  type="text"
                  placeholder="Height (e.g., 5'7'' or 170cm)"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                />
              </div>

              {/* Weight */}
              <div>
                <input
                  type="text"
                  placeholder="Weight (e.g., 65kg)"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-white/10 border border-[#A8FF35] rounded-2xl py-4 px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A8FF35] transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#A8FF35] text-black font-semibold py-4 rounded-2xl text-lg hover:opacity-90 transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-2" />
                    Creating...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Switch to Log In */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={onSwitchToSignIn}
                  className="text-[#A8FF35] font-semibold hover:underline transition"
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
