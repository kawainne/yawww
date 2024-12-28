import { StatBadge } from './FeatureStats';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: Array<{ value: string; label: string }>;
  children?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon, stats, children }: FeatureCardProps) {
  return (
    <div className="glass-card p-6 hover:border-white/20 transition-all cursor-pointer group">
      <div className="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/50 mb-4">{description}</p>
      
      {stats && (
        <div className="flex flex-wrap gap-2 mb-4">
          {stats.map((stat, index) => (
            <StatBadge key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
}