import { useState } from "react";
import { Plus, Search, MoreVertical, Users, Building2, Phone, Mail, X } from "lucide-react";

const clientData = [
  { id: 1, name: "Angola Tech Lda", nif: "5417832109", type: "Corporate", email: "info@angolatech.ao", phone: "+244 222 123 456", city: "Luanda", invoices: 12, balance: "150.000,00" },
  { id: 2, name: "Global Services SA", nif: "6312094851", type: "Corporate", email: "geral@globalservices.ao", phone: "+244 222 987 654", city: "Luanda", invoices: 8, balance: "320.000,00" },
  { id: 3, name: "Sonangol EP", nif: "1000000002", type: "State Enterprise", email: "faturacao@sonangol.ao", phone: "+244 222 333 111", city: "Luanda", invoices: 5, balance: "875.000,00" },
  { id: 4, name: "Luanda Imports", nif: "7891234560", type: "Corporate", email: "compras@luandaimports.ao", phone: "+244 222 444 222", city: "Luanda", invoices: 15, balance: "50.000,00" },
  { id: 5, name: "Retail Group SA", nif: "8901234567", type: "Corporate", email: "financas@retailgroup.ao", phone: "+244 222 555 333", city: "Benguela", invoices: 3, balance: "0,00" },
  { id: 6, name: "João Baptista Costa", nif: "3241567890", type: "Individual", email: "joao.costa@gmail.com", phone: "+244 923 111 222", city: "Huambo", invoices: 2, balance: "75.000,00" },
];

export function Clients() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", nif: "", type: "Corporate", email: "", phone: "", city: "" });

  const filtered = clientData.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.nif.includes(search)
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A]">Clients</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage your client directory</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Client
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Clients", value: "142", icon: Users, color: "text-[#4F46E5]", bg: "bg-indigo-50" },
          { label: "Corporate", value: "98", icon: Building2, color: "text-[#10B981]", bg: "bg-green-50" },
          { label: "Individual", value: "44", icon: Users, color: "text-[#F59E0B]", bg: "bg-amber-50" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-xs text-slate-400">{label}</p>
              <p className="font-bold text-[#0F172A]">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or NIF..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              {["Client", "NIF", "Type", "Contact", "City", "Invoices", "Outstanding (AOA)", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F46E5]/10 flex items-center justify-center text-xs font-semibold text-[#4F46E5]">
                      {c.name[0]}
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">{c.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-slate-500">{c.nif}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${c.type === "Individual" ? "bg-purple-100 text-purple-700" : c.type === "State Enterprise" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>
                    {c.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Mail className="w-3 h-3" /> {c.email}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Phone className="w-3 h-3" /> {c.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{c.city}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{c.invoices}</td>
                <td className="px-6 py-4 text-sm font-mono text-slate-700">{c.balance}</td>
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

      {/* Add Client Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-[#0F172A]">Register New Client</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name / Company Name</label>
                  <input
                    type="text"
                    placeholder="Angola Tech Lda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">NIF (Tax ID)</label>
                  <input
                    type="text"
                    placeholder="5417832109"
                    value={form.nif}
                    onChange={(e) => setForm({ ...form, nif: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Client Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white"
                  >
                    <option>Corporate</option>
                    <option>Individual</option>
                    <option>State Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="info@company.ao"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Phone</label>
                  <input
                    type="text"
                    placeholder="+244 222 000 000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">City / Province</label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white"
                  >
                    <option value="">Select province...</option>
                    {["Luanda", "Benguela", "Huambo", "Huíla", "Cabinda", "Malanje", "Uíge", "Kwanza Norte", "Kwanza Sul"].map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA]">
                Register Client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
