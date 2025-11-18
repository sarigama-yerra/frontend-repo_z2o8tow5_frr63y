import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-br from-blue-200 via-yellow-200 to-red-200 border border-black/10" />
          <span className="font-semibold text-black tracking-tight">Your Brand</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-black/80 hover:text-black transition-colors">Features</a>
          <a href="#showcase" className="text-black/80 hover:text-black transition-colors">Showcase</a>
          <a href="#pricing" className="text-black/80 hover:text-black transition-colors">Pricing</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 bg-white hover:bg-black/5 transition-colors">
            <span className="h-2 w-2 rounded-full bg-yellow-400" /> Contact
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-black/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="h-5 w-5 text-black" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="grid gap-2 rounded-lg border border-black/10 p-3 bg-white">
            <a href="#features" className="px-3 py-2 rounded-md hover:bg-black/5">Features</a>
            <a href="#showcase" className="px-3 py-2 rounded-md hover:bg-black/5">Showcase</a>
            <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-black/5">Pricing</a>
            <a href="#contact" className="px-3 py-2 rounded-md hover:bg-black/5">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
