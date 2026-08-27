import { ExternalLink, ShieldCheck } from "lucide-react";

export default function AgencyBar() {
  return (
    <div className="w-full bg-[#071a36] border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
        
        <ShieldCheck
          size={14}
          className="text-[#2f80ff]"
        />

        <span className="text-slate-400">
          Demo website designed & developed by
        </span>

        <a
          href="YOUR_PORTFOLIO_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
        >
          SJ DEV STUDIO
          <ExternalLink size={13} />
        </a>

      </div>
    </div>
  );
}