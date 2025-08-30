import { motion } from 'framer-motion'
const features = [
  {
    title: 'Universal Integration',
    desc: 'Seamlessly connects to all your data and files.',
    icon: '🔗'
  },
  {
    title: 'AI Intelligence',
    desc: 'Smart analytics powered by cutting-edge AI.',
    icon: '🤖'
  },
  {
    title: 'Animated UI',
    desc: 'Engaging, interactive, and futuristic interface.',
    icon: '✨'
  },
  {
    title: 'Secure & Reliable',
    desc: 'Top-tier security for your data and workflows.',
    icon: '🛡️'
  }
]

export default function Features() {
  return (
    <div className="grid md:grid-cols-4 gap-6 w-full max-w-5xl mt-8 px-4">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.7 }}
          className="bg-white/10 rounded-2xl p-6 flex flex-col items-center shadow-lg border-t-2 border-primary hover:scale-105 transition-transform"
        >
          <div className="text-4xl mb-2">{f.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-1">{f.title}</h3>
          <p className="text-sm text-white/80 text-center">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
