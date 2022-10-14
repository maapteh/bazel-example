import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

console.log(9);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
