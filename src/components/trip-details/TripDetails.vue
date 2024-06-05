<template>
    <div v-if="distance" class="trip-container column">
        <div class="col"> Distancia: <strong>{{ distance }}</strong></div>
        <div class="col"> Duracion: <strong>{{ duration }}</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'TripDetails',
    setup() {
        const { distance, duration } = useMapStore()
        return {
            distance, duration
        }
    }
})

</script>

<style scoped>
.trip-container {
    left: 20px;
    width: 350px;
    padding: 10px;
    bottom: 50px;
    position: fixed;
    font-size: 25px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

strong {
    color: #42b983
}
</style>