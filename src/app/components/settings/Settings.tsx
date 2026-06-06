import { Building2, Percent, CreditCard, Bell, Shield, Save } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "company", label: "Company", icon: Building2 },
  { id: "tax", label: "Tax & IVA", icon: Percent },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "compliance", label: "AGT Compliance", icon: Shield },
];

export function Settings() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="p-6 max-w-5xl space-y-6">
      <div>
        <h1 className="text-[#0F172A]">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Configure your platform and billing preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar tabs */}
        <div className="w-48 flex-shrink-0 space-y-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                activeTab === id
                  ? "bg-[#4F46E5]/10 text-[#4F46E5] font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          {activeTab === "company" && (
            <div className="space-y-5">
              <h3 className="text-[#0F172A] pb-3 border-b border-slate-100">Company Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Company / Business Name</label>
                  <input type="text" defaultValue="Meque Consultores Lda" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">NIF (Tax Identification Number)</label>
                  <input type="text" defaultValue="5417000123" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Province</label>
                  <select className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white">
                    <option>Luanda</option>
                    <option>Benguela</option>
                    <option>Huambo</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Address</label>
                  <input type="text" defaultValue="Rua da Missão, 42, Luanda, Angola" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Phone</label>
                  <input type="text" defaultValue="+244 222 000 000" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                  <input type="email" defaultValue="meque@consultores.ao" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Invoice Prefix</label>
                  <input type="text" defaultValue="INV" className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Default Currency</label>
                  <select className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5] bg-white">
                    <option>AOA — Kwanza Angolano</option>
                    <option>USD — US Dollar</option>
                    <option>EUR — Euro</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tax" && (
            <div className="space-y-5">
              <h3 className="text-[#0F172A] pb-3 border-b border-slate-100">Tax &amp; IVA Configuration</h3>
              <div className="space-y-4">
                {[
                  { label: "Standard IVA Rate", value: "14%", note: "Decreto Executivo n.º 307/21 — Default for most goods and services" },
                  { label: "Reduced IVA Rate", value: "5%", note: "Applied to basic goods basket and pharmaceuticals" },
                  { label: "IVA Exempt", value: "0%", note: "Education, healthcare, exported services" },
                  { label: "Stamp Tax Rate", value: "0.3%", note: "Applied to total invoice amount per AGT regulations" },
                ].map(({ label, value, note }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#0F172A]">{label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{note}</p>
                    </div>
                    <span className="text-sm font-bold font-mono text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "compliance" && (
            <div className="space-y-5">
              <h3 className="text-[#0F172A] pb-3 border-b border-slate-100">AGT Compliance</h3>
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Platform is AGT Compliant</p>
                  <p className="text-xs text-green-600 mt-0.5">All documents issued comply with Decreto Legislativo Presidencial n.º 3/14 and subsequent amendments.</p>
                </div>
              </div>
              {[
                { label: "Electronic Invoice Format", status: "Active", type: "success" },
                { label: "Automatic Document Numbering (Sequential)", status: "Active", type: "success" },
                { label: "AGT Data Export (SAFT-AO)", status: "Active", type: "success" },
                { label: "Digital Signature Enabled", status: "Active", type: "success" },
                { label: "Real-time AGT Portal Sync", status: "Setup Required", type: "warning" },
              ].map(({ label, status, type }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                  <p className="text-sm text-slate-700">{label}</p>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${type === "success" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {(activeTab === "payment" || activeTab === "notifications") && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">Configure {tabs.find((t) => t.id === activeTab)?.label} settings here.</p>
            </div>
          )}

          <div className="flex justify-end mt-6 pt-4 border-t border-slate-100">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
