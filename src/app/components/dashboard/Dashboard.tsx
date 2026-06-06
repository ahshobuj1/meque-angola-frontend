import { useNavigate } from "react-router";
import { TrendingUp, TrendingDown, Users, Package, FileText, ArrowRight, MoreVertical } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jun", revenue: 820000, invoices: 12 },
  { month: "Jul", revenue: 960000, invoices: 15 },
  { month: "Aug", revenue: 1100000, invoices: 18 },
  { month: "Sep", revenue: 980000, invoices: 14 },
  { month: "Oct", revenue: 1280000, invoices: 20 },
  { month: "Nov", revenue: 1450000, invoices: 22 },
];

const recentDocs = [
  { date: "12 Out", doc: "INV-2024-042", type: "Standard Invoice", client: "Angola Tech Lda", amount: "150.000,00", status: "Paid", statusColor: "bg-green-100 text-green-700" },
  { date: "11 Out", doc: "REC-2024-011", type: "Advance Receipt", client: "Luanda Imports", amount: "50.000,00", status: "Issued", statusColor: "bg-green-100 text-green-700" },
  { date: "10 Out", doc: "INV-2024-041", type: "Standard Invoice", client: "Global Services SA", amount: "320.000,00", status: "Pending", statusColor: "bg-amber-100 text-amber-700" },
  { date: "09 Out", doc: "CRN-2024-002", type: "Credit Note", client: "Retail Group SA", amount: "-25.000,00", status: "Applied", statusColor: "bg-blue-100 text-blue-700" },
  { date: "08 Out", doc: "INV-2024-040", type: "Standard Invoice", client: "Sonangol EP", amount: "875.000,00", status: "Paid", statusColor: "bg-green-100 text-green-700" },
];

const quickActions = [
  { icon: "📄", label: "Issue Standard Invoice", path: "/app/invoices/new", color: "bg-[#4F46E5]" },
  { icon: "🧾", label: "Record Advance Payment", path: "/app/receipts", color: "bg-[#10B981]" },
  { icon: "👥", label: "Register New Client", path: "/app/clients", color: "bg-[#F59E0B]" },
];

export function Dashboard() {
  const navigate = useNavigate();

  const metrics = [
    {
      label: "Total Revenue (Nov)",
      value: "1.450.000",
      suffix: "AOA",
      change: "+12%",
      positive: true,
      icon: TrendingUp,
      iconBg: "bg-indigo-50",
      iconColor: "text-[#4F46E5]",
    },
    {
      label: "Outstanding Invoices",
      value: "320.000",
      suffix: "AOA",
      change: "5 Unpaid",
      positive: false,
      icon: TrendingDown,
      iconBg: "bg-amber-50",
      iconColor: "text-[#F59E0B]",
    },
    {
      label: "Total Clients",
      value: "142",
      suffix: "",
      change: "+8 this month",
      positive: true,
      icon: Users,
      iconBg: "bg-green-50",
      iconColor: "text-[#10B981]",
    },
    {
      label: "Active Items",
      value: "84",
      suffix: "",
      change: "+3 this month",
      positive: true,
      icon: Package,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-[#0F172A]">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-0.5">Welcome back, Meque. Here's what's happening today.</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ label, value, suffix, change, positive, icon: Icon, iconBg, iconColor }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-500 mb-1">{label}</p>
                <p className="font-bold text-[#0F172A]">
                  {value}
                  {suffix && <span className="text-sm font-normal text-slate-400 ml-1">{suffix}</span>}
                </p>
              </div>
              <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>
            </div>
            <p className={`text-xs mt-2 font-medium ${positive ? "text-[#10B981]" : "text-[#F59E0B]"}`}>
              {change}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        {quickActions.map(({ icon, label, path, color }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4F46E5]/20 transition-all group text-left"
          >
            <div className={`w-10 h-10 rounded-xl ${color}/10 flex items-center justify-center text-xl flex-shrink-0`}>
              {icon}
            </div>
            <span className="text-sm font-medium text-[#0F172A]">{label}</span>
            <ArrowRight className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {/* Chart + Recent docs */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[#0F172A]">Revenue Overview</h3>
              <p className="text-xs text-slate-400 mt-0.5">Monthly billing in AOA</p>
            </div>
            <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 outline-none">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip
                formatter={(value: number) => [`${value.toLocaleString("pt-AO")} AOA`, "Revenue"]}
                contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0", fontSize: "12px" }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} fill="url(#revenueGradient)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Document type breakdown */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <h3 className="text-[#0F172A] mb-4">Document Types</h3>
          <div className="space-y-3">
            {[
              { type: "Standard Invoices", count: 38, pct: 65, color: "bg-[#4F46E5]" },
              { type: "Advance Receipts", count: 12, pct: 20, color: "bg-[#10B981]" },
              { type: "Credit Notes", count: 5, pct: 9, color: "bg-[#F59E0B]" },
              { type: "Other", count: 3, pct: 6, color: "bg-slate-300" },
            ].map(({ type, count, pct, color }) => (
              <div key={type}>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{type}</span>
                  <span className="font-medium text-slate-700">{count}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Total this month</span>
              <span className="font-semibold text-[#0F172A]">58 documents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Documents */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-[#0F172A]">Recent Documents</h3>
          <button
            onClick={() => navigate("/app/invoices")}
            className="flex items-center gap-1.5 text-xs text-[#4F46E5] hover:text-[#4338CA] font-medium"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                {["Date", "Document", "Type", "Client", "Amount (AOA)", "Status", ""].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {recentDocs.map(({ date, doc, type, client, amount, status, statusColor }) => (
                <tr key={doc} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500">{date}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono font-medium text-[#0F172A]">{doc}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{type}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">{client}</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-700">{amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-slate-100 rounded-md transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
