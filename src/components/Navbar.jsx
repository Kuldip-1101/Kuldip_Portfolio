import { useState } from "react";
import { NAV_ITEMS } from "../constants/navigation";

function DownloadIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Clicking any nav item updates the active glow and closes the mobile menu.
  const handleNavClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const navLinkClass = (item) =>
    activeItem === item
      ? "relative inline-flex h-full items-center px-3 text-sm font-semibold text-white drop-shadow-[0_0_8px_rgba(147,51,234,0.7)] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-fuchsia-500 after:via-violet-500 after:to-blue-500"
      : "relative inline-flex h-full items-center px-3 text-sm font-semibold text-white/80 transition hover:text-white";

  const mobileLinkClass = (item) =>
    activeItem === item
      ? "rounded-lg bg-violet-500/20 px-3 py-3 text-sm font-semibold text-white"
      : "rounded-lg px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-violet-500/15 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto grid min-h-14 max-w-7xl grid-cols-[minmax(190px,1fr)_auto_minmax(190px,1fr)] items-center px-4 py-2 max-[860px]:grid-cols-[1fr_auto] max-[860px]:px-3">
        {/* Brand link returns users to the top/home section. */}
        <a
          className="inline-flex w-fit items-center gap-3 text-inherit no-underline"
          href="#home"
          aria-label="Kuldip Patel home"
          onClick={() => handleNavClick("Home")}
        >
          <span
            className="relative grid size-10 place-items-center overflow-hidden rounded-lg border border-violet-500/70 bg-slate-900 shadow-[0_0_18px_rgba(124,58,237,0.35)] before:absolute before:h-7 before:w-0.5 before:rotate-[20deg] before:rounded-full before:bg-white max-[520px]:size-9"
            aria-hidden="true"
          >
            <span className="relative text-lg font-bold leading-none text-white">
              KP
            </span>
          </span>
          <span className="grid gap-0.5 text-left">
            <strong className="text-base font-bold leading-tight text-white max-[520px]:text-[15px]">
              Kuldip Patel
            </strong>
            <small className="text-[11px] font-medium leading-tight text-slate-300">
              Full Stack Developer
            </small>
          </span>
        </a>

        {/* Desktop navigation matches the screenshot layout and shows the active underline. */}
        <nav
          className="flex items-stretch justify-center gap-4 max-[860px]:hidden"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              className={navLinkClass(item)}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2.5">
          {/* This downloads the placeholder CV file from /public until the real CV is added. */}
          <a
            className="inline-flex min-h-10 min-w-32 items-center justify-center gap-2 rounded-lg border border-violet-500 bg-slate-900 px-4 text-xs font-extrabold text-white shadow-[0_0_18px_rgba(124,58,237,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(147,51,234,0.5)] max-[860px]:hidden"
            href={`${import.meta.env.BASE_URL}KuldipPatel_Resume.pdf`}
            download
          >
            <span>Download CV</span>
            <DownloadIcon />
          </a>

          {/* Mobile-only menu button controls the dropdown navigation. */}
          <button
            className="hidden h-10 w-10 rounded-lg border border-violet-500/60 bg-slate-900 max-[860px]:block"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="mx-auto my-1 block h-0.5 w-4 rounded-full bg-white"></span>
            <span className="mx-auto my-1 block h-0.5 w-4 rounded-full bg-white"></span>
            <span className="mx-auto my-1 block h-0.5 w-4 rounded-full bg-white"></span>
          </button>
        </div>

        {/* Mobile panel uses the same NAV_ITEMS array so future label changes happen once. */}
        <div
          className={
            menuOpen
              ? "absolute left-3 right-3 top-[calc(100%+10px)] grid gap-1 rounded-xl border border-slate-700 bg-slate-950/95 p-2 shadow-2xl min-[861px]:hidden"
              : "hidden"
          }
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              className={mobileLinkClass(item)}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
          <a
            className="mt-1 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-violet-500 bg-slate-900 px-4 text-xs font-extrabold text-white shadow-[0_0_18px_rgba(124,58,237,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(147,51,234,0.5)]"
            href={`${import.meta.env.BASE_URL}KuldipPatel_Resume.pdf`}
            download
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
