<template>
  <Head>
    <Title> post #{{ id }} </Title>
  </Head>
  <h2>Bienvenido al post #{{ id }}</h2>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp();
    console.log("!/^[0-9]+$/.test(route.params.id)", !/^[0-9]+$/.test(route.params.id));
    if (!/^[0-9]+$/.test(route.params.id)) {
      throw createError({ statusCode: "500", statusMessage: "Param required" });
    }
    return true;
  },
});
</script>
