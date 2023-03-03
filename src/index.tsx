import React from "react";
import { createRoot } from "react-dom/client";

const rootEl = document.getElementById("app-root");

if (!rootEl) {
    throw new Error("root missing: nowhere to render our React app!");
}

const root = createRoot(rootEl);
root.render(<div>Hello, World!</div>);
