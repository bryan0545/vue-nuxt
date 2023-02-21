<template>
  <footer>esto es un footer {{ currentYear }}</footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>
