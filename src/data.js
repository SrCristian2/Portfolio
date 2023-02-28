import imgNote from "./assets/notesApp.jpg";
import imgYt from "./assets/ytApp.png";
import imgCovid from "./assets/covidApp.png";
import imgCoin from "./assets/coinApp.png";
import imgPost from "./assets/postApp.png";

export const projects = [
  {
    id: 1,
    title: "save your notes",
    description:
      "this application is made to save notes, it is made with react js and redux toolkit using a special REST API for notes.",
    img: imgNote,
    frontLink: "https://notesasppv2.netlify.app/",
    repositoryLink: "https://github.com/SrCristian2/front-redux.git",
  },
  {
    id: 2,
    title: "youtube",
    description:
      "this app is a copy of Youtube made with react js and redux toolkit with a special REST API to store videos.",
    img: imgYt,
    frontLink: "https://yt-redux.netlify.app",
    repositoryLink: "https://github.com/SrCristian2/front-yt.git",
  },
  {
    id: 3,
    title: "covidApp",
    description:
      "this app is made to know the number of cases globally and nationally is made with react js using the api of Covid19api.com",
    img: imgCovid,
    frontLink: "https://covidappv2.netlify.app/",
    repositoryLink: "https://github.com/SrCristian2/covidApp.git",
  },
  {
    id: 4,
    title: "coinApp",
    description:
      "this app is made to know the price of cryptocurrencies using react js and Coingekco API.",
    img: imgCoin,
    frontLink: "https://coinsappv2.netlify.app",
    repositoryLink: "https://github.com/SrCristian2/Coins.git",
  },
  {
    id: 5,
    title: "postApp",
    description:
      "this app is made to save posts made with react js and redux toolkit using a special REST API for posts.",
    img: imgPost,
    frontLink: "https://postappv2.netlify.app/",
    repositoryLink: "https://github.com/SrCristian2/front-full-stack-redux.git",
  },
];
