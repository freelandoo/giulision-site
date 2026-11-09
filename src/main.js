import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/wght-italic.css";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  createIcons,
} from "lucide";
import "./styles.css";

const CONTACT_WHATSAPP = "5511949831704";
const WHATSAPP_MESSAGE =
  "Olá, Giulesson! Quero conversar sobre decoração e iluminação para o meu evento.";

const iconSet = {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
};

const hydrateIcons = () => createIcons({ icons: iconSet, attrs: { "stroke-width": 1.8 } });

hydrateIcons();

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

const setMenuState = (open) => {
  nav?.classList.toggle("is-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
  if (navToggle) {
    navToggle.innerHTML = open
      ? '<i data-lucide="x" aria-hidden="true"></i><span class="sr-only">Fechar menu</span>'
      : '<i data-lucide="menu" aria-hidden="true"></i><span class="sr-only">Abrir menu</span>';
    hydrateIcons();
  }
};

navToggle?.addEventListener("click", () => {
  setMenuState(navToggle.getAttribute("aria-expanded") !== "true");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuState(false);
});

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const openContact = () => {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, "_blank", "noopener,noreferrer");
};

document.querySelectorAll("[data-contact-action]").forEach((button) => {
  button.addEventListener("click", openContact);
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear().toString();

