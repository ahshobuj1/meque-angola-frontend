import { useNavigate } from "react-router";
import { Plus, Search, Filter, Download, Eye, FileText, MoreVertical } from "lucide-react";
import { useState } from "react";

const invoices = [
  { id: "INV-2024-042", client: "Angola Tech Lda", nif: "5417832109", date: "12/10/2024", due: "27/10/2024", amount: "150.000,00", status: "Paid" },
  { id: "INV-2024-041", client: "Global Services SA", nif: "6312094851", date: "10/10/2024", due: "25/10/2024", amount: "320.000,00", status: "Pending" },
  { id: "INV-2024-040", client: "Sonangol EP", nif: "1000000002", date: "08/10/2024", due: "23/10/2024", amount: "875.000,00", status: "Paid" },
  { id: "INV-2024-039", client: "Luanda Imports", nif: "7891234560", date: "05/10/2024", due: "20/10/2024", amount: "220.000,00", status: "Overdue" },
  { id: "INV-2024-038", client: "Cabinda Oil Corp", nif: "4523678901", date: "01/10/2024", due: "16/10/2024", amount: "1.200.000,00", status: "Paid" },
  { id: "INV-2024-037", client: "Retail Group SA", nif: "8901234567", date: "28/09/2024", due: "13/10/2024", amount: "75.000,00", status: "Paid" },
];

const statusConfig: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
  Draft: "bg-slate-100 text-slate-600",
};

export function InvoiceList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = invoices.filter((inv) => {
    const matchSearch = inv.id.toLowerCase().includes(search.toLowerCase()) || inv.client.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A]">Invoices</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage and track all your invoices</p>
        </div>
        <button
          onClick={() => navigate("/app/invoices/new")}
          className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Invoice
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "All Invoices", count: 42, color: "text-[#0F172A]", bg: "bg-slate-50" },
          { label: "Paid", count: 35, color: "text-[#10B981]", bg: "bg-green-50" },
          { label: "Pending", count: 5, color: "text-[#F59E0B]", bg: "bg-amber-50" },
          { label: "Overdue", count: 2, color: "text-red-600", bg: "bg-red-50" },
        ].map(({ label, count, color, bg }) => (
          <div key={label} className={`${bg} rounded-2xl p-4 border border-slate-100`}>
            <p className="text-xs text-slate-500">{label}</p>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{count}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoice or client..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Paid", "Pending", "Overdue"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${statusFilter === s ? "bg-[#4F46E5] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <button className="ml-auto flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              {["Invoice #", "Client", "NIF", "Date", "Due Date", "Amount (AOA)", "Status", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#4F46E5]" />
                    <span className="text-sm font-mono font-medium text-[#0F172A]">{inv.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{inv.client}</td>
                <td className="px-6 py-4 text-sm font-mono text-slate-500">{inv.nif}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{inv.date}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{inv.due}</td>
                <td className="px-6 py-4 text-sm font-mono font-medium text-slate-700">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-indigo-50 rounded-md text-slate-400 hover:text-[#4F46E5] transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                      <MoreVertical className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No invoices found</p>
          </div>
        )}
      </div>
    </div>
  );
}
