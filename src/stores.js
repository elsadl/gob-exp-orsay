import { writable } from "svelte/store";

import DeskMiniGame from "./components/mini-games/desk/MiniGame.svelte";
import LampMiniGame from "./components/mini-games/lamp/MiniGame.svelte";

export const miniGames = writable([
  {
    name: "desk",
    success: false,
    stamp: "",
    component: DeskMiniGame,
  },
  {
    name: "lamp",
    success: false,
    stamp: "",
    component: LampMiniGame,
  }
]);

export const miniGameIndex = writable(0);
