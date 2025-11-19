import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[72vh] min-h-[560px] w-full">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient aura overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),rgba(59,130,246,0.15),rgba(251,146,60,0.08),transparent)]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-violet-200 ring-1 ring-white/10 backdrop-blur">
            AI server • Model deployment • Prompt-to-model
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Deploy, Serve, and Generate AI Models
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            A futuristic, minimal platform to spin up AI endpoints, generate models from natural language prompts, and scale from idea to production.
          </p>
        </div>
      </div>
    </section>
  );
}
