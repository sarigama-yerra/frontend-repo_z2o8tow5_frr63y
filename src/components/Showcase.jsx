import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    { title: 'Hero Concepts', tag: 'Pastel Blue', color: 'bg-blue-50 border-blue-100' },
    { title: 'UI Elements', tag: 'Pastel Yellow', color: 'bg-yellow-50 border-yellow-100' },
    { title: 'Brand Blocks', tag: 'Pastel Red', color: 'bg-red-50 border-red-100' },
  ]

  return (
    <section id="showcase" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">Showcase</h2>
            <p className="text-black/70 mt-3">A small gallery of how the palette and layout come together.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-black text-white px-4 py-2 border border-black/10 hover:opacity-90">Get Started</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
              className={`rounded-2xl border p-5 ${it.color}`}
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-white border border-black/10 shadow-sm mb-4" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-black">{it.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white border border-black/10 text-black/70">{it.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
