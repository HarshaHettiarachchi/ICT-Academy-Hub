import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";


// Create React application root and render the app
createRoot(
  document.getElementById("root")!
).render(

  <StrictMode>

    {/* Global theme provider for light and dark mode control */}
    <ThemeProvider>

      {/* Main application component */}
      <App />

    </ThemeProvider>

  </StrictMode>

);