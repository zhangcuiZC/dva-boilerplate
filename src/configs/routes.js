// layout routes or single page routes
const baseRoutes = [
  {
    path: "/user",
    component: () => import("../layouts/UserLayout")
  },
  {
    path: "/error",
    component: () => import("../components/Error404")
  },
  {
    path: "/",
    component: () => import("../layouts/IndexLayout")
  }
];

//routes in index layout
const indexRoutes = [
  {
    path: "/",
    models: () => [import("../models/example")],
    component: () => import("../pages/IndexPage")
  },
  {
    path: "/example",
    component: () => import("../pages/ExamplePage")
  }
];

// routes in user layout
const userRoutes = [
  {
    path: "/user",
    component: () => import("../pages/IndexPage")
  },
  {
    path: "/user/example",
    component: () => import("../pages/ExamplePage")
  }
];

export { baseRoutes, indexRoutes, userRoutes };
