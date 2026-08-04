import React from 'react';
import Link from 'next/link';
import { 
  Search, Menu, ArrowLeft, ArrowRight, Bookmark, Share2, 
  Clock, Calendar, User, Cpu, ChevronRight, CheckCircle2, AlertCircle 
} from 'lucide-react';

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-electric/10 selection:text-electric">
      
      {/* 1. Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-electric" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-navy">
              PN<span className="text-electric">Junction</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="/#articles" className="text-electric font-semibold">Articles</Link>
            <Link href="/#tools" className="hover:text-electric transition-colors">Free Tools</Link>
            <Link href="/#tutorials" className="hover:text-electric transition-colors">Tutorials</Link>
            <Link href="/#resources" className="hover:text-electric transition-colors">Resources</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-slate-200/80 text-slate-500 text-sm hover:border-slate-300 transition-all">
              <Search className="w-4 h-4" />
              <span>Search platform...</span>
              <kbd className="bg-white px-1.5 py-0.5 rounded text-xs border border-slate-200 ml-2">⌘K</kbd>
            </button>
            <button className="md:hidden p-2 rounded-xl bg-surface text-slate-700">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">

        {/* Breadcrumb & Back Action Container */}
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-electric transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-surface border border-slate-200/80 text-slate-600 hover:text-electric hover:border-slate-300 transition-all shadow-sm">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-xl bg-surface border border-slate-200/80 text-slate-600 hover:text-electric hover:border-slate-300 transition-all shadow-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Grid Container (Main Content + Sticky TOC Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Card */}
          <article className="lg:col-span-8 rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card space-y-8">
            
            {/* Article Header Metadata */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-electric shadow-sm">
                System Architecture
              </div>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-navy leading-[1.15]">
                Building Resilient Microservices with Rust: Patterns & Best Practices
              </h1>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-slate-500 border-t border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-electric/10 text-electric flex items-center justify-center font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-navy font-semibold">Alex Vance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>May 18, 2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            {/* Featured Image Container */}
            <div className="h-72 md:h-96 rounded-card bg-slate-100 overflow-hidden relative border border-slate-200/60 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100" />
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm">
                [High-Res Technical Diagram / Architecture Illustration]
              </div>
            </div>

            {/* Article Body Content (Rich Prose Style) */}
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-base leading-relaxed">
              <p className="text-lg font-normal text-slate-700 leading-relaxed">
                As distributed systems scale, the need for memory safety, predictable performance, and low-latency execution becomes paramount. While Go and Node.js have dominated cloud-native backends for a decade, Rust has emerged as the premier choice for mission-critical microservices.
              </p>

              <h2 className="font-heading font-bold text-2xl text-navy pt-4">1. The Memory Safety Advantage</h2>
              <p>
                Garbage collection pauses can degrade tail latencies in high-throughput architectures. Rust’s ownership model guarantees memory safety at compile-time without requiring a runtime GC overhead.
              </p>

              {/* Code Block Container */}
              <div className="rounded-card bg-navy text-slate-200 p-6 font-mono text-xs md:text-sm overflow-x-auto shadow-md border border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-xs">
                  <span>server.rs</span>
                  <span>Rust</span>
                </div>
                <pre><code>{`async fn handle_connection(stream: TcpStream) -> Result<()> {
    let mut transport = Framed::new(stream, LengthDelimitedCodec::new());
    while let Some(frame) = transport.next().await {
        process_frame(frame?).await?;
    }
    Ok(())
}`}</code></pre>
              </div>

              <h2 className="font-heading font-bold text-2xl text-navy pt-4">2. Architectural Boundaries</h2>
              <p>
                When structuring microservices in Rust, separation of concerns ensures maintainability across large engineering teams. Organizing modules around domain boundaries rather than technical layers prevents circular dependencies.
              </p>

              {/* Callout Box */}
              <div className="rounded-card bg-surface border-l-4 border-electric p-6 border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-navy text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald" />
                  <span>Pro Architecture Tip</span>
                </div>
                <p className="text-sm text-slate-600 m-0">
                  Always use workspace-level dependencies in Cargo to lock versions cleanly across all independent microservice crates in your mono-repo.
                </p>
              </div>

              <h2 className="font-heading font-bold text-2xl text-navy pt-4">Conclusion</h2>
              <p>
                Adopting Rust requires an initial learning curve regarding lifetimes and borrowing, but the long-term reliability and infrastructure cost savings heavily outweigh the upfront investment.
              </p>
            </div>

            {/* Author Bio Card Inside Article */}
            <div className="pt-8 border-t border-slate-200/80 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center font-bold text-lg shadow-md">
                AV
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-navy">Written by Alex Vance</h4>
                <p className="text-sm text-slate-500 mt-0.5">Principal Infrastructure Engineer & Distributed Systems Researcher at PNJunction.</p>
              </div>
            </div>

            {/* Previous / Next Article Navigation Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200/80">
              <Link href="#" className="p-4 rounded-card bg-white border border-slate-200/80 hover:border-electric transition-all group flex flex-col space-y-1">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous Article
                </span>
                <span className="font-heading font-bold text-sm text-navy group-hover:text-electric transition-colors">
                  Optimizing Postgres Query Plans at Scale
                </span>
              </Link>
              <Link href="#" className="p-4 rounded-card bg-white border border-slate-200/80 hover:border-electric transition-all group flex flex-col space-y-1 text-right sm:items-end">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  Next Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-heading font-bold text-sm text-navy group-hover:text-electric transition-colors">
                  The Modern Frontend Pipeline in 2026
                </span>
              </Link>
            </div>

          </article>

          {/* Sticky Sidebar (Table of Contents & Quick Widget) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Table of Contents Card */}
            <div className="rounded-[24px] bg-surface border border-slate-200/80 p-6 shadow-card space-y-4">
              <h3 className="font-heading font-bold text-base text-navy flex items-center gap-2">
                <span>Table of Contents</span>
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#1-the-memory-safety-advantage" className="block text-slate-600 hover:text-electric font-medium transition-colors py-1">
                  1. The Memory Safety Advantage
                </a>
                <a href="#2-architectural-boundaries" className="block text-slate-600 hover:text-electric font-medium transition-colors py-1 pl-3 border-l-2 border-slate-200">
                  2. Architectural Boundaries
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-electric font-medium transition-colors py-1">
                  Conclusion
                </a>
              </nav>
            </div>

            {/* Related Tools Card Widget */}
            <div className="rounded-[24px] bg-surface border border-slate-200/80 p-6 shadow-card space-y-4">
              <h3 className="font-heading font-bold text-base text-navy">Related Developer Utilities</h3>
              <div className="space-y-3">
                <Link href="/tools/json-formatter" className="block p-3 rounded-card bg-white border border-slate-200/80 hover:shadow-card transition-all group">
                  <p className="font-heading font-bold text-sm text-navy group-hover:text-electric transition-colors">JSON Formatter</p>
                  <p className="text-xs text-slate-500 mt-0.5">Parse and validate payloads instantly.</p>
                </Link>
                <Link href="/tools/base64" className="block p-3 rounded-card bg-white border border-slate-200/80 hover:shadow-card transition-all group">
                  <p className="font-heading font-bold text-sm text-navy group-hover:text-electric transition-colors">Base64 Encoder / Decoder</p>
                  <p className="text-xs text-slate-500 mt-0.5">Secure string transformation utility.</p>
                </Link>
              </div>
            </div>

          </aside>

        </div>

        {/* Related Articles Section Card */}
        <section className="rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy">Related Articles</h2>
              <p className="text-sm text-slate-500 mt-1">Continue exploring architecture and systems engineering.</p>
            </div>
            <Link href="/articles" className="text-sm font-semibold text-electric hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Zero-Trust Security Models for SaaS Apps", category: "Security", time: "8 min read", date: "Apr 2026" },
              { title: "Distributed Caching Strategies with Redis", category: "Architecture", time: "5 min read", date: "Apr 2026" },
              { title: "Event-Driven Microservices in Go", category: "Architecture", time: "7 min read", date: "Mar 2026" },
            ].map((art, idx) => (
              <article key={idx} className="group bg-white rounded-card overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer">
                <div className="h-40 bg-slate-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold text-electric shadow-sm">
                    {art.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.time}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-navy group-hover:text-electric transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-electric" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Card */}
      <footer className="max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center text-white">
              <Cpu className="w-4 h-4 text-electric" />
            </div>
            <span className="font-heading font-bold text-lg text-navy">PNJunction</span>
            <span className="text-slate-400 text-sm ml-4">© 2026 PNJunction Platform. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <Link href="/privacy" className="hover:text-electric transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-electric transition-colors">Terms</Link>
            <Link href="/rss.xml" className="hover:text-electric transition-colors">RSS Feed</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}