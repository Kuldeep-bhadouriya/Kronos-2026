"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./navbar.module.css";

type NavigationItem = {
  name: string;
  path: string;
  section?: string | null;
};

const navigationItems: NavigationItem[] = [
  { name: "HOME", path: "/", section: "hero" },
  { name: "ABOUT", path: "/about" },
  { name: "EVENTS", path: "/events" },
  { name: "SCHEDULE", path: "/schedule" },
  { name: "CORE TEAM", path: "/team" },
  { name: "DEVELOPER", path: "/developers" },
  { name: "CONTACT", path: "/contact" },
];

interface NavbarProps {
  activeSection?: string;
  isScrolled?: boolean;
}

export default function Navbar({ activeSection = "hero" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isTopLevelItemActive = (item: NavigationItem) => {
    if (item.section && pathname === "/") {
      return item.section === activeSection;
    }

    return pathname === item.path;
  };

  return (
    <header className={styles.root}>
      <div className={styles.brandBar}>
        <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <Image
            src="/itm_logo.png"
            alt="Kronos Logo"
            width={42}
            height={42}
            className={styles.logo}
            priority
          />
          <span className={styles.wordmark}>KRONOS</span>
        </Link>

        <button
          type="button"
          className={cn(styles.toggle, isOpen && styles.toggleOpen)}
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-label="Toggle main navigation"
          aria-controls="main-navigation"
          aria-expanded={isOpen}
        >
          <span className={styles.toggleIcon} />
        </button>
      </div>

      <nav
        id="main-navigation"
        className={cn(styles.navMain, isOpen && styles.navMainOpen)}
        aria-hidden={!isOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <button
          type="button"
          className={styles.overlayClose}
          aria-label="Close main navigation"
          onClick={() => setIsOpen(false)}
        >
          <span className={styles.overlayCloseIcon} />
        </button>

        <ul className={styles.menu}>
          {navigationItems.map((item, index) => {
            const isActive = isTopLevelItemActive(item);
            const linkClasses = cn(styles.menuLink, isActive && styles.menuLinkActive);

            return (
              <li
                key={item.name}
                className={styles.menuItem}
                style={{
                  transitionDelay: isOpen ? `${130 + index * 85}ms` : "0ms",
                }}
              >
                <Link
                  href={item.path}
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

