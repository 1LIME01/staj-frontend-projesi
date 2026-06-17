<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
  <AppHeader />

    <main>
      <slot />
    </main>
  </div>
</template>