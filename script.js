// Smoothly highlight the current section in the table of contents.
const sections = [...document.querySelectorAll(".policy section[id]")];
const links = [...document.querySelectorAll(".toc a")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    });
  }, { rootMargin: "-18% 0px -72% 0px" });
  sections.forEach(section => observer.observe(section));
}
