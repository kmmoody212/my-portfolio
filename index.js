import { projects } from "./src/projects.js";
import { renderCard } from "./src/cardFactory.js";

const wrapper = document.getElementById("swiper-wrapper");

// projects.forEach((project) => wrapper.appendChild(renderCard(project)));

document.addEventListener("DOMContentLoaded", () => {
  return projects
    .map((project) => renderCard(project))
    .forEach((card) => wrapper.appendChild(card));
});
