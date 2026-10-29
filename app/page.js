"use client";

import { useState } from "react";
import { profile } from "../data/profile";

export default function HomePage() {
  const [theme, setTheme] = useState(null);

  function toggleTheme() {
    const root = document.documentElement;
    const isCurrentlyDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const nextTheme = isCurrentlyDark ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="top-nav" role="banner">
        <span className="a11y-badge" aria-label="Contrast Ratio 21 to 1 WCAG AAA">
          AAA · 21:1
        </span>

        <nav aria-label="Primary links and theme controls">
          <ul className="icon-links">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={profile.links.email}
                className="icon-btn"
                aria-label="Send email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="icon-btn"
                aria-label="Toggle high-contrast light and dark mode"
                title="Toggle Light / Dark Mode"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="hero-stage">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
      </main>

      <footer className="bottom-bar">
        <span>{profile.statement}</span>
        <span>SEMANTIC HTML · CORE CSS</span>
      </footer>
    </div>
  );
}
