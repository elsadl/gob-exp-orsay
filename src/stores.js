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

export const miniGameIndex = writable(1);
