import { projects } from "./src/projects.js";
import { renderCard } from "./src/cardFactory.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  return projects
    .map((project) => renderCard(project))
    .forEach((card) => container.appendChild(card));
});
