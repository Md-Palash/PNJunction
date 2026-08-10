"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  Upload,
  RotateCcw,
  Copy,
  Check,
  Download,
  Loader2,
} from "lucide-react";

type Tab = "text" | "upload";

export function InteractiveToolArea() {
  const [tab, setTab] = useState<Tab>("text");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!value.trim() || loading) return;
    setLoading(true);
    setGenerated(false);
    // Simulated processing delay — no real QR encoding happens here.
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 700);
  };

  const handleReset = () => {
    setValue("");
    setGenerated(false);
    setLoading(false);
  };

  const handleCopy = async () => {
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable — fail silently, UI only.
    }
  };

  return (
    <section id="tool" className="max-w-container mx-auto container-px pb-6">
      <div className="bg-card border border-border rounded-3xl shadow-soft overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-1 px-4 pt-4 border-b border-border">
          {(["text", "upload"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              aria-pressed={tab === t}
              className={`relative px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                tab === t ? "text-navy" : "text-ink-muted hover:text-navy"
              }`}
            >
              {t === "text" ? "Enter text or URL" : "Upload a file"}
              {tab === t && (
                <motion.span
                  layoutId="tool-tab-underline"
                  className="absolute left-4 right-4 -bottom-px h-0.5 bg-accent rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Input side */}
          <div className="flex flex-col">
            {tab === "text" ? (
              <>
                <label htmlFor="tool-input" className="text-sm font-medium text-navy mb-2">
                  Text or URL
                </label>
                <textarea
                  id="tool-input"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="https://example.com"
                  rows={6}
                  className="flex-1 resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:bg-white transition-colors"
                />
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center min-h-[168px]">
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-white border border-border text-ink-faint">
                  <Upload size={19} strokeWidth={1.75} />
                </div>
                <p className="text-sm text-ink-muted">
                  Drag and drop a file, or{" "}
                  <span className="text-accent font-medium">browse</span>
                </p>
                <p className="text-xs text-ink-faint">PNG, JPG, or SVG up to 5MB</p>
              </div>
            )}

            <div className="mt-4 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3 rounded-full shadow-soft hover:bg-navy-light transition-colors disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Generating…
                  </>
                ) : (
                  "Generate QR code"
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-sm text-ink-muted border border-border px-4 py-3 rounded-full hover:bg-surface transition-colors"
              >
                <RotateCcw size={14} strokeWidth={1.75} />
                Reset
              </motion.button>
            </div>
          </div>

          {/* Output side */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-navy mb-2">Output</span>
            <div className="flex-1 flex items-center justify-center rounded-xl border border-border bg-surface min-h-[220px] p-6">
              <AnimatePresence mode="wait">
                {generated ? (
                  <motion.div
                    key="output"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="h-36 w-36 rounded-xl bg-white border border-border flex items-center justify-center text-navy shadow-soft">
                      <QrCode size={72} strokeWidth={1} />
                    </div>
                    <p className="text-xs text-ink-faint text-center max-w-[200px] truncate">
                      {value}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-white border border-border text-ink-faint">
                      <QrCode size={19} strokeWidth={1.75} />
                    </div>
                    <p className="text-sm text-ink-faint max-w-[180px]">
                      Your QR code will appear here
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <motion.button
                whileHover={generated ? { scale: 1.02 } : undefined}
                whileTap={generated ? { scale: 0.98 } : undefined}
                onClick={handleCopy}
                disabled={!generated}
                className="inline-flex items-center gap-2 text-sm text-navy border border-border px-4 py-2.5 rounded-full hover:bg-surface transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                {copied ? (
                  <>
                    <Check size={14} strokeWidth={2} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} strokeWidth={1.75} />
                    Copy
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={generated ? { scale: 1.02 } : undefined}
                whileTap={generated ? { scale: 0.98 } : undefined}
                disabled={!generated}
                className="inline-flex items-center gap-2 text-sm text-white bg-accent px-4 py-2.5 rounded-full hover:bg-accent-light transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                <Download size={14} strokeWidth={1.75} />
                Download
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
