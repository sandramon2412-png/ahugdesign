import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl" style={{ color: "var(--espresso)" }}>404</h1>
        <h2 className="mt-4 font-display text-2xl italic" style={{ color: "var(--sage-dark)" }}>
          This page got lost in the garden
        </h2>
        <p className="mt-3 text-sm" style={{ color: "var(--umber)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px"
            style={{ background: "var(--terra)" }}
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "A Hug Design · Designs That Feel Like a Hug" },
      {
        name: "description",
        content:
          "Woman-owned studio crafting tote bags, apparel and gifts that feel like an embrace. Every design begins with intention.",
      },
      { name: "author", content: "A Hug Design" },
      { property: "og:title", content: "A Hug Design · Designs That Feel Like a Hug" },
      {
        property: "og:description",
        content: "Tote bags, apparel and personalized gifts designed to celebrate the moments that matter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "A Hug Design · Designs That Feel Like a Hug" },
      { name: "description", content: "Project Pal is a web application that showcases visual content and designs." },
      { property: "og:description", content: "Project Pal is a web application that showcases visual content and designs." },
      { name: "twitter:description", content: "Project Pal is a web application that showcases visual content and designs." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17956a51-84b5-403e-94ad-1e2cc829b8b0/id-preview-f79d7071--f07f9de6-6052-4f66-a9ac-24699458608c.lovable.app-1777940398705.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17956a51-84b5-403e-94ad-1e2cc829b8b0/id-preview-f79d7071--f07f9de6-6052-4f66-a9ac-24699458608c.lovable.app-1777940398705.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Dancing+Script:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
