import player from "./assets/images/playerCards.png";
import beer from "./assets/images/beer-cards.png";
import ticket from "./assets/images/ticket-tracker.png";

export const projectsArray = [
  {
    id: "1",
    image: player,
    language: "JAVA, SPRING BOOT",
    title: "Full-stack project",
    description:
      "I built a full-stack app using React, Java, Spring Boot & MySQL. I decided on a Southampton-FC fan page for my youngest brother, their biggest fan.",
    code: "https://github.com/awo-ali/full-stack-project",
    preview:"https://awo-ali.github.io/full-stack-project/"
  },
  {
    id: "2",
    image: beer,
    language: "REACT",
    title: "Punk API",
    description:
      "An app built using Brewdogs Punk API. A catalogue of beers is generated that can then be filtered and searched through.",
    code: "https://github.com/awo-ali/beer-cards-challenge",
    preview:"https://awo-ali.github.io/beer-cards-challenge/"
  },
  {
    id: "3",
    image: ticket,
    language: "REACT",
    title: "Ticket Tracker",
    description:
      "Ticket tracker app, built in react, with an add an employee function.",
    code: "https://github.com/awo-ali/ticket-tracker-challenge",
    preview:"https://awo-ali.github.io/ticket-tracker-challenge/"
  },
];

export default projectsArray;
