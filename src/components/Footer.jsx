export default function Footer() {
  return (
    <footer id="contact" className="pt-14 pb-10 border-t border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-semibold text-black">Let’s build something beautiful</h3>
            <p className="text-black/70 mt-2 max-w-prose">We craft modern, minimalist websites with soft Malaysian flag accents and purposeful motion. Tell us about your idea.</p>
          </div>
          <form className="grid gap-3">
            <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
            <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Email" />
            <textarea rows={4} className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-200" placeholder="Tell us a bit about your project" />
            <button className="rounded-full bg-red-100 text-red-900 px-5 py-3 border border-black/10 hover:shadow-sm transition-all w-fit">Send</button>
          </form>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-black/60">
          <p>© {new Date().getFullYear()} Your Brand</p>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-300" />
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="h-2 w-2 rounded-full bg-red-300" />
          </div>
        </div>
      </div>
    </footer>
  )
}
