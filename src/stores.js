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
      text: "Pour te récompenser, je t’offre ce timbre inspiré du courant Art Nouveau.",
      emotion: "satisfied",
      hand: "",
    },
    component: DeskMiniGame,
  },
  {
    id: 2,
    name: "lamp",
    success: false,
    sentence: {
      text: "Tiens, prends ce timbre en échange !",
      emotion: "smile",
      hand: null,
    },
    component: LampMiniGame,
  },
]);

export const explications = writable([
  {
    id: "1",
    title: "Le bureau d'Henry Van de Velde",
    paragraph:
      "Texte explicatif sur l'œuvre. Il permet à l’utilisateur de re-découvrir l'œuvre en apprenant son histoire.",
  },
  {
    id: "2",
    title: "La lampe nénuphar de Louis Majorelle",
    paragraph:
      "Texte explicatif sur l'œuvre. Il permet à l’utilisateur de re-découvrir l'œuvre en apprenant son histoire.",
  },
  {
    id: "4",
    title: "Titre de l'oeuvre 3",
    paragraph:
      "Texte explicatif sur l'œuvre. Il permet à l’utilisateur de re-découvrir l'œuvre en apprenant son histoire.",
  },
  {
    id: "4",
    title: "Titre de l'oeuvre 4",
    paragraph:
      "Texte explicatif sur l'œuvre. Il permet à l’utilisateur de re-découvrir l'œuvre en apprenant son histoire.",
  },
]);

export const miniGameIndex = writable(0);

export const passportOpen = writable(false);