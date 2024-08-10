"use client";

import { Switch } from "../ui/switch";
import { useTheme,ThemeProvider } from "next-themes";
export const Navbar = () => {
 const {theme, setTheme} = useTheme();

 const toggleTheme = () => {
   setTheme(theme === "dark" ? "light" : "dark");
 }
  return (
    <nav className="flex justify-between flex-col items-center bg-slate-300 p-3 gap-5 dark:bg-slate-800">
      <h1 className="text-3xl font-bold">Cripto Data API</h1>
      <Switch onClick={toggleTheme} />
    </nav>
  );
};
