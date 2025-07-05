import React from 'react';
import { 
  Home, 
  Calendar, 
  TrendingUp, 
  User, 
  Bell, 
  Play,
  Clock,
  Target,
  Award,
  Search
} from 'lucide-react';

interface User {
  name: string;
  email: string;
}

interface DashboardScreenProps {
  user: User | null;
  onSignOut: () => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, onSignOut }) => {
  const workouts = [
    {
      id: 1,
      title: "Bridge",
      tutorials: "8 Tutorials",
      duration: "30 Minutes",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Push up",
      tutorials: "12 Tutorials",
      duration: "60 Minutes",
      image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Hip Thrust",
      tutorials: "10 Tutorials",
      duration: "45 Minutes",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const workoutCategories = [
    { name: "Full Body", active: true },
    { name: "Legs", active: false },
    { name: "Hands", active: false },
    { name: "Upper", active: false }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Welcome Back</p>
              <h2 className="text-xl font-semibold">{user?.name || 'User'}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200">
              <Bell className="w-6 h-6" />
            </button>
            <button 
              onClick={onSignOut}
              className="text-lime-400 text-sm hover:underline"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Challenge Card */}
        <div className="mx-6 mb-6">
          <div className="bg-gradient-to-r from-blue-400 to-lime-500 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
              <img 
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Challenge"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative z-10">
              <p className="text-black text-sm mb-2">We have new challenge!</p>
              <h3 className="text-black text-3xl font-bold mb-4">
                200 <span className="text-lg font-normal">Step</span>
              </h3>
              <button className="bg-black text-lime-400 px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all duration-200">
                Join Challenge
              </button>
            </div>
          </div>
        </div>

        {/* Workout Categories */}
        <div className="px-6 mb-6">
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {workoutCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  category.active
                    ? 'bg-lime-400 text-black'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Suggested Workout */}
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Suggested Workout</h3>
            <button className="text-lime-400 text-sm hover:underline">See All</button>
          </div>
          
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div key={workout.id} className="flex items-center space-x-4 bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all duration-200">
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <img 
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{workout.title}</h4>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Play className="w-3 h-3 mr-1" />
                      {workout.tutorials}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {workout.duration}
                    </span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center hover:bg-yellow-300 transition-all duration-200">
                  <Play className="w-4 h-4 text-black" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-black border-t border-white/10">
          <div className="flex items-center justify-around p-4">
            <button className="flex flex-col items-center space-y-1 text-lime-400">
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                <Home className="w-4 h-4 text-black" />
              </div>
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
              <Calendar className="w-6 h-6" />
              <span className="text-xs">Calendar</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">Progress</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
              <User className="w-6 h-6" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;