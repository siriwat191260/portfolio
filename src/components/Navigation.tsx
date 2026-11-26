"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";

const items = [{ href: "/", label: "About" }, { href: "/projects/", label: "Projects" }, { href: "/contact/", label: "Contact" }];
export default function Navigation() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const path = usePathname().replace(/\/$/, "") || "/";
  return <header className="wrap bar">
    <IconButton aria-label="Open navigation menu" aria-controls={anchor ? "navigation-menu" : undefined}
      aria-expanded={Boolean(anchor)} aria-haspopup="true" onClick={e => setAnchor(e.currentTarget)}
      sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1, width: 44, height: 44 }}>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    </IconButton>
    <Menu id="navigation-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
      {items.map(item => {
        const active = path === (item.href.replace(/\/$/, "") || "/");
        return <MenuItem key={item.href} component={Link} href={item.href} selected={active}
          aria-current={active ? "page" : undefined} onClick={() => setAnchor(null)}>{item.label}</MenuItem>;
      })}
    </Menu>
    <Link className="brand" href="/">Siriwat Songwattana <span>(Developer)</span></Link>
  </header>;
}
