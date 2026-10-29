import React from "react";

export const ASSETS = {
  light: {
    grid: "/assets/grid-light.svg",
    pause: "/assets/pause-light.svg",
    search: "/assets/search-light.svg",
    github: "/assets/github-light.svg",
    linkedin: "/assets/linkedin-light.svg",
    email: "/assets/email-light.svg",
    theme: "/assets/theme-light.svg",
  },
  dark: {
    grid: "/assets/grid-dark.svg",
    pause: "/assets/pause-dark.svg",
    search: "/assets/search-dark.svg",
    github: "/assets/github-dark.svg",
    linkedin: "/assets/linkedin-dark.svg",
    email: "/assets/email-dark.svg",
    theme: "/assets/theme-dark.svg",
  },
} as const;

export type IconKind =
  | "pause"
  | "search"
  | "github"
  | "linkedin"
  | "email"
  | "theme";

interface ThemeAwareIconProps {
  kind: IconKind;
}

/**
 * Renders the exact Figma-exported SVG asset for both Light and Dark themes.
 * CSS toggles visibility between `.theme-asset-light` and `.theme-asset-dark`
 * so SSR and client theme switches stay instant and hydration-safe.
 */
export function ThemeAwareIcon({ kind }: ThemeAwareIconProps) {
  const isInset14 = kind === "pause" || kind === "search";

  return (
    <span
      className={isInset14 ? "icon-slot icon-slot--inset" : "icon-slot"}
      aria-hidden="true"
    >
      <span className={isInset14 ? "icon-inner-14" : "icon-inner-18"}>
        <img
          src={ASSETS.light[kind]}
          alt=""
          className="theme-asset theme-asset--light"
        />
        <img
          src={ASSETS.dark[kind]}
          alt=""
          className="theme-asset theme-asset--dark"
        />
      </span>
    </span>
  );
}

/**
 * Decorative Outrun fading perspective grid (horizon at 60% viewport height).
 */
export function PerspectiveGrid() {
  return (
    <div className="perspective-grid" aria-hidden="true">
      <img
        src={ASSETS.light.grid}
        alt=""
        className="theme-asset theme-asset--light perspective-grid__img"
      />
      <img
        src={ASSETS.dark.grid}
        alt=""
        className="theme-asset theme-asset--dark perspective-grid__img"
      />
    </div>
  );
}

