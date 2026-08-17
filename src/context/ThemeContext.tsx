import { createContext, useState, useEffect, ReactNode } from "react";

// Props type for ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme context data structure
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create global theme context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});


// Theme provider controls light/dark mode globally
export function ThemeProvider({ children }: ThemeProviderProps) {

  // Load saved theme from Local Storage
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );


  // Update UI theme whenever theme state changes
  useEffect(() => {

    // Save selected theme permanently
    localStorage.setItem("theme", theme);

    // Add or remove Tailwind dark class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme]);


  // Switch between light and dark themes
  const toggleTheme = () => {

    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );

  };


  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>

  );

}