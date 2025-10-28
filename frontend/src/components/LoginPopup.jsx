import { X } from 'lucide-react';
import { useState } from 'react';

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log('Login attempted with:', username, password);
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google auth
    console.log('Google login clicked');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" data-testid="login-popup">
      <div className="relative w-full max-w-md mx-4 glass-morphism border border-gold-400/30 rounded-2xl p-8 gold-glow animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold-400 hover:text-gold-300 transition-smooth"
          data-testid="close-login-popup"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gold-embossed mb-2">Welcome Back</h2>
          <p className="text-gold-500">Login to your Gold Bucks account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gold-400 mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth"
              placeholder="Enter your username"
              data-testid="username-input"
            />
          </div>

          <div>
            <label className="block text-gold-400 mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth"
              placeholder="Enter your password"
              data-testid="password-input"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-metallic-gold"
            data-testid="login-submit-button"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gold-400/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 glass-morphism text-gold-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-6 w-full py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text hover:bg-gold-400/10 transition-smooth flex items-center justify-center space-x-3"
            data-testid="google-login-button"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Login with Google</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gold-500">
          Don't have an account?{' '}
          <a href="#" className="gold-text hover:underline font-medium">
            Sign up now
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPopup;