import { useNavigate } from "react-router";
import { useState } from "react";
import { Plus, Trash2, ArrowLeft, Save, Send, ChevronDown } from "lucide-react";

interface LineItem {
  id: number;
  item: string;
  description: string;
  qty: number;
  unitPrice: number;
  iva: number;
}

const clients = ["Angola Tech Lda", "Global Services SA", "Sonangol EP", "Luanda Imports", "Retail Group SA"];
const itemOptions = ["Web Development Services", "IT Consulting", "Software License", "Hardware Supply", "Maintenance Contract"];

export function CreateInvoice() {
  const navigate = useNavigate();
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, item: "", description: "", qty: 1, unitPrice: 0, iva: 14 },
  ]);
  const [client, setClient] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("2024-10-12");
  const [dueTerms, setDueTerms] = useState("Net 30");
  const [currency, setCurrency] = useState("AOA");
  const [notes, setNotes] = useState("");

  const addLine = () => {
    setLineItems((prev) => [...prev, { id: Date.now(), item: "", description: "", qty: 1, unitPrice: 0, iva: 14 }]);
  };

  const removeLine = (id: number) => {
    setLineItems((prev) => prev.filter((l) => l.id !== id));
  };

  const updateLine = (id: number, field: keyof LineItem, value: string | number) => {
    setLineItems((prev) => prev.map((l) => l.id === id ? { ...l, [field]: value } : l));
  };

  const subtotal = lineItems.reduce((sum, l) => sum + l.qty * l.unitPrice, 0);
  const totalIva = lineItems.reduce((sum, l) => sum + (l.qty * l.unitPrice * l.iva) / 100, 0);
  const total = subtotal + totalIva;

  const fmt = (v: number) => v.toLocaleString("pt-AO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-4 h-4 text-slate-500" />
        </button>
        <div className="flex-1">
          <h1 className="text-[#0F172A]">Create New Invoice</h1>
          <p className="text-sm text-slate-400 mt-0.5">Issue a new AGT-compliant standard invoice</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors">
            <Send className="w-4 h-4" />
            Issue Invoice
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Entity Details */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="text-[#0F172A] mb-4">Entity Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* From */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">From</p>
              <p className="font-semibold text-[#0F172A] text-sm">Meque Consultores Lda</p>
              <p className="text-xs text-slate-500 mt-1">NIF: 5417000123</p>
              <p className="text-xs text-slate-500">Rua da Missão, 42 — Luanda, Angola</p>
              <p className="text-xs text-slate-500">meque@consultores.ao</p>
            </div>

            {/* To */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">To (Client)</p>
              <div className="relative">
                <select
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg appearance-none bg-white outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10"
                >
                  <option value="">Select or search client...</option>
                  {clients.map((c) => <option key={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              {client && (
                <div className="mt-2 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                  <p className="text-xs text-[#4F46E5] font-medium">{client}</p>
                  <p className="text-xs text-slate-500 mt-0.5">NIF: 6312094851 · Luanda, Angola</p>
                </div>
              )}
              <button className="mt-2 text-xs text-[#4F46E5] hover:text-[#4338CA] font-medium flex items-center gap-1">
                <Plus className="w-3 h-3" /> Quick Add Client
              </button>
            </div>
          </div>
        </div>

        {/* Invoice Metadata */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="text-[#0F172A] mb-4">Invoice Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Invoice Number</label>
              <input
                type="text"
                defaultValue="INV-2024-043"
                className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg bg-slate-50 outline-none font-mono"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Invoice Date</label>
              <input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg outline-none focus:border-[#4F46E5]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Payment Terms</label>
              <div className="relative">
                <select
                  value={dueTerms}
                  onChange={(e) => setDueTerms(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg appearance-none bg-white outline-none focus:border-[#4F46E5]"
                >
                  <option>Net 15</option>
                  <option>Net 30</option>
                  <option>Net 60</option>
                  <option>Custom</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Currency</label>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-[#E2E8F0] rounded-lg appearance-none bg-white outline-none focus:border-[#4F46E5]"
                >
                  <option>AOA</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-[#0F172A]">Line Items</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  {["Item", "Description", "Qty", "Unit Price (AOA)", "IVA (%)", "Total (AOA)", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {lineItems.map((line) => {
                  const lineTotal = line.qty * line.unitPrice * (1 + line.iva / 100);
                  return (
                    <tr key={line.id}>
                      <td className="px-4 py-3">
                        <select
                          value={line.item}
                          onChange={(e) => updateLine(line.id, "item", e.target.value)}
                          className="w-40 text-sm border border-[#E2E8F0] rounded-lg px-2 py-2 outline-none focus:border-[#4F46E5] bg-white"
                        >
                          <option value="">Select item...</option>
                          {itemOptions.map((i) => <option key={i}>{i}</option>)}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Optional description"
                          value={line.description}
                          onChange={(e) => updateLine(line.id, "description", e.target.value)}
                          className="w-44 text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 outline-none focus:border-[#4F46E5]"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={line.qty}
                          onChange={(e) => updateLine(line.id, "qty", Number(e.target.value))}
                          className="w-16 text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 text-center outline-none focus:border-[#4F46E5]"
                          min={1}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={line.unitPrice}
                          onChange={(e) => updateLine(line.id, "unitPrice", Number(e.target.value))}
                          className="w-32 text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 outline-none focus:border-[#4F46E5] font-mono"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={line.iva}
                          onChange={(e) => updateLine(line.id, "iva", Number(e.target.value))}
                          className="w-20 text-sm border border-[#E2E8F0] rounded-lg px-2 py-2 outline-none focus:border-[#4F46E5] bg-white"
                        >
                          <option value={0}>0% (Exempt)</option>
                          <option value={5}>5%</option>
                          <option value={14}>14% (Standard)</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-mono text-slate-700">{fmt(lineTotal)}</span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => removeLine(line.id)}
                          disabled={lineItems.length === 1}
                          className="p-1.5 hover:bg-red-50 rounded-md text-slate-300 hover:text-red-500 transition-colors disabled:opacity-30"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-slate-100">
            <button onClick={addLine} className="flex items-center gap-2 text-sm text-[#4F46E5] hover:text-[#4338CA] font-medium">
              <Plus className="w-4 h-4" />
              Add Another Line
            </button>
          </div>
        </div>

        {/* Totals + Notes */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Notes */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-[#0F172A] mb-3">Terms &amp; Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Bank transfer details (IBAN), payment instructions, or custom message to client..."
              rows={6}
              className="w-full text-sm border border-[#E2E8F0] rounded-lg px-3 py-3 outline-none focus:border-[#4F46E5] resize-none text-slate-600 placeholder:text-slate-400"
            />
            <p className="text-xs text-slate-400 mt-1">e.g. IBAN: AO060004000012345678901 45 · Banco BAI</p>
          </div>

          {/* Totals */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-[#0F172A] mb-4">Summary</h3>
            <div className="space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-mono text-slate-700">{fmt(subtotal)} {currency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">IVA (14% standard)</span>
                <span className="font-mono text-slate-700">{fmt(totalIva)} {currency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Discount</span>
                <span className="font-mono text-slate-500">0,00 {currency}</span>
              </div>
              <div className="border-t border-slate-100 pt-2.5 flex justify-between">
                <span className="font-semibold text-[#0F172A]">Total Amount</span>
                <span className="font-bold font-mono text-[#4F46E5]">{fmt(total)} {currency}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex gap-2">
                <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg">
                  <span className="text-xs text-amber-700">AGT Stamp Tax (0.3%)</span>
                  <span className="ml-auto text-xs font-mono text-amber-700">{fmt(total * 0.003)}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400">Processed in accordance with AGT Decree-Law No. 7/19</p>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex justify-end gap-3 pb-4">
          <button onClick={() => navigate(-1)} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#4F46E5] text-white text-sm rounded-lg hover:bg-[#4338CA] transition-colors">
            <Send className="w-4 h-4" />
            Issue Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
