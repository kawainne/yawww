export default function BetaBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-sm">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
        Beta 2.0
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-sm">
        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Powered by AI
      </div>
    </div>
  );
}