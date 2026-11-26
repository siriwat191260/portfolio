import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: { default: "About | Siriwat Songwattana", template: "%s | Siriwat Songwattana" },
  description: "Siriwat Songwattana — web developer, projects, and tech stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Providers>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navigation />
        <main id="main">{children}</main>
        <footer className="wrap footer">© 2026 Siriwat Songwattana · Crafted with curiosity.</footer>
      </Providers>
    </AppRouterCacheProvider>
  </body></html>;
}
