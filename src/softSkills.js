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
    icon: "./assets/icons/comms.png",
    name: "Effective Communication",
  },
  {
    icon: "./assets/icons/agile.png",
    name: "Agile Project Management",
  },
  {
    icon: "./assets/icons/data.png",
    name: "Data Analysis",
  },
  {
    icon: "./assets/icons/report.png",
    name: "Reporting",
  },
  {
    icon: "./assets/icons/detail.png",
    name: "Attention to Detail",
  },
  {
    icon: "./assets/icons/problem.png",
    name: "Problem Solving",
  },
  {
    icon: "./assets/icons/learn.png",
    name: "Continuous Learning",
  },
];

export function renderSoftSkills() {
  return softSkills
    .map((skill) => skillTemplate(skill))
    .forEach((item) => softList.appendChild(item));
}
