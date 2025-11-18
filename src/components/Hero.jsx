import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] lg:min-h-[78vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
            <span className="h-2 w-2 rounded-full bg-blue-400" /> Modern Malaysian Aesthetic
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-black">
            Clean, calm and confident design in pastel Jalur Gemilang hues
          </h1>
          <p className="text-base sm:text-lg text-black/70 max-w-prose">
            A minimalist interface with subtle motion and delightful details. White canvas, crisp typography, and accents in soft red, blue and yellow for a timeless, award-ready presence.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#features" className="inline-flex items-center rounded-full bg-blue-100 text-blue-900 px-5 py-3 border border-black/10 hover:shadow-sm transition-all">Explore Features</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-900 px-5 py-3 border border-black/10 hover:shadow-sm transition-all">Work With Us</a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-3 self-start"
        >
          {[
            { t: 'Pastel Red', c: 'bg-red-100 border-red-200 text-red-900' },
            { t: 'Pastel Blue', c: 'bg-blue-100 border-blue-200 text-blue-900' },
            { t: 'Pastel Yellow', c: 'bg-yellow-100 border-yellow-200 text-yellow-900' },
            { t: 'Monochrome', c: 'bg-white border-black/10 text-black/70' },
          ].map((item) => (
            <li key={item.t} className={`rounded-xl border p-4 ${item.c}`}>
              <p className="text-sm font-medium">{item.t}</p>
              <p className="text-xs opacity-70">Curated accent palette</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
