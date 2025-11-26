const techList = document.getElementById("tech-list");

export function skillTemplate({ icon, name }) {
  const item = document.createElement("li");
  item.classList.add("tech-skill");

  item.innerHTML = `
    <img style="width: 40px; height: auto" src="${icon}" />${name}
  `;

  return item;
}

export const techSkills = [
  {
    icon: "./assets/icons/html.png",
    name: "HTML",
  },
  {
    icon: "./assets/icons/css.png",
    name: "CSS",
  },
  {
    icon: "./assets/icons/js.png",
    name: "JavaScript",
  },
];

export function renderTechSkills() {
  return techSkills
    .map((skill) => skillTemplate(skill))
    .forEach((item) => techList.appendChild(item));
}
