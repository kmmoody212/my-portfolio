export function renderCard({ image, title, role, desc, tech, live, gitHub }) {
  const card = document.createElement("div");
  card.classList.add("swiper-slide");

  card.innerHTML = `
    <div class="proj-image">${image}</div>
    <div class="card-content">
      <div class="top-line">
        <h4>${title}</h4>
        <p class="proj-role">${role}</p>  
      </div>
        <h5 class="desc-title">Description:</h5>
        <p class="proj-desc">${desc}</P>
        <h5 class="tech-title">Technology Used:</h5>
        <p class="proj-tech">${tech}</p>
    </div>
    <div class="proj-links">
      <a href="${live}" target="_blank" rel="noopener noreferrer">
        <img src="./assets/icons/scalable.png" style="width: 40px; height: auto;"/><span>Deployed Site</span>
      </a>
      <a href="${gitHub}" target="_blank" rel="noopener noreferrer">
        <img src="./assets/icons/github.png" style="width: 40px; height: auto;"/><span>GitHub Repo</span>
      </a>
    </div>
    `;

  return card;
}
