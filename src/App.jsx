import { motion } from 'framer-motion'
import Features from './components/Features'
import FileExplorer from './components/FileExplorer'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-animated flex flex-col items-center justify-center overflow-x-hidden">
      <motion.header
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 mb-6 flex flex-col items-center"
      >
        <img src="/logo.svg" alt="Oracle Intelligence Logo" className="w-28 mb-4 drop-shadow-lg" />
        <h1 className="text-5xl md:text-7xl font-tech text-primary glow text-center">
          Oracle Intelligence
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mt-4 text-center max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Connects to Everything. <span className="text-accent">AI Powered.</span> <span className="text-primary">Sleek. Secure. Animated.</span>
          </motion.span>
        </p>
      </motion.header>

      <Features />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="w-full max-w-5xl mt-12 px-4"
      >
        <FileExplorer />
      </motion.div>
    </div>
  )
}
