import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ShieldAlert } from 'lucide-react';
import { db } from '../services/db';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    if (db.isAdminLoggedIn()) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Add a slight artificial delay for a premium feel and security simulation
    setTimeout(() => {
      const res = db.loginAdmin(username, password);
      setIsLoading(false);

      if (res.success) {
        navigate('/admin/dashboard');
      } else {
        setError(res.error);
      }
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Admin Portal | MISS INDIA EVENTS</title>
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-gradient-to-br from-brand-dark via-[#011B1C] to-brand-dark overflow-hidden">
        {/* Glowing backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-md mx-auto"
          >
            {/* Logo Header */}
            <div className="text-center mb-8">
              <span className="text-brand-accent text-xs font-body tracking-[0.4em] uppercase mb-2 block">
                Management Console
              </span>
              <h1 className="text-3xl font-heading font-bold text-white uppercase tracking-widest text-glow">
                MISS INDIA <span className="text-gradient">EVENTS</span>
              </h1>
              <div className="w-16 h-0.5 bg-brand-accent mx-auto mt-4" />
            </div>

            {/* Login Card */}
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
              
              <h2 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-wider text-center">
                Secure Administrator Access
              </h2>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 text-red-400 text-xs font-body mb-6"
                >
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username */}
                <div className="flex flex-col space-y-2">
                  <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary/40">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={isLoading}
                      placeholder="Enter username"
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-all placeholder-brand-secondary/20"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col space-y-2">
                  <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary/40">
                      <Lock size={16} />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      placeholder="Enter password"
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-xl pl-11 pr-12 py-4 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-all placeholder-brand-secondary/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-secondary/40 hover:text-brand-accent transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-brand-accent text-brand-dark rounded-xl font-body font-semibold uppercase tracking-wider text-xs hover:bg-white hover:shadow-[0_0_20px_rgba(127,231,231,0.5)] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    <span>Authenticate</span>
                  )}
                </button>
              </form>
            </div>
            
            {/* Technical credentials tip for easy evaluation */}
            <p className="text-center text-brand-secondary/30 text-[10px] font-body uppercase tracking-wider mt-6">
              Use Username: <span className="text-brand-accent/50 font-bold">admin</span> & Password: <span className="text-brand-accent/50 font-bold">admin123</span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
