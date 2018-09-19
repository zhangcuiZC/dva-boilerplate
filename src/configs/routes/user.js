// pages in user layout, used in layouts/userLayout
export default [
  {
    path: "/user",
    component: () => import("../../pages/IndexPage")
  },
  {
    path: "/user/example",
    component: () => import("../../pages/ExamplePage")
  }
];
