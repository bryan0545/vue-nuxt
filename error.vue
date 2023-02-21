<template>
  <div>
    <h1>Error Encontrado</h1>
    <h3>{{ error.statusCode }} - {{ error.statusMessage }}</h3>
    <button @click="handleErrors">Clean errors</button>
  </div>
</template>

<script setup>
const route = useRoute();

const { error } = defineProps({
  error: Object,
});
const path = route.path === error.url ? "/" : route.path;

const handleErrors = () => {
  clearError({ redirect: path });
};
</script>
