import { useNavigate } from "react-router";
import { Plus, Search, Receipt, MoreVertical, Eye } from "lucide-react";
import { useState } from "react";

const receipts = [
  { id: "REC-2024-011", client: "Luanda Imports", date: "11/10/2024", amount: "50.000,00", type: "Advance Receipt", status: "Issued", linked: "INV-2024-041" },
  { id: "REC-2024-010", client: "Angola Tech Lda", date: "05/10/2024", amount: "75.000,00", type: "Advance Receipt", status: "Settled", linked: "INV-2024-038" },
  { id: "REC-2024-009", client: "Sonangol EP", date: "28/09/2024", amount: "200.000,00", type: "Advance Receipt", status: "Issued", linked: "INV-2024-037" },
  { id: "REC-2024-008", client: "Global Services SA", date: "22/09/2024", amount: "120.000,00", type: "Advance Receipt", status: "Settled", linked: "INV-2024-035" },
];

const statusConfig: Record<string, string> = {
  Issued: "bg-amber-100 text-amber-700",
  Settled: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export function Receipts() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A]">Receipts &amp; Advance Payments</h1>
          <p className="text-sm text-slate-500 mt-0.5">Track advance payments and payment receipts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors">
          <Plus className="w-4 h-4" />
          Record Advance
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Advances", value: "12", color: "text-[#4F46E5]" },
          { label: "Pending Settlement", value: "4", color: "text-[#F59E0B]" },
          { label: "Total Collected (AOA)", value: "445.000", color: "text-[#10B981]" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <p className="text-xs text-slate-400">{label}</p>
            <p className={`font-bold mt-1 ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search receipts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              {["Receipt #", "Client", "Type", "Date", "Amount (AOA)", "Linked Invoice", "Status", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {receipts.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[#10B981]" />
                    <span className="text-sm font-mono font-medium text-[#0F172A]">{r.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{r.client}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{r.type}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{r.date}</td>
                <td className="px-6 py-4 text-sm font-mono font-medium text-slate-700">{r.amount}</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded">{r.linked}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 hover:bg-indigo-50 rounded-md text-slate-400 hover:text-[#4F46E5] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
