"use client";

import React, { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { PerspectiveGrid, ThemeAwareIcon } from "./assets/icons";

type ThemeMode = "light" | "dark" | null;
type ZoomLevel = 100 | 400;
type MotionPhase = "initial" | "exiting" | "entering";

const EXIT_DURATION_MS = 220;

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeMode>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [selectedZoom, setSelectedZoom] = useState<ZoomLevel>(100);
  const [appliedZoom, setAppliedZoom] = useState<ZoomLevel>(100);
  const [motionPhase, setMotionPhase] = useState<MotionPhase>("initial");
  const zoomTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    };
  }, []);

  function isMotionReduced(): boolean {
    if (reducedMotion) return true;
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }

  function applyZoomAttribute(level: ZoomLevel) {
    const root = document.documentElement;
    if (level === 400) {
      root.setAttribute("data-zoom", "400");
    } else {
      root.removeAttribute("data-zoom");
    }
  }

  function toggleTheme() {
    const root = document.documentElement;
    const isCurrentlyDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const nextTheme: Exclude<ThemeMode, null> = isCurrentlyDark
      ? "light"
      : "dark";
    root.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  }

  function toggleReducedMotion() {
    const next = !reducedMotion;
    setReducedMotion(next);
    const root = document.documentElement;
    if (next) {
      root.setAttribute("data-reduced-motion", "true");
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
        zoomTimeoutRef.current = null;
      }
      setAppliedZoom(selectedZoom);
      applyZoomAttribute(selectedZoom);
      setMotionPhase("entering");
    } else {
      root.removeAttribute("data-reduced-motion");
    }
  }

  function handleZoomChange(nextZoom: ZoomLevel) {
    if (nextZoom === selectedZoom && nextZoom === appliedZoom) {
      return;
    }

    setSelectedZoom(nextZoom);

    if (zoomTimeoutRef.current) {
      clearTimeout(zoomTimeoutRef.current);
      zoomTimeoutRef.current = null;
    }

    if (isMotionReduced()) {
      setAppliedZoom(nextZoom);
      applyZoomAttribute(nextZoom);
      setMotionPhase("entering");
      return;
    }

    // 1. Slide down + fade out current text
    setMotionPhase("exiting");

    // 2. Swap zoom scale and slide up + fade in new text
    zoomTimeoutRef.current = setTimeout(() => {
      setAppliedZoom(nextZoom);
      applyZoomAttribute(nextZoom);
      setMotionPhase("entering");
      zoomTimeoutRef.current = null;
    }, EXIT_DURATION_MS);
  }

  return (
    <div className="page-shell" data-applied-zoom={appliedZoom}>
      <a href="#main-content" className="skip-link">
        SKIP TO MAIN CONTENT
      </a>

      <div
        className="perspective-grid-stage motion-reveal"
        style={{ "--stagger-index": 0 } as React.CSSProperties}
      >
        <PerspectiveGrid />
      </div>

      <header
        className="top-nav motion-reveal"
        style={{ "--stagger-index": 1 } as React.CSSProperties}
        role="banner"
      >
        <a
          href={profile.wcagUrl}
          target="_blank"
          rel="noreferrer"
          className="a11y-badge"
          aria-label="WCAG 2.2 AAA guidelines — 21 to 1 contrast ratio"
          title="WCAG 2.2 Guidelines"
        >
          AAA · 21:1
        </a>

        <div
          className="a11y-controls"
          role="group"
          aria-label="Accessibility controls"
        >
          <button
            type="button"
            onClick={toggleReducedMotion}
            className={
              reducedMotion
                ? "reduced-motion-btn reduced-motion-btn--active"
                : "reduced-motion-btn"
            }
            aria-pressed={reducedMotion}
            title="Toggle reduced animations"
          >
            <ThemeAwareIcon kind="pause" />
            <span>REDUCED ANIMATIONS</span>
          </button>

          <div
            className="zoom-control"
            role="group"
            aria-label="Viewport zoom scale"
          >
            <ThemeAwareIcon kind="search" />
            <div className="zoom-segments" data-active={selectedZoom}>
              <span className="zoom-slider" aria-hidden="true" />
              <button
                type="button"
                onClick={() => handleZoomChange(100)}
                className={
                  selectedZoom === 100
                    ? "zoom-segment zoom-segment--selected"
                    : "zoom-segment"
                }
                aria-pressed={selectedZoom === 100}
                aria-label="100 percent zoom"
              >
                100%
              </button>
              <button
                type="button"
                onClick={() => handleZoomChange(400)}
                className={
                  selectedZoom === 400
                    ? "zoom-segment zoom-segment--selected"
                    : "zoom-segment"
                }
                aria-pressed={selectedZoom === 400}
                aria-label="400 percent zoom"
              >
                400%
              </button>
            </div>
          </div>
        </div>

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
                <ThemeAwareIcon kind="github" />
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
                <ThemeAwareIcon kind="linkedin" />
              </a>
            </li>
            <li>
              <a
                href={profile.links.email}
                className="icon-btn"
                aria-label="Send email"
                title="Email"
              >
                <ThemeAwareIcon kind="email" />
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="icon-btn icon-btn--theme"
                aria-label="Toggle high-contrast light and dark mode"
                title="Toggle Light / Dark Mode"
              >
                <ThemeAwareIcon kind="theme" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="main-content"
        className="hero-stage"
        data-motion-phase={motionPhase}
        tabIndex={-1}
      >
        <h1
          key={`name-${appliedZoom}`}
          className="hero-name motion-swap"
          style={{ "--stagger-index": 2 } as React.CSSProperties}
        >
          {profile.name}
        </h1>
        <p
          key={`role-${appliedZoom}`}
          className="hero-role motion-swap"
          style={{ "--stagger-index": 3 } as React.CSSProperties}
        >
          {profile.displayRole}
        </p>
      </main>

      <footer
        className="bottom-bar"
        data-motion-phase={motionPhase}
      >
        <span
          key={`footer-${appliedZoom}`}
          className="motion-swap"
          style={{ "--stagger-index": 4 } as React.CSSProperties}
        >
          {profile.stackSignature}
        </span>
      </footer>
    </div>
  );
}
