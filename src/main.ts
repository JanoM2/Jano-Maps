import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiamFub20iLCJhIjoiY2xodW56dXd2MDFlNTNkbzQ2bXFsYXBxNyJ9.aut1O10dmt7pfDFRL1LHOA';


if (!navigator.geolocation) {
    alert("Tu navegador no soporta el GeoLocation")
    throw new Error("Tu navegador no soporta el GeoLocation")
}

createApp(App).use(store).use(router).mount('#app')
