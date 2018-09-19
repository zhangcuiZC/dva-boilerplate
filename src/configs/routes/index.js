// pages in index layout, used in layouts/indexLayout
export default [
  {
    path: "/",
    models: () => [import("../../models/example")],
    component: () => import("../../pages/IndexPage")
  },
  {
    path: "/example",
    component: () => import("../../pages/ExamplePage")
  }
];
