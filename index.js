import { projects } from "./src/projects.js";
import { renderCard } from "./src/cardFactory.js";
import { renderTechSkills } from "./src/techSkills.js";
import { renderSoftSkills } from "./src/softSkills.js";

const wrapper = document.getElementById("swiper-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  projects
    .map((project) => renderCard(project))
    .forEach((card) => wrapper.appendChild(card));

  renderTechSkills();
  renderSoftSkills();
});

// document.addEventListener("DOMContentLoaded", () => {
//   return techs;
// });
