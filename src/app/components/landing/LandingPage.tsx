import { useNavigate } from "react-router";
import { TrendingUp, FileText, Users, Package, BarChart3, Shield, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";

const features = [
  {
    icon: "📄",
    title: "Comprehensive Billing",
    desc: "Issue invoices, credit notes, advance payment receipts, and all AGT-required documents in seconds.",
  },
  {
    icon: "👥",
    title: "Client Directory",
    desc: "Quick registration with NIF/Tax ID validation. Automatically sync client data across documents.",
  },
  {
    icon: "📦",
    title: "Product & Item Registry",
    desc: "Manage your inventory, services, and unit prices with built-in IVA rate configuration.",
  },
  {
    icon: "📊",
    title: "Financial Reporting",
    desc: "Export data directly formatted for Angolan tax filing with AGT-compatible reports.",
  },
];

const stats = [
  { value: "1,200+", label: "Angolan Businesses" },
  { value: "98%", label: "AGT Compliance Rate" },
  { value: "AOA 2B+", label: "Invoiced Monthly" },
  { value: "< 30s", label: "Average Invoice Time" },
];

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#0F172A] font-bold text-lg">FaturaDigital</span>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {["Features", "Pricing", "AGT Compliance", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-600 hover:text-[#4F46E5] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <button
              onClick={() => navigate("/app")}
              className="text-sm text-slate-600 hover:text-[#4F46E5] transition-colors px-3 py-2"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/app")}
              className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-800 text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #4F46E5 0%, transparent 50%), radial-gradient(circle at 70% 20%, #8B5CF6 0%, transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-full text-xs text-indigo-300 mb-6">
              <Shield className="w-3.5 h-3.5" />
              AGT-Compliant Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Effortless &amp; Compliant Invoicing for{" "}
              <span className="text-[#818CF8]">Angolan Businesses</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Manage clients, track items, and issue AGT-compliant invoices, receipts, and credit notes in seconds. Built specifically for Angola's tax laws.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/app")}
                className="flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors font-medium"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                View Demo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#F8FAFC]" style={{ transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)" }}>
              {/* Mock browser bar */}
              <div className="bg-slate-200 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3 bg-white rounded text-[10px] text-slate-400 px-3 py-1">
                  app.faturadigital.ao/app
                </div>
              </div>
              {/* Mock dashboard */}
              <div className="flex h-72">
                {/* Sidebar */}
                <div className="w-36 bg-[#0F172A] p-3 space-y-1">
                  {["Dashboard", "Invoices", "Receipts", "Clients", "Items"].map((item, i) => (
                    <div key={item} className={`text-[9px] px-2 py-1.5 rounded-md ${i === 0 ? "bg-[#4F46E5] text-white" : "text-slate-500"}`}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 p-3 space-y-3 bg-[#F8FAFC]">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Revenue", val: "1.45M AOA", color: "text-[#4F46E5]" },
                      { label: "Outstanding", val: "320K AOA", color: "text-[#F59E0B]" },
                      { label: "Clients", val: "142", color: "text-[#10B981]" },
                      { label: "Items", val: "84", color: "text-slate-700" },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                        <p className="text-[8px] text-slate-400">{label}</p>
                        <p className={`text-xs font-semibold ${color}`}>{val}</p>
                      </div>
                    ))}
                  </div>
                  {/* Mini table */}
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                    <p className="text-[8px] font-medium text-slate-600 mb-2">Recent Documents</p>
                    {[
                      { doc: "INV-042", client: "Angola Tech", status: "Paid", color: "bg-green-100 text-green-700" },
                      { doc: "INV-041", client: "Global Svc", status: "Pending", color: "bg-amber-100 text-amber-700" },
                      { doc: "CRN-002", client: "Retail Group", status: "Applied", color: "bg-blue-100 text-blue-700" },
                    ].map(({ doc, client, status, color }) => (
                      <div key={doc} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0">
                        <span className="text-[7px] text-slate-500 font-mono">{doc}</span>
                        <span className="text-[7px] text-slate-600">{client}</span>
                        <span className={`text-[6px] px-1.5 py-0.5 rounded-full font-medium ${color}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-slate-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-800">AGT Verified</p>
                <p className="text-[9px] text-slate-400">100% Compliant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance badge */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-4">Fully Compliant with Angolan Tax Laws</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["AGT — Administração Geral Tributária", "BAI — Banco Angolano de Investimentos", "BFA — Banco de Fomento Angola", "BNA — Banco Nacional de Angola"].map((partner) => (
              <div key={partner} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Shield className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-xs font-medium text-slate-600">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#4F46E5] mb-2">Everything you need</p>
          <h2 className="text-3xl font-bold text-[#0F172A]">Built for Angolan businesses</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">Everything you need to manage your billing, comply with AGT regulations, and grow your business.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4F46E5]/20 transition-all group">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start issuing compliant invoices today</h2>
          <p className="text-indigo-200 mb-8">Join over 1,200 Angolan businesses already using FaturaDigital. Free for the first 30 days.</p>
          <button
            onClick={() => navigate("/app")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#4F46E5] rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#4F46E5] flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">FaturaDigital</span>
          </div>
          <p className="text-xs text-center">© 2024 FaturaDigital. AGT-compliant invoicing for Angola. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            {["Privacy", "Terms", "Support"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
