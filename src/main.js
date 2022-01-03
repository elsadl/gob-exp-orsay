import App from './App.svelte';
import Landing from './components/Landing.svelte';
import Game from './components/Game.svelte'
import Map from './components/Map.svelte'
import Passport from './components/Passport.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'world',
        options: [
            { selected: true, name: 'Landing', component: Landing },
            { selected: false, name: 'Game', component: Game },
        ],
        navBtn: [
            { 
                selected: false, 
                name: 'Passport', 
                component: Passport,
            },
            { 
                selected: false, 
                name: 'Map', 
                component: Map,
            },
        ]
	}
});

export default app;