import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const temporaryCredentials = {
    staff: {
      email: "staff@gmail.com",
      password: "staff123",
      dashboard: "/staff-dashboard",
    },
    admin: {
      email: "dashboard@gmail.com",
      password: "dashboard123",
      dashboard: "/dashboard",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email === temporaryCredentials.staff.email && password === temporaryCredentials.staff.password) {
      navigate(temporaryCredentials.staff.dashboard);
    } else if (email === temporaryCredentials.admin.email && password === temporaryCredentials.admin.password) {
      navigate(temporaryCredentials.admin.dashboard);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/47/f6/9b/47f69bc96c7b16f0429eca8f36eeca06.gif')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-10 rounded-2xl backdrop-blur-lg bg-white/30 shadow-black transform transition-all duration-300 hover:scale-105"
      >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-violet-950">Welcome Back!</h2>
          <p className="text-lg text-violet-950">Sign in to your account</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full px-4 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <i className="fas fa-envelope absolute inset-y-6 right-4 flex items-center text-gray-600 hover:text-gray-800"></i>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full px-4 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center text-gray-600 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember" className="text-base text-violet-950">Remember me</label>
            </div>
            <a href="#" className="text-base text-violet-950 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 text-lg bg-gradient-to-r from-blue-900 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-5 text-center">
          <p className="text-lg text-violet-950">
            Don't have an account? <a href="#" className="text-violet-950 hover:underline">Sign up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
