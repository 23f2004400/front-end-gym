import React, { useState } from 'react';
import OnboardingScreen from './components/OnboardingScreen';
import AuthChoiceScreen from './components/AuthChoiceScreen';
import SignUpScreen from './components/SignUpScreen';
import SignInScreen from './components/SignInScreen';
import DashboardScreen from './components/DashboardScreen';

type AppState = 'onboarding' | 'auth-choice' | 'signup' | 'signin' | 'dashboard';

interface User {
  name: string;
  email: string;
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('onboarding');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const handleOnboardingNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleOnboardingPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleOnboardingComplete = () => {
    setCurrentState('auth-choice');
  };

  const handleSignUp = (data: { name: string; email: string; password: string }) => {
    setUser({ name: data.name, email: data.email });
    setCurrentState('dashboard');
  };

  const handleSignIn = (data: { email: string; password: string }) => {
    // In a real app, you'd validate credentials here
    setUser({ name: 'User', email: data.email });
    setCurrentState('dashboard');
  };

  const handleBackToAuth = () => {
    setCurrentState('auth-choice');
  };

  const handleSwitchToSignUp = () => {
    setCurrentState('signup');
  };

  const handleSwitchToSignIn = () => {
    setCurrentState('signin');
  };

  const handleGoToSignUp = () => {
    setCurrentState('signup');
  };

  const handleGoToSignIn = () => {
    setCurrentState('signin');
  };

  const renderCurrentScreen = () => {
    switch (currentState) {
      case 'onboarding':
        return (
          <OnboardingScreen
            currentSlide={currentSlide}
            onNext={handleOnboardingNext}
            onPrev={handleOnboardingPrev}
            onComplete={handleOnboardingComplete}
          />
        );
      case 'auth-choice':
        return (
          <AuthChoiceScreen
            onGoToSignUp={handleGoToSignUp}
            onGoToSignIn={handleGoToSignIn}
          />
        );
      case 'signup':
        return (
          <SignUpScreen
            onSignUp={handleSignUp}
            onBackToAuth={handleBackToAuth}
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        );
      case 'signin':
        return (
          <SignInScreen
            onSignIn={handleSignIn}
            onBackToAuth={handleBackToAuth}
            onSwitchToSignUp={handleSwitchToSignUp}
          />
        );
      case 'dashboard':
        return (
          <DashboardScreen
            user={user}
            onSignOut={() => {
              setUser(null);
              setCurrentState('auth-choice');
            }}
          />
        );
      default:
        return null;
    }
  };

  return <div className="min-h-screen">{renderCurrentScreen()}</div>;
}

export default App;