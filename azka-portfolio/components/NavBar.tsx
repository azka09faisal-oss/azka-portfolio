import { Fragment } from "react";
import { Star } from "./ui";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 bg-cream">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[clamp(4rem,7.8vw,8.4rem)] items-center justify-center gap-[clamp(0.75rem,5.7vw,6.2rem)]"
      >
        {links.map((link, i) => (
          <Fragment key={link.href}>
            {i > 0 && <Star className="size-[clamp(0.75rem,1.4vw,1.5rem)] shrink-0" />}
            <a href={link.href} className="underline-offset-8 hover:underline">
              {link.label}
            </a>
          </Fragment>
        ))}
      </nav>
    </header>
  );
}
