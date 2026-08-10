import { Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "success" | "tip";

const styles: Record<
  CalloutType,
  { bg: string; border: string; text: string; icon: typeof Info; label: string }
> = {
  info: {
    bg: "bg-accent-soft",
    border: "border-accent/20",
    text: "text-navy",
    icon: Info,
    label: "Note",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-900",
    icon: AlertTriangle,
    label: "Warning",
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-900",
    icon: CheckCircle2,
    label: "Success",
  },
  tip: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-900",
    icon: Lightbulb,
    label: "Tip",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  const Icon = s.icon;

  return (
    <div
      className={`not-prose flex gap-3 rounded-2xl border ${s.border} ${s.bg} px-5 py-4 my-6`}
      role="note"
    >
      <Icon size={19} strokeWidth={1.75} className={`${s.text} shrink-0 mt-0.5`} />
      <div className={`text-sm leading-relaxed ${s.text}`}>
        <p className="font-semibold mb-1">{title ?? s.label}</p>
        <div className="opacity-90">{children}</div>
      </div>
    </div>
  );
}
