import Mapboxgl from "mapbox-gl"
import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: "MapView",
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore()

        const initMap = async () => {
            // if (!mapElement.value) throw new Error("Div Element no existe");
            if (!userLocation.value) throw new Error("user location no existe");

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`<h4>Aquí estoy</h4>
                <p>Actualmente en Alajuela</p>
                <p>${userLocation.value}</p>
            `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup).addTo(map);

            setMap(map);
        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap();
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap();
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
})

