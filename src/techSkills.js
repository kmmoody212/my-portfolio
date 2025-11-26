const techList = document.getElementById("tech-list");

function skillTemplate({ icon, name }) {
  const item = document.createElement("li");
  item.classList.add("tech-skill");
  item.style.listStyle = "none";

  item.innerHTML = `
    <img style="width: 40px; height: auto;" src="${icon}" />${name}
  `;

  return item;
}

const techSkills = [
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
  {
    icon: "./assets/icons/typescript.png",
    name: "TypeScript",
  },
  {
    icon: "./assets/icons/nodejs.png",
    name: "Node.js",
  },
  {
    icon: "./assets/icons/react.png",
    name: "React",
  },
  {
    icon: "./assets/icons/api.png",
    name: "REST API's",
  },
  {
    icon: "./assets/icons/git.png",
    name: "Git",
  },
  {
    icon: "./assets/icons/github.png",
    name: "GitHub",
  },
  {
    icon: "./assets/icons/scalable.png",
    name: "Scalable Code",
  },
];

export function renderTechSkills() {
  return techSkills
    .map((skill) => skillTemplate(skill))
    .forEach((item) => techList.appendChild(item));
}
