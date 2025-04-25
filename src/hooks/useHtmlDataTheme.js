import { useEffect, useState } from "react";

export function useHtmlDataTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.dataset.theme ?? "light"
      : "light"
  );

  useEffect(() => {
    const el = document.documentElement;

    const observer = new MutationObserver(() => {
      setTheme(el.dataset.theme ?? "light");
    });

    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return theme; // "light" or "dark"
}
