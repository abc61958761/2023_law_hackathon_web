import Vue from "vue";
import VueRouter from "vue-router";

// import PurchaseRecord from "./views/PurchaseRecord";
// import Inventory from "./views/Inventory";
// import SoldRecord from "./views/SoldRecord";
// import SettlementRecrod from "./views/SettlementRecrod";
// import SettlementDetail from "./views/SettlementDetail";
import Projects from "./views/Projects"
import MarkSetting from "./views/MarkSetting";
import Verdicts from "./views/Verdicts";
import VerdictDetail from "./views/VerdictDetail";
import ProjectDetail from "./views/ProjectDetail";
import Login from "./views/Login";
import Layout from "./layout/Layout"

Vue.use(VueRouter);

const routes = [
  // { path: "/", component: Projects, alias: "/projects" },
  // { path: "/mark-setting/:projectId", component: MarkSetting },
  // { path: "/projects/:projectId/verdicts", component: Verdicts },
  // { path: "/projects/:projectId/verdicts/:verdictId", component: VerdictDetail },
  // { path: "/create-project", component: ProjectDetail },
  // { path: "/projects/:projectId/edit", component: ProjectDetail },
  { path: "/login", component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Projects,
        alias: "/projects"
      },
      { path: "/mark-setting/", component: MarkSetting },
      { path: "/mark-setting/:projectId", component: MarkSetting },
      { path: "/projects/:projectId/verdicts", component: Verdicts },
      { path: "/projects/:projectId/verdicts/:verdictId", component: VerdictDetail },
      { path: "/create-project", component: ProjectDetail },
      { path: "/projects/:projectId/edit", component: ProjectDetail },

    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
