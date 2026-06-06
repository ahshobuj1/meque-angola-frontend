import { useState } from "react";
import { Plus, Search, Package, MoreVertical, X } from "lucide-react";

const itemData = [
  { id: 1, code: "SVC-001", name: "Web Development Services", category: "Services", unit: "Hour", price: "25.000,00", iva: 14, stock: null },
  { id: 2, code: "SVC-002", name: "IT Consulting", category: "Services", unit: "Day", price: "80.000,00", iva: 14, stock: null },
  { id: 3, code: "SFT-001", name: "Software License (Annual)", category: "Software", unit: "License", price: "150.000,00", iva: 0, stock: null },
  { id: 4, code: "HDW-001", name: "Laptop Dell Latitude 5540", category: "Hardware", unit: "Unit", price: "650.000,00", iva: 14, stock: 8 },
  { id: 5, code: "HDW-002", name: "Network Switch 24 Ports", category: "Hardware", unit: "Unit", price: "180.000,00", iva: 14, stock: 3 },
  { id: 6, code: "SVC-003", name: "Maintenance Contract (Monthly)", category: "Services", unit: "Month", price: "45.000,00", iva: 14, stock: null },
  { id: 7, code: "SVC-004", name: "Cloud Hosting (Annual)", category: "Services", unit: "Year", price: "120.000,00", iva: 0, stock: null },
];

const categories = ["All", "Services", "Hardware", "Software", "Products"];

export function Items() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ code: "", name: "", category: "Services", unit: "Hour", price: "", iva: "14" });

  const filtered = itemData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoryFilter === "All" || item.category === categoryFilter;
    return matchSearch && matchCat;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A]">Items &amp; Products</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage your product and service catalog</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Item
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100 flex-wrap">
          <div className="relative flex-1 min-w-48 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${categoryFilter === cat ? "bg-[#4F46E5] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              {["Code", "Name", "Category", "Unit", "Unit Price (AOA)", "IVA", "Stock", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{item.code}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
                      <Package className="w-4 h-4 text-[#4F46E5]" />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.category === "Services" ? "bg-indigo-100 text-indigo-700" :
                    item.category === "Hardware" ? "bg-green-100 text-green-700" :
                    "bg-purple-100 text-purple-700"
                  }`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{item.unit}</td>
                <td className="px-6 py-4 text-sm font-mono font-medium text-slate-700">{item.price}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${item.iva === 0 ? "bg-slate-100 text-slate-500" : "bg-amber-100 text-amber-700"}`}>
                    {item.iva}%{item.iva === 0 && " (Exempt)"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.stock !== null ? (
                    <span className={`text-sm font-medium ${item.stock < 5 ? "text-red-600" : "text-[#10B981]"}`}>
                      {item.stock} units
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">Service</span>
                  )}
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

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <Package className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No items found</p>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-[#0F172A]">Add New Item / Product</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Item Code</label>
                  <input type="text" placeholder="SVC-001" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Category</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white">
                    <option>Services</option><option>Hardware</option><option>Software</option><option>Products</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Item Name</label>
                  <input type="text" placeholder="Web Development Services" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Unit of Measure</label>
                  <select value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white">
                    <option>Hour</option><option>Day</option><option>Month</option><option>Year</option><option>Unit</option><option>License</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">IVA Rate</label>
                  <select value={form.iva} onChange={(e) => setForm({ ...form, iva: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white">
                    <option value="0">0% (Exempt)</option>
                    <option value="5">5% (Reduced)</option>
                    <option value="14">14% (Standard)</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Unit Price (AOA)</label>
                  <input type="number" placeholder="25000" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] font-mono" />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA]">Save Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
