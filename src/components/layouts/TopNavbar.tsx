"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import LokeshwarImage from "@/assets/images/transition/navbar-logo.jpeg";
import { cn } from "@/lib/utils";
import { GithubBadge } from "./GithubBadge";

import { usePathname } from "next/navigation";

export function TopNavbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Skills",
      link: pathname === "/contact" || pathname === "/projects" ? "/skills" : "/#skills_section",
    },
    {
      name: "Projects",
      link: pathname === "/contact" || pathname === "/skills" ? "/projects" : "/#projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="scale_layout fixed inset-x-0 top-4 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo url={LokeshwarImage} />
        <NavItems items={navItems} />
        <div className="relative z-50 flex items-center gap-4">
          <GithubBadge />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo url={LokeshwarImage} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => {
            const isActive =
              pathname === item.link || (pathname === "/" && item.link.startsWith("/#"));
            return (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "relative text-neutral-600 transition-colors dark:text-neutral-300",
                  isActive && "font-semibold text-black dark:text-white"
                )}
              >
                <span className="block">{item.name}</span>
              </a>
            );
          })}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => {
                window.location.href = "mailto:lokeshwar.prasad.cse@gmail.com";
                setIsMobileMenuOpen(false);
              }}
              variant="primary"
              className="w-full"
            >
              Let&apos;s Connect 🤝
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
