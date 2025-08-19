import { HomeIcon, RotateCcw, Settings, Sun, Moon } from "lucide-react";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon =
    theme === "dark" ? <Sun size={24} /> : <Moon size={24} />;

  function handleChangeTheme(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a
        className={styles.linkMenu}
        href="/"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HomeIcon size={24} />
      </a>

      <a
        className={styles.linkMenu}
        href="/"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <RotateCcw size={24} />
      </a>

      <a
        className={styles.linkMenu}
        href="/"
        aria-label="Configurações"
        title="Configurações"
      >
        <Settings size={24} />
      </a>

      <a
        className={styles.linkMenu}
        href="/"
        aria-label="Mudar o tema"
        title="Mudar o tema"
        onClick={handleChangeTheme}
      >
        {nextThemeIcon}
      </a>
    </div>
  );
}
