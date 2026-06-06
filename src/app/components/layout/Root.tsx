import { Outlet, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  RefreshCw,
  Users,
  Package,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  ChevronDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/app" },
  { label: "Invoices", icon: FileText, path: "/app/invoices" },
  { label: "Receipts & Advances", icon: Receipt, path: "/app/receipts" },
  { label: "Credit Notes", icon: RefreshCw, path: "/app/credit-notes" },
];

const mgmtItems = [
  { label: "Clients", icon: Users, path: "/app/clients" },
  { label: "Items / Products", icon: Package, path: "/app/items" },
];

export function Root() {
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col bg-[#0F172A] text-slate-300">
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-[#1E293B]">
          <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-white font-semibold text-sm">FaturaDigital</span>
            <p className="text-[10px] text-slate-500 leading-none mt-0.5">AGT Compliant</p>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 px-3 mb-2">Main</p>
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/app"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[#4F46E5] text-white"
                    : "text-slate-400 hover:bg-[#1E293B] hover:text-slate-100"
                }`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </NavLink>
          ))}

          <p className="text-[10px] uppercase tracking-widest text-slate-500 px-3 mt-5 mb-2">Management</p>
          {mgmtItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[#4F46E5] text-white"
                    : "text-slate-400 hover:bg-[#1E293B] hover:text-slate-100"
                }`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 pb-4 border-t border-[#1E293B] pt-4 space-y-0.5">
          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-[#4F46E5] text-white"
                  : "text-slate-400 hover:bg-[#1E293B] hover:text-slate-100"
              }`
            }
          >
            <Settings className="w-4 h-4" />
            Settings
          </NavLink>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-[#1E293B]">
            <div className="w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center text-[10px] text-white font-semibold">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-200 truncate">Meque</p>
              <p className="text-[10px] text-slate-500 truncate">meque@angola.ao</p>
            </div>
            <LogOut className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center px-6 gap-4 flex-shrink-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search invoice #, client name, NIF..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4 text-slate-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4F46E5] rounded-full" />
            </button>

            {/* Create New dropdown */}
            <div className="relative">
              <button
                onClick={() => setCreateOpen(!createOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create New
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {createOpen && (
                <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-xl shadow-lg border border-[#E2E8F0] py-1 z-50">
                  {[
                    { label: "Standard Invoice", path: "/app/invoices/new", icon: "📄" },
                    { label: "Advance Receipt", path: "/app/receipts", icon: "🧾" },
                    { label: "Credit Note", path: "/app/credit-notes", icon: "🔄" },
                    { label: "New Client", path: "/app/clients", icon: "👥" },
                    { label: "New Item", path: "/app/items", icon: "📦" },
                  ].map(({ label, path, icon }) => (
                    <button
                      key={path}
                      onClick={() => { navigate(path); setCreateOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 text-left"
                    >
                      <span>{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
