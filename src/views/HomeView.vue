<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AppHero from '../components/AppHero.vue'
import AppAbout from '../components/AppAbout.vue'
import AppPrograms from '../components/AppPrograms.vue'
import AppEvents from '../components/AppEvents.vue'
import AppOurFeatures from '../components/AppOurFeatures.vue'
import AppTestimonials from '../components/AppTestimonials.vue'
import AppNews from '../components/AppNews.vue'
import AppGallery from '../components/AppGallery.vue'
import AppContact from '../components/AppContact.vue'
import AppMap from '../components/AppMap.vue'
import AppFooter from '../components/AppFooter.vue'   
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
    
    <AppHeader />
    
    <main>

      <AppHero />
      <AppAbout />
      <AppPrograms />
      <AppOurFeatures />
      <AppEvents />
      <AppTestimonials />
      <AppNews />
      <AppGallery />  
      <AppContact />                     
      <AppMap />

    </main>
    
    <AppFooter />
  </div>
</template>