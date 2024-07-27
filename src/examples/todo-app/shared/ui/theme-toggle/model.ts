import { atom, withLocalStorage } from "@/packages/store/atom";

export type Theme = "light" | "dark";

const THEME_KEY = "theme";

const theme = withLocalStorage(THEME_KEY, atom<Theme>("light"));

const toggleTheme = () => {
  theme.set((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};

export const themeModel = {
  theme,
  toggleTheme,
};
