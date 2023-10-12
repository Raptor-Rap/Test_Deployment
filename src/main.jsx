import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import App from "./routes";
import { TokenProvider } from "./utils/contexts/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);
