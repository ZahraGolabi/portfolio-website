const projectsData = [
  {
    id: 1,
    name: "Snap Market",
    image: "assets/img/cover.png",
    description:
      "An online store similar to Snap Market built with pure HTML, CSS, and JavaScript. Users can search, filter products, and add them to their shopping cart.",
    features: [
      "Search and filter products",
      "Shopping cart management (add/remove/update)",
      "Auto price calculation",
      "LocalStorage data persistence",
      "Fully responsive design",
    ],
    challenges:
      "Implementing a shopping cart system with pure JavaScript and managing different states (add, remove, update quantity) without using a framework required careful data structure design and efficient DOM management.",
    tags: ["HTML", "CSS", "JavaScript", "RestAPI"],
    demoLink: "https://supermarket-backend-sigma.vercel.app/",
    codeLink: "https://github.com/ZahraGolabi/supermarket-backend",
    isUnderDevelopment: false,
  },
  {
    id: 2,
    name: "DijiPay",
    image: "assets/img/dijipay.png",
    description:
      "A digital payment platform similar to DigiPay, currently under development with modern web technologies. The project aims to provide a seamless and secure payment experience for users.",
    features: [
      "Secure payment gateway",
      "User authentication system",
      "Transaction history tracking",
      "Digital wallet management",
      "Fully responsive design",
    ],
    challenges:
      "Building a secure payment system with modern web technologies while ensuring data protection, user privacy, and a smooth seamless user experience.",
    tags: ["HTML", "CSS", "Tailwind", " In Development"],
    demoLink: null,
    codeLink: null,
    isUnderDevelopment: true,
  },
];

const projectModal = document.querySelector(".project-modal");

const getAndShowProjects = () => {
  const projectsWrapper = document.querySelector(".projects-wrapper");
  projectsData.forEach((project) => {
    projectsWrapper.insertAdjacentHTML(
      "beforeend",
      `
     <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div class="project-card">
            <div class="project-image" data-id="${project.id}">
              <img
                src="${project.image}"
                alt="Snap Market Project"
              
            </div>
            <div class="project-info">
              <h2 class="project-name">${project.name}</h2>
              <p class="project-description">
                ${project.description}
              </p>
            </div>
            <div class="project-tags">
             ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
             <div class="project-links">
              <a
                href="${project.demoLink}"
                class="link-demo ${project.demoLink==null ? "btn-disabled" :""}"
              >
                <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          ></path>
                </svg>
                Live Demo
              </a>
              <a
                href="${project.codeLink}"
                class="link-code ${project.codeLink==null ? "btn-disabled" :""}"
              >
                 <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                >
                  <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Code
              </a>
            </div>
           </div>
      </div>
    `,
    );
  });
};

const initProjectCards = () => {
  const projectImage = document.querySelectorAll(".project-image");
  projectImage.forEach((card) => {
    card.addEventListener("click", (e) => {
      const id = +e.currentTarget.dataset.id;
      projectModal.classList.add("hidden");
      showDetailsProjects(id);
    });
  });
};

const showDetailsProjects = (cardId) => {
  const card= projectsData.find((project) => project.id == cardId);
   projectModal.innerHTML = '';
  projectModal.insertAdjacentHTML("beforeend", 
    `<div class="project-modal-inner">
      <div class="project-modal-image">
        <img src="${card.image}" alt="" />
      </div>

      <div class="project-modal-info">
        <h2 class="project-modal-title">${card.name}</h2>
        <p class="project-modal-desc">
          ${card.description}
        </p>
      </div>

      <div class="project-modal-features">
        <h3 class="project-modal-label">FEATURES</h3>
        <ul class="project-modal-list">
        ${card.features.map(feature=>`<li>${feature}</li>`).join('')}
        </ul>
      </div>

      <div class="project-modal-challenges">
        <h3 class="project-modal-label">Challenges</h3>
        <p class="project-modal-text">
         ${card.challenges}
        </p>
      </div>

      <div class="project-modal-actions">
        <div class="project-modal-buttons">
          <a href="${card.demoLink}" class="btn-demo ${card.demoLink==null ? "btn-disabled" :""}">
            Live Demo
          </a>
          <a href="${card.codeLink}" class="btn-github ${card.codeLink==null ? "btn-disabled" :""}">
            GitHub
          </a>
        </div>
        <div class="project-modal-close">
          <button class="btn-close" onclick="hideModalHandler()">close</button>
        </div>
      </div>
    </div>;`
  );
};

const hideModalHandler=()=>{
 projectModal.classList.remove("hidden");

}


window.addEventListener("load", () => {
  getAndShowProjects();
  initProjectCards();
});
