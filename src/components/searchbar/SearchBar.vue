<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input type="text" class="form-control" v-model="searchTerm" placeholder="Buscar lugares.." />

    <SearchResults />
  </div>
</template>


<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  padding: 5px;
  width: 300px;
  z-index: 999;
  /* overflow: hidden; */
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
