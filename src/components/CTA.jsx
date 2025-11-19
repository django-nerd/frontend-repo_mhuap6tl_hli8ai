export default function CTA({ onOpen }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Build your first model in minutes</h2>
        <p className="mt-3 text-slate-300">Describe the model you want. We will generate it, register it, and deploy an endpoint for you.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={onOpen} className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-white font-medium shadow-lg shadow-violet-500/20 transition hover:brightness-110">
            Generate from prompt
          </button>
          <a href="#models" className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-white/90 backdrop-blur hover:bg-white/10">
            View models
          </a>
        </div>
      </div>
    </section>
  );
}
