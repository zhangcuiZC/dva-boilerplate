import dva from "dva";
import FastClick from "fastclick";
import "@babel/polyfill";
import createHistory from "history/createBrowserHistory";
import "./index.css";

// 1. Initialize
const app = dva({ history: createHistory() });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/app").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");

FastClick.attach(document.body);

export default app;
