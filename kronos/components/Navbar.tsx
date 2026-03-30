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
  { name: "CONTACT", path: "/contact" },
  { name: "OUR TEAM", path: "/team" },
  { name: "DEVELOPER", path: "/developers" },
];

interface NavbarProps {
  activeSection?: string;
  isScrolled?: boolean;
}

export default function Navbar({ activeSection = "hero" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const registerPath = "/events";

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isTopLevelItemActive = (item: NavigationItem) => {
    if (item.section && pathname === "/") {
      return item.section === activeSection;
    }

    return pathname === item.path;
  };

  return (
    <header className={styles.root}>
      <div className={styles.shell}>
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

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.desktopMenu}>
            {navigationItems.map((item) => {
              const isActive = isTopLevelItemActive(item);
              const linkClasses = cn(styles.desktopLink, isActive && styles.desktopLinkActive);

              return (
                <li key={item.name}>
                  <Link href={item.path} className={linkClasses} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href={registerPath} className={styles.registerCta}>
          Register
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
        className={cn(styles.mobilePanel, isOpen && styles.mobilePanelOpen)}
        aria-label="Mobile primary navigation"
        aria-hidden={!isOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <ul className={styles.mobileMenu}>
          {navigationItems.map((item, index) => {
            const isActive = isTopLevelItemActive(item);
            const linkClasses = cn(styles.mobileLink, isActive && styles.mobileLinkActive);

            return (
              <li
                key={item.name}
                className={styles.mobileItem}
                style={{
                  transitionDelay: isOpen ? `${80 + index * 45}ms` : "0ms",
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
          <li className={styles.mobileItem}>
            <Link href={registerPath} className={styles.mobileRegister} onClick={() => setIsOpen(false)}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

