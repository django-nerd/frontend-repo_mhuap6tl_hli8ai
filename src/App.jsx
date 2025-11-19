import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Console from './components/Console';

function App() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('An LLM that summarizes customer support tickets into key bullet points');
  const [busy, setBusy] = useState(false);
  const BASE = import.meta.env.VITE_BACKEND_URL || '';

  const submit = async () => {
    setBusy(true);
    try {
      await fetch(`${BASE}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      // "Console" component will auto-refresh on next visit; simplest demo leaves it static
    } catch (e) {
      console.error(e);
    } finally {
      setBusy(false);
      setOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
            <span className="font-semibold">Astra AI Platform</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#models" className="hover:text-white">Console</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <button onClick={() => setOpen(true)} className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/15">New model</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA onOpen={() => setOpen(true)} />
        <Console />
      </main>

      {open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">Generate a model from a prompt</h3>
            <p className="mt-1 text-sm text-slate-400">Describe your ideal model and we will generate a demo model entry and endpoint.</p>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="mt-4 h-36 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white outline-none placeholder:text-slate-400" placeholder="e.g., A small LLM for classifying customer feedback as praise/bug/feature request"></textarea>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Cancel</button>
              <button onClick={submit} disabled={busy} className="rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 font-medium text-white disabled:opacity-60">
                {busy ? 'Generating…' : 'Generate'}
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Astra AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
