'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, FileText, Wrench, FolderTree, BarChart3, 
  Settings, Search, Plus, Bell, User, ArrowUpRight, CheckCircle2, 
  Clock, Trash2, Edit3, Image as ImageIcon, Save, Sparkles, Cpu
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'articles' | 'editor'>('overview');

  return (
    <div className="min-h-screen bg-surface text-navy font-sans antialiased flex selection:bg-electric/10 selection:text-electric">
      
      {/* 1. Sidebar Navigation (Notion/Linear Style) */}
      <aside className="w-64 bg-white border-r border-slate-200/80 hidden md:flex flex-col justify-between p-6 sticky top-0 h-screen">
        <div className="space-y-8">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 text-electric" />
            </div>
            <div>
              <span className="font-heading font-bold text-base tracking-tight text-navy block">
                PN<span className="text-electric">Junction</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Admin Workspace</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="space-y-1.5 font-medium text-sm">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-surface text-electric font-semibold border border-slate-200/60 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => setActiveTab('articles')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeTab === 'articles' ? 'bg-surface text-electric font-semibold border border-slate-200/60 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`}
            >
              <FileText className="w-4 h-4" />
              <span>Articles & Posts</span>
            </button>
            <button 
              onClick={() => setActiveTab('editor')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeTab === 'editor' ? 'bg-surface text-electric font-semibold border border-slate-200/60 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`}
            >
              <Edit3 className="w-4 h-4" />
              <span>Rich Text Editor</span>
            </button>
            <Link href="#tools" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-navy transition-all">
              <Wrench className="w-4 h-4" />
              <span>Free Tools Config</span>
            </Link>
            <Link href="#categories" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-navy transition-all">
              <FolderTree className="w-4 h-4" />
              <span>Categories & Tags</span>
            </Link>
            <Link href="#analytics" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-navy transition-all">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics Overview</span>
            </Link>
          </nav>
        </div>

        {/* User Profile Footer in Sidebar */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-electric/10 text-electric font-bold flex items-center justify-center text-xs">
              AV
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-xs text-navy">Alex Vance</p>
              <p className="text-[11px] text-slate-400">Super Admin</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-navy transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search articles, tools, drafts..." 
                className="w-full bg-surface border border-slate-200/80 rounded-xl pl-9 pr-4 py-2 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-electric transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 rounded-xl bg-surface border border-slate-200/80 text-slate-600 hover:text-electric transition-all relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-electric" />
            </button>
            <button 
              onClick={() => setActiveTab('editor')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>New Article</span>
            </button>
          </div>
        </header>

        {/* Dynamic Views Container */}
        <main className="p-8 max-w-7xl w-full mx-auto space-y-8">

          {/* TAB 1: OVERVIEW DASHBOARD */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Welcome Banner Card */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-slate-200 text-xs font-semibold text-electric">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>System Operational • 99.98% Uptime</span>
                  </div>
                  <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-navy">Welcome back, Alex.</h1>
                  <p className="text-sm text-slate-500">Here is what is happening across your platform today.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setActiveTab('editor')} className="px-4 py-2.5 rounded-xl bg-surface border border-slate-200/80 text-sm font-medium text-navy hover:border-slate-300 transition-all">
                    Draft New Post
                  </button>
                  <button className="px-4 py-2.5 rounded-xl bg-electric text-sm font-medium text-white hover:bg-electric/90 transition-all shadow-sm">
                    View Live Site
                  </button>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Pageviews", value: "248.4K", change: "+12.4%", positive: true },
                  { label: "Active Readers", value: "42.1K", change: "+8.1%", positive: true },
                  { label: "Published Articles", value: "84", change: "+3 this week", positive: true },
                  { label: "Tool Executions", value: "192.8K", change: "+24.5%", positive: true },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-[20px] p-6 border border-slate-200/80 shadow-card space-y-3">
                    <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-heading font-extrabold text-2xl text-navy">{stat.value}</h3>
                      <span className="text-xs font-semibold text-emerald">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Articles & Drafts Table Container */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 p-8 shadow-card space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-xl text-navy">Recent Articles & Status</h3>
                  <button onClick={() => setActiveTab('articles')} className="text-sm font-semibold text-electric hover:underline">
                    Manage All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        <th className="pb-3">Title</th>
                        <th className="pb-3">Category</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        { title: "Building Resilient Microservices with Rust", cat: "Architecture", status: "Published", date: "May 18, 2026" },
                        { title: "The Modern Frontend Pipeline in 2026", cat: "Performance", status: "Published", date: "Apr 28, 2026" },
                        { title: "Zero-Trust Security Models for SaaS Apps", cat: "Security", status: "Draft", date: "May 20, 2026" },
                      ].map((item, idx) => (
                        <tr key={idx} className="group hover:bg-surface/60 transition-colors">
                          <td className="py-4 font-heading font-bold text-navy">{item.title}</td>
                          <td className="py-4">
                            <span className="px-2.5 py-1 rounded-full bg-surface border border-slate-200/60 text-xs font-semibold text-slate-600">
                              {item.cat}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${item.status === 'Published' ? 'bg-emerald/10 text-emerald' : 'bg-amber/10 text-amber'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Published' ? 'bg-emerald' : 'bg-amber'}`} />
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 text-xs text-slate-400">{item.date}</td>
                          <td className="py-4 text-right space-x-2">
                            <button onClick={() => setActiveTab('editor')} className="p-1.5 rounded-lg bg-surface border border-slate-200 text-slate-600 hover:text-electric transition-all">
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1.5 rounded-lg bg-surface border border-slate-200 text-slate-600 hover:text-softred transition-all">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARTICLES MANAGEMENT */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white rounded-[24px] border border-slate-200/80 p-8 shadow-card space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-navy">Articles Management</h2>
                    <p className="text-sm text-slate-500 mt-1">Create, edit, and publish articles across the platform.</p>
                  </div>
                  <button onClick={() => setActiveTab('editor')} className="px-4 py-2.5 rounded-xl bg-electric text-white text-sm font-medium hover:bg-electric/90 transition-all shadow-sm">
                    + New Article
                  </button>
                </div>
                {/* Placeholder list view */}
                <div className="p-12 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                  <p className="text-sm font-medium">Full article list table rendered here with filtering & pagination.</p>
                  <button onClick={() => setActiveTab('editor')} className="mt-4 text-xs font-bold text-electric hover:underline">
                    Switch to Rich Text Editor →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RICH TEXT EDITOR & MARKDOWN WORKSPACE (Notion Style) */}
          {activeTab === 'editor' && (
            <div className="bg-white rounded-[24px] border border-slate-200/80 p-8 md:p-12 shadow-card space-y-6 animate-fadeIn">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <span className="text-xs font-semibold text-emerald uppercase tracking-wider">Draft Mode • Markdown Supported</span>
                  <h2 className="font-heading font-extrabold text-2xl text-navy mt-1">Article Editor</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-xl bg-surface border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 transition-all flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Draft
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-electric text-sm font-medium text-white hover:bg-electric/90 transition-all shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Publish
                  </button>
                </div>
              </div>

              {/* Editor Inputs */}
              <div className="space-y-6 max-w-4xl">
                <div>
                  <input 
                    type="text" 
                    placeholder="New Article Title..." 
                    defaultValue="Building Resilient Microservices with Rust"
                    className="w-full font-heading font-extrabold text-3xl md:text-4xl text-navy placeholder:text-slate-300 focus:outline-none border-b border-slate-100 pb-4"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Category</label>
                    <select className="w-full bg-surface border border-slate-200 rounded-xl px-3 py-2 text-sm text-navy focus:outline-none focus:border-electric">
                      <option>System Architecture</option>
                      <option>Web Performance</option>
                      <option>Security & Auth</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">SEO Slug</label>
                    <input 
                      type="text" 
                      defaultValue="building-resilient-microservices-rust"
                      className="w-full bg-surface border border-slate-200 rounded-xl px-3 py-2 text-sm text-navy focus:outline-none focus:border-electric font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Featured Image</label>
                    <button className="w-full flex items-center justify-center gap-2 bg-surface border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 hover:border-slate-300 transition-all">
                      <ImageIcon className="w-4 h-4 text-electric" />
                      <span>Upload Media</span>
                    </button>
                  </div>
                </div>

                {/* Markdown Toolbar simulation */}
                <div className="flex items-center gap-2 p-2 bg-surface rounded-xl border border-slate-200/80 text-xs font-semibold text-slate-600">
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors">B</button>
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors italic">I</button>
                  <span className="text-slate-300">|</span>
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors">H1</button>
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors">H2</button>
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors">Code Block</button>
                  <button className="px-2.5 py-1 rounded hover:bg-white transition-colors">Callout</button>
                </div>

                {/* Main Text Area */}
                <div>
                  <textarea 
                    rows={12}
                    defaultValue={`As distributed systems scale, the need for memory safety, predictable performance, and low-latency execution becomes paramount...`}
                    className="w-full font-sans text-slate-700 bg-surface border border-slate-200 rounded-2xl p-6 text-sm focus:outline-none focus:border-electric leading-relaxed"
                  />
                </div>

              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}