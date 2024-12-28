interface StatProps {
  value: string;
  label: string;
}

export function StatBadge({ value, label }: StatProps) {
  return (
    <div className="flex items-center gap-1.5 text-xs bg-white/5 px-2 py-1 rounded-md">
      <span className="font-semibold text-indigo-400">{value}</span>
      <span className="text-white/50">{label}</span>
    </div>
  );
}