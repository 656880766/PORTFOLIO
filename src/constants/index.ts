// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  aws,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  clinkast,
  cecos,
  seed,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  azure,
  gcp,
  ansible,
  jenkins,
  kube,
  spring,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "Qui je suis?",
    link: null,
  },
  {
    id: "work",
    title: "Mes experiences ",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/656880766",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Developpeur Web Java",
    icon: web,
  },
  {
    title: "Ingenieur DevOps",
    icon: mobile,
  },
  {
    title: "Architecte Cloud",
    icon: backend,
  },
  {
    title: "Consultant Data et IA",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "azure",
    icon: azure,
  },

  {
    name: "gcp",
    icon: gcp,
  },

    {
    name: "jenkins",
    icon: jenkins,
  },


  // {
  //   name: "ansible",
  //   icon: ansible,
  // },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "kube",
    icon: kube,
  },
  {
    name: "spring",
    icon: spring,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Stage- Développeur springboot - microservices",
    company_name: "ClinKast",
    icon: clinkast,
    iconBg: "#383E56",
    date: "Fevrier 2023 - Août 2023",
    points: [
      "Contexte: Développement et mise en place d'un outils de prédiction du comportement des consommateurs de produits exotique",
      "Méthode de travail Agile : SCRUM ( Daily meeting, Sprint Planning, Démo, Retro, La suite de Fibonacci)",
      "Conception et développement des microservice",
      "Implémentation par TDD ( Test-driven Development) Springboot( Junit, Mockito, Jococo)",
      "Analyse des bugs et incidents remonté par les L2 et les BA.",
      "DevOps: Mise en place des pipelines CI/CD en utilisant Jenkins , Sonarqube, Nexus, Docker, AWS ECS(Elastic Container Service)."
    ],
  },
  {
    title: "Stage -  Développeur Springboot",
    company_name: "Cecos Informatique",
    icon: cecos,
    iconBg: "#E6DEDD",
    date: "Mai 2022 - Août 2022",
    points: [
      "Contexte: Développement d'une application de gestion de dettes pour une microfinance",
      "Conception et développement d'interfaces utilisateur intuitives avec Figma",
      "Modélisation de l'architecture fonctionnelle avec UML (StarUML)",
      "Implémentation du backend avec Spring Boot et intégration des différentes pages web avec thymeleaf",
      "Tests Unitaires",
      "déploiement sur les environnements de recettes et de production"
    ],
  },
  {
    title: "Stage - Développeur backend - API",
    company_name: "Seed",
    icon: seed,
    iconBg: "#383E56",
    date: "Mai 2021 - Juin 2021",
    points: [
      "Contexte: Développement et exposition d'une api de gestion de réservation des stands",
      "Modélisation de l'architecture fonctionnelle avec UML (StarUML)",
      "Conception et Implémentation de la base de données (MySql)",
      "Implémentation de l'api avec Laravel",
      "Test avec Postman",
      "Intégration du frontend coté Angular",
      "Déploiement sur le cloud avec AWS beanstalk"
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial: user1,
    name: "Lien du Badge ",
    designation: "https://www.credly.com/badges/7b54f03f-e190-4bd9-87c5-f8b10b4c1592/public_url/",
    company: "Acme Co",
    image: user1,
  },

  {
    testimonial: user2,
    name: "Lien du Badge ",
    designation: "https://www.credly.com/badges/fc9c73f8-3d9a-4352-b04d-a4ed56bcdab7/public_url",
    company: "Acme Co",
    image: user1,
  }
 
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Bank Microservices",
    description:
      "Application pour la gestion des differents departements d'une banque pour une meilleurs gestion et organisation des opérations bancaires",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Cloud",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/656880766/eazybank-config.git",
    //live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "AWS CIDI",
    description:
      "Mise en place d'une chaine complete d'intergration et de deploiement continu avec les services proposé par le cloud provider d'Amazon",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "JENKINS",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "git@github.com:656880766/AWS-CIDI.git",
    //live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Marvel Quizz",
    description:
      "Application personnelle de quizz sur le monde des marvels pour s'amuser entre geek et de partager des connaissances dans la communauté",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://marvel-quiz-hosted-3bf07.firebaseapp.com",
    live_site_link: "https://marvel-quiz-hosted-3bf07.firebaseapp.com",
  },
  {
    name: "Your Booking",
    description:
      "Application de gestion de reservation des emplacements d'une localité pour palier pour rendre visible ceux qui ne sont pas sur les sites connus",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "POSTMAN",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Gestion des dettes",
    description:
      "L'application a permis à une filiale du ministere des finances de migrer son application de bureau en une application Web",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/656880766/gestiondettes",
   // live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Architectures Cloud",
    description:
      "Liste de tout mes projets sur l'architecture cloud en passant par du cloud privée jusqu'à des cloud public comme Amazon Web Services et AZURE",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "AZURE",
        color: "green-text-gradient",
      },
      {
        name: "VMWARE",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://drive.google.com/drive/folders/1RBGRgJL_Bo11FJlvgfCemgJJgdj-KnZJ?usp=sharing",
    //live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "www.linkedin.com/in/yves-tchale",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TchaleYves",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/656880766",
  },
] as const;
