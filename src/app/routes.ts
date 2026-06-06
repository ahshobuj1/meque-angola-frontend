import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { LandingPage } from "./components/landing/LandingPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import { InvoiceList } from "./components/invoices/InvoiceList";
import { CreateInvoice } from "./components/invoices/CreateInvoice";
import { Clients } from "./components/clients/Clients";
import { Items } from "./components/items/Items";
import { Receipts } from "./components/receipts/Receipts";
import { CreditNotes } from "./components/creditnotes/CreditNotes";
import { Settings } from "./components/settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "invoices", Component: InvoiceList },
      { path: "invoices/new", Component: CreateInvoice },
      { path: "receipts", Component: Receipts },
      { path: "credit-notes", Component: CreditNotes },
      { path: "clients", Component: Clients },
      { path: "items", Component: Items },
      { path: "settings", Component: Settings },
    ],
  },
]);
