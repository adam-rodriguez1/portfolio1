const PROJECTS: {
  name: string;
  description: string;
  previewImage: string;
  repoUrl: string;
  liveLink: string;
  category: "Travail" | "Fun";
}[] = [
  {
    name: "KASA",
    description: "Le front-end d'un booking-like développé avec React.",
    liveLink: "https://google.com",
    previewImage: "/capture5.png",
    repoUrl: "https://github.com/adam-rodriguez1/KASA",
    category: "Travail",
  },
  {
    name: "Mon vieux grimoire",
    description: "Back-end d'un site de notation de livres réalisé avec Node.js, Express et MongoDB.",
    liveLink: "https://google.com",
    previewImage: "/capture6.png",
    repoUrl: "https://github.com/adam-rodriguez1/back.git",
    category: "Travail",
  },
  {
    name: "J-plage",
    description:
      "Petit site conçu pour m'entraîner à utiliser une API, mais qui peut se révéler motivant pour nos lignes.",
    liveLink: "https://adam-rodriguez1.github.io/j-plage/",
    previewImage: "/capture3.png",
    repoUrl: "https://github.com/adam-rodriguez1/j-plage",
    category: "Fun",
  },
  {
    name: "mo-mo-mo",
    description: "Un Wordle-like proposant des modes de jeu inédits.",
    liveLink: "https://glistening-motley-bicycle.glitch.me/",
    previewImage: "/capture4.png",
    repoUrl: "https://github.com/adam-rodriguez1/jeuxdemots",
    category: "Fun",
  },
];

export default PROJECTS;
