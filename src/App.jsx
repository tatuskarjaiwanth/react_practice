import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showHearts, setShowHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 20,
        },
      ]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4 relative overflow-hidden">
      <div className="max-w-md">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl text-pink-700 font-handwritten"
        >
          All the best, Jaiwanth! 💖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-6 text-xl text-purple-700 font-semibold"
        >
          You can do it! 🚀
        </motion.p>
      </div>

      {/* Floating hearts animation */}
      {showHearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -300, opacity: 0 }}
          transition={{ duration: 4 }}
          className="absolute text-pink-400"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}

export default App;
