interface HighlightedTextProps {
  children: React.ReactNode;
}

export default function HighlightedText({ children }: HighlightedTextProps) {
  return (
    <span className="px-2 py-1 bg-indigo-500/10 rounded-md border border-indigo-500/20 font-medium">
      {children}
    </span>
  );
}