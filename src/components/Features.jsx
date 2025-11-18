import { motion } from 'framer-motion'
import { Star, Sparkles, Layout, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Pastel Accents',
    desc: 'Soft reds, blues and yellows bring warmth without sacrificing clarity.',
    color: 'from-red-100 to-red-50',
  },
  {
    icon: Layout,
    title: 'Clean Layouts',
    desc: 'Whitespace-first compositions with crisp hierarchy and readable typography.',
    color: 'from-blue-100 to-blue-50',
  },
  {
    icon: Zap,
    title: 'Subtle Motion',
    desc: 'Tasteful micro-interactions to guide attention and add delight.',
    color: 'from-yellow-100 to-yellow-50',
  },
  {
    icon: Star,
    title: 'Award Ready',
    desc: 'A poised, modern aesthetic crafted for standout impressions.',
    color: 'from-slate-100 to-white',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">Designed to feel effortless</h2>
          <p className="text-black/70 mt-3">Every element is intentional—balanced spacing, light borders, and soft shadows for an elegant, modern vibe.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: 'easeOut' }}
              className={`rounded-2xl p-5 border border-black/10 bg-gradient-to-b ${f.color}`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-black/10 shadow-sm mb-4">
                <f.icon className="h-5 w-5 text-black/80" />
              </div>
              <h3 className="font-medium text-black mb-1">{f.title}</h3>
              <p className="text-sm text-black/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
