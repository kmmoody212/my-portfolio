const section = document.getElementById("work");


function makeCard(title, pic, deployed, repo, skills, summary) {
    const card = document.createElement("div");
    const project = document.createElement("h3");
    const topDiv = document.createElement("div");
    const screenshot = document.createElement("img");
    const skillsUsed = document.createElement("div");
    const desc = document.createElement("p");
    const directLink = document.createElement("a");
    const githubLink = document.createElement("a");

    section.appendChild(card);
    card.classList.add("card");

    card.appendChild(project);
    project.classList.add("project-name");
    project.textContent = title;

    card.appendChild(topDiv);
    topDiv.classList.add("top-div");

    topDiv.appendChild(screenshot);
    screenshot.classList.add("example-img");
    screenshot.src = pic;

    topDiv.appendChild(directLink);
    directLink.classList.add("website");
    directLink.href = deployed;

    topDiv.appendChild(githubLink);
    githubLink.classList.add("github-repo");
    githubLink.href = repo;

    card.appendChild(skillsUsed);
    skillsUsed.classList.add("skills-used");
    skillsUsed.textContent = skills;

    card.appendChild(desc);
    desc.classList.add("desc");
    desc.textContent = summary;

    return card;
}