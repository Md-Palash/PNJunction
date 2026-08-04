import React from 'react';
import Link from 'next/link';
import { 
  Search, Menu, ArrowRight, BookOpen, Wrench, TrendingUp, 
  Sparkles, Terminal, Cpu, ShieldCheck, Zap, ChevronRight, Mail 
} from 'lucide-react';

export default function Home() {
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
            <Link href="#articles" className="hover:text-electric transition-colors">Articles</Link>
            <Link href="#tools" className="hover:text-electric transition-colors">Free Tools</Link>
            <Link href="#tutorials" className="hover:text-electric transition-colors">Tutorials</Link>
            <Link href="#resources" className="hover:text-electric transition-colors">Resources</Link>
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

        {/* 2. Hero Section Card */}
        <section className="relative overflow-hidden rounded-[24px] bg-surface border border-slate-200/80 p-10 md:p-16 shadow-card">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-electric shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Intersection of Knowledge & Technology</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight text-navy leading-[1.1]">
              Engineering better systems, one junction at a time.
            </h1>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              Explore deep-dive technical articles, high-performance developer tools, and battle-tested architectural guides designed for modern engineering teams.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#tools" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-medium hover:bg-slate-800 transition-all shadow-md group">
                <span>Explore Free Tools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#articles" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-navy font-medium hover:bg-slate-50 transition-all shadow-sm">
                <span>Read Articles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Featured Categories Card */}
        <section className="rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl text-navy">Featured Categories</h2>
            <Link href="/categories" className="text-sm font-semibold text-electric hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "System Architecture", count: "24 Articles", icon: Cpu, desc: "Distributed systems & scalability." },
              { title: "Web Performance", count: "18 Articles", icon: Zap, desc: "Core Web Vitals & optimization." },
              { title: "Security & Auth", count: "12 Articles", icon: ShieldCheck, desc: "Zero-trust & modern encryption." },
              { title: "Developer Tools", count: "30+ Utilities", icon: Terminal, desc: "Parsers, generators & formatters." },
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="group bg-white rounded-card p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-slate-100 flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-1">{cat.title}</h3>
                  <p className="text-xs font-semibold text-emerald mb-2">{cat.count}</p>
                  <p className="text-sm text-slate-500">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Latest Articles Card Grid */}
        <section id="articles" className="rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy">Latest Articles</h2>
              <p className="text-sm text-slate-500 mt-1">Fresh engineering insights and technical deep dives.</p>
            </div>
            <Link href="/articles" className="text-sm font-semibold text-electric hover:underline flex items-center gap-1">
              All posts <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Building Resilient Microservices with Rust", category: "Architecture", time: "6 min read", date: "May 2026" },
              { title: "The Modern Frontend Pipeline in 2026", category: "Performance", time: "4 min read", date: "Apr 2026" },
              { title: "Zero-Trust Security Models for SaaS Apps", category: "Security", time: "8 min read", date: "Apr 2026" },
            ].map((art, idx) => (
              <article key={idx} className="group bg-white rounded-card overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer">
                <div className="h-48 bg-slate-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-electric shadow-sm">
                    {art.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.time}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-navy group-hover:text-electric transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-electric" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Popular Tools Section Card */}
        <section id="tools" className="rounded-[24px] bg-surface border border-slate-200/80 p-8 md:p-12 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy">Popular Developer Tools</h2>
              <p className="text-sm text-slate-500 mt-1">Fast, client-side utilities built for everyday engineering workflows.</p>
            </div>
            <Link href="/tools" className="text-sm font-semibold text-electric hover:underline flex items-center gap-1">
              All tools <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "JSON Formatter & Validator", desc: "Format, validate, and minify complex JSON payloads securely.", tag: "Utility" },
              { name: "High-Res QR Generator", desc: "Create customizable vector QR codes with custom branding.", tag: "Generator" },
              { name: "Secure Password Generator", desc: "Generate cryptographically secure passwords and passphrases.", tag: "Security" },
            ].map((tool, idx) => (
              <div key={idx} className="group bg-white rounded-card p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-slate-100 flex items-center justify-center text-electric">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {tool.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-electric transition-colors">{tool.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-electric">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Newsletter Card */}
        <section className="rounded-[24px] bg-navy text-white p-8 md:p-12 shadow-card relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-electric">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Stay ahead of the technical curve.</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Get weekly insights on software architecture, performance optimizations, and newly released developer tools directly in your inbox. No spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-electric transition-colors flex-1"
              />
              <button type="submit" className="px-6 py-3 rounded-xl bg-electric hover:bg-electric/90 text-white font-medium text-sm transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* 7. Footer Card */}
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