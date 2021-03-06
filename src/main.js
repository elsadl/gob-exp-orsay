import App from "./App.svelte";
import Landing from "./components/Landing.svelte";
import Game from "./components/Game.svelte";
import Map from "./components/Map.svelte";
import Passport from "./components/Passport.svelte";

const app = new App({
  target: document.body,
  props: {
    options: [
      // DÉV !! échanger true/false 
      { selected: true, name: "Landing", component: Landing },
      { selected: false, name: "Game", component: Game },
    ],
  },
});

export default app;
