export function renderCard({ image, title, role, desc, tech, live, gitHub }) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <div>${image}</div>
    <div class="card-content">
      <div class="top-line">
        <h5>${title}</h5>
        <p class="proj-role">${role}</p>  
      </div>
        <p class="proj-desc">${desc}</P>
        <p class="proj-tech">${tech}</p>
    </div>
    <div class="proj-links">
      <a href="${live}">Website</a>
      <a href="${gitHub}">GitHub Repo</a>
    </div>
    `;

  return card;
}
