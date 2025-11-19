import { useEffect, useState } from 'react';

export default function Console() {
  const [models, setModels] = useState([]);
  const [deployments, setDeployments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE = import.meta.env.VITE_BACKEND_URL || '';

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const [mRes, dRes] = await Promise.all([
        fetch(`${BASE}/api/models`).then(r => r.json()),
        fetch(`${BASE}/api/deployments`).then(r => r.json()),
      ]);
      setModels(mRes || []);
      setDeployments(dRes || []);
    } catch (e) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (loading) return <div className="text-center text-slate-300 py-10">Loading console…</div>;
  if (error) return <div className="text-center text-red-300 py-10">{error}</div>;

  return (
    <section id="models" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-white text-xl font-semibold">Models</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map(m => (
            <div key={m.id} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white">{m.name}</div>
                <span className="text-xs rounded-full bg-white/10 px-2 py-0.5">{m.status}</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 break-all">{m.prompt}</div>
              <div className="mt-3 text-xs text-slate-400">v{m.version}</div>
            </div>
          ))}
          {models.length === 0 && <div className="text-slate-400">No models yet.</div>}
        </div>

        <h3 className="mt-10 text-white text-xl font-semibold">Deployments</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map(d => (
            <div key={d.id} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white">{d.name}</div>
                <span className="text-xs rounded-full bg-white/10 px-2 py-0.5">{d.status}</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 break-all">{d.url}</div>
            </div>
          ))}
          {deployments.length === 0 && <div className="text-slate-400">No deployments yet.</div>}
        </div>
      </div>
    </section>
  );
}
