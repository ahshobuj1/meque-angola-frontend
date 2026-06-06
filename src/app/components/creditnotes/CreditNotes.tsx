import { Plus, Search, RefreshCw, MoreVertical } from "lucide-react";
import { useState } from "react";

const creditNotes = [
  { id: "CRN-2024-004", client: "Retail Group SA", date: "12/10/2024", amount: "-25.000,00", reason: "Billing Error", linked: "INV-2024-038", status: "Applied" },
  { id: "CRN-2024-003", client: "Angola Tech Lda", date: "05/10/2024", amount: "-50.000,00", reason: "Service Cancellation", linked: "INV-2024-035", status: "Applied" },
  { id: "CRN-2024-002", client: "Global Services SA", date: "28/09/2024", amount: "-15.000,00", reason: "Discount Adjustment", linked: "INV-2024-032", status: "Pending" },
];

const statusConfig: Record<string, string> = {
  Applied: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Voided: "bg-red-100 text-red-700",
};

export function CreditNotes() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A]">Credit Notes</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage billing corrections and refund notes</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors">
          <Plus className="w-4 h-4" />
          New Credit Note
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Credit Notes", value: "9", color: "text-[#4F46E5]" },
          { label: "Pending Application", value: "2", color: "text-[#F59E0B]" },
          { label: "Total Credits Issued (AOA)", value: "90.000", color: "text-blue-600" },
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
              placeholder="Search credit notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              {["Credit Note #", "Client", "Date", "Amount (AOA)", "Reason", "Linked Invoice", "Status", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {creditNotes.map((cn) => (
              <tr key={cn.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-mono font-medium text-[#0F172A]">{cn.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{cn.client}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{cn.date}</td>
                <td className="px-6 py-4 text-sm font-mono font-medium text-red-600">{cn.amount}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{cn.reason}</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded">{cn.linked}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[cn.status]}`}>
                    {cn.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
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
