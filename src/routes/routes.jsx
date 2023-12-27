import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Budgeting = lazy(() => import("../pages/budgeting/Budgeting"));
const Transactions = lazy(() => import("../pages/transactions/Transactions"));
const Goals = lazy(() => import("../pages/goals/Goals"));
const Report = lazy(() => import("../pages/report/Report"));
const Forums = lazy(() => import("../pages/forums/Forums"));
const Accounts = lazy(() => import("../pages/accounts/Accounts"));
const Support = lazy(() => import("../pages/support/Support"));

const coreRoutes = [
  {
    path: "dashboard",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "budgeting",
    title: "Budgeting",
    component: Budgeting,
  },
  {
    path: "transactions",
    title: "Transactions",
    component: Transactions,
  },
  {
    path: "goal",
    title: "Saving Goals",
    component: Goals,
  },
  {
    path: "report",
    title: "Report",
    component: Report,
  },
  {
    path: "forums",
    title: "Forums",
    component: Forums,
  },
  {
    path: "accounts",
    title: "Accounts",
    component: Accounts,
  },
  {
    path: "support",
    title: "Support",
    component: Support,
  },
];

const routes = [...coreRoutes];
export default routes;
