import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { LangProvider, LanguageToggle, useLang } from "@/lib/lang-context";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const rootTitle = "Si Rangan EduKit — Media Pembelajaran Phygital Sasirangan";
const rootDesc =
  "Koper alat peraga Sasirangan untuk siswa SD: kenali motif, coba Digital Color Lab, ikuti tutorial praktik, dan kerjakan mini kuis.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: rootTitle },
      { name: "description", content: rootDesc },
      { name: "author", content: "Si Rangan EduKit" },
      { property: "og:title", content: rootTitle },
      { property: "og:description", content: rootDesc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SiRanganEduKit" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/icon-512.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      </LangProvider>
    </QueryClientProvider>
  );
}

const navItems = [
  { to: "/", label: { id: "Beranda", en: "Home" } },
  { to: "/motif", label: { id: "Motif", en: "Motifs" } },
  { to: "/color-lab", label: { id: "Color Lab", en: "Color Lab" } },
  { to: "/designer", label: { id: "Designer", en: "Designer" } },
  { to: "/tutorial", label: { id: "Tutorial", en: "Tutorial" } },
  { to: "/kuis", label: { id: "Kuis", en: "Quiz" } },
] as const;

function SiteFooter() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-border bg-secondary/60 px-4 py-8 text-center text-xs text-muted-foreground">
      {lang === "en"
        ? "Si Rangan EduKit — Culture-Based Phygital Learning Media for Sasirangan Education"
        : "Si Rangan EduKit — Media Pembelajaran Phygital Berbasis Budaya untuk Edukasi Sasirangan"}
    </footer>
  );
}

function SiteNav() {
  const { lang } = useLang();
  return (
    <div className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-4 py-3">
        <Link to="/" className="mr-2 shrink-0 font-display text-lg font-extrabold text-primary">
          Si Rangan
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
          >
            {item.label[lang]}
          </Link>
        ))}
        <LanguageToggle className="ml-auto" />
      </nav>
    </div>
  );
}
