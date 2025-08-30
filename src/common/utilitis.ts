export const AnchorScroll = (): void => {
  // anchor scroll
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e: Event) => {
      e.preventDefault(); // استفاده از e به جای event

      const href = link.getAttribute("href");
      if (!href) return; // null check برای href

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return; // null check برای target

      let offset = 0;

      if (window.innerWidth < 1200) {
        offset = 90;
      }

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
};

export const Accordion = (): void => {
  const acc = document.getElementsByClassName("mil-accordion-menu");

  for (let i = 0; i < acc.length; i++) {
    const element = acc[i] as HTMLElement; // type assertion برای HTMLElement
    element.addEventListener("click", function (event) {
      const el = event.currentTarget as HTMLElement;
      el.classList.toggle("mil-active");
      const panel = el.nextElementSibling as HTMLElement;
      if (panel) {
        // null check برای panel
        if (panel.style.height) {
          panel.style.height = "";
        } else {
          panel.style.height = panel.scrollHeight + "px";
        }
      }
    });
  }
};
