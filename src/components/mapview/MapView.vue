<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div v-else class="map-container" ref="mapElement"></div>
</template>

<script lang="ts" src="./MapView" />

<style scoped>
.map-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
}

.loading-map {
  top: 0px;
  left: 0px;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  color: white;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
