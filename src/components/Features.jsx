import { Server, Rocket, Wand2, Shield, Boxes, Gauge } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Wand2 className="h-5 w-5" />, title: 'Prompt-to-Model', desc: 'Turn a prompt into a ready-to-serve model with one click.' },
    { icon: <Server className="h-5 w-5" />, title: 'One-click Deploy', desc: 'Spin up secure endpoints with autoscaling built-in.' },
    { icon: <Shield className="h-5 w-5" />, title: 'Secure by Default', desc: 'API keys, rate-limits, and request validation included.' },
    { icon: <Boxes className="h-5 w-5" />, title: 'Model Registry', desc: 'Track versions, artifacts, and lineage over time.' },
    { icon: <Rocket className="h-5 w-5" />, title: 'Ultra Fast Serving', desc: 'Optimized inference with caching and streaming.' },
    { icon: <Gauge className="h-5 w-5" />, title: 'Observability', desc: 'Metrics, logs, traces, and live dashboards.' },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-violet-400/30 hover:bg-white/10">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-violet-200 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
