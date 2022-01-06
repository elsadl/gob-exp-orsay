import { writable } from "svelte/store";

import DeskMiniGame from "./components/mini-games/desk/MiniGame.svelte";
import LampMiniGame from "./components/mini-games/lamp/MiniGame.svelte";

export const miniGames = writable([
  // DÉV !! passer success à false pour les deux
  {
    id: 1,
    name: "desk",
    success: false,
    sentence: {
      text: "Ah merci beaucoup ! Sans ce carnet, j'aurais été incapable de terminer mon ouvrage. Pour te récompenser, je t'offre ce timbre inspiré de l'Art Nouveau.",
      emotion: "smile",
      hand: null,
    },
    component: DeskMiniGame,
  },
  {
    id: 2,
    name: "lamp",
    success: false,
    sentence: {
      text: "Quel beau travail ! Je te dois une fière chandelle. Tiens, prends ce timbre en échange !",
      emotion: "smile",
      hand: null,
    },
    component: LampMiniGame,
  },
]);

export const explications = writable([
  {
    id: "1",
    title: "Titre de l'oeuvre 1",
    paragraph: "Texte explicatif sur l’oeuvre 1. Il permet à l’utilisateur de re découvrir l’oeuvre en apprenant son histoire."
  },
  {
    id: "2",
    title: "Titre de l'oeuvre 2",
    paragraph: "Texte explicatif sur l’oeuvre 2. Il permet à l’utilisateur de re découvrir l’oeuvre en apprenant son histoire."
  },
  {
    id: "4",
    title: "Titre de l'oeuvre 3",
    paragraph: "Texte explicatif sur l’oeuvre 3. Il permet à l’utilisateur de re découvrir l’oeuvre en apprenant son histoire."
  },
  {
    id: "4",
    title: "Titre de l'oeuvre 4",
    paragraph: "Texte explicatif sur l’oeuvre 4. Il permet à l’utilisateur de re découvrir l’oeuvre en apprenant son histoire."
  }
])

export const miniGameIndex = writable(0);
