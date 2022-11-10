<script setup lang="ts">
</script>

<template>
  <div bg="blue-100" border="1 blue-300" p="3" rounded="lg">
    <div flex items="center" font="bold" mb="4">
      <fluent-emoji-check-mark-button mr="1" class="text-lg" />
      Tasks
    </div>
    <slot />
  </div>
</template>
