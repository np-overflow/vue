<script setup lang="ts">
const state = ref("")
</script>

<template>
  <div>
    index
    {{ state }}
    <input v-model="state" />
    <NuxtLink to="/second">second</NuxtLink>
  </div>
</template>
