import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div className={cn("relative mx-auto w-full max-w-7xl px-6", className)}>
      <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-300 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
    </div>
  );
};

export default Separator;
