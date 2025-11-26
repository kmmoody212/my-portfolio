const softList = document.getElementById("soft-list");

function skillTemplate({ icon, name }) {
  const item = document.createElement("li");
  item.classList.add("soft-skill");
  item.style.listStyle = "none";

  item.innerHTML = `
    <img style="width: 40px; height: auto;" src="${icon}" />${name}
  `;

  return item;
}

const softSkills = [
  {
    icon: "#",
    name: "Effective Communication",
  },
];

export function renderSoftSkills() {
  return softSkills
    .map((skill) => skillTemplate(skill))
    .forEach((item) => softList.appendChild(item));
}
