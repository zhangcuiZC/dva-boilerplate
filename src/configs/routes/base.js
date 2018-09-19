// base routes here, eg. layouts / single page
export default [
  {
    path: "/user",
    component: () => import("../../layouts/UserLayout")
  },
  {
    path: "/error",
    component: () => import("../../components/Error404")
  },
  {
    path: "/",
    component: () => import("../../layouts/IndexLayout")
  }
];
