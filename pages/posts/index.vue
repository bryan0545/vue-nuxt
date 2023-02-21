import { NuxtLink } from '../.nuxt/components';
<template>
  <Head>
    <Title>Posts</Title>
  </Head>
  <h1>Posts</h1>
  <ul>
    <li><NuxtLink to="/posts/1">Primer post</NuxtLink></li>
    <li><NuxtLink to="/posts/2">Segundo post</NuxtLink></li>
    <li><NuxtLink to="/posts/3">Tercer post</NuxtLink></li>
  </ul>
</template>
