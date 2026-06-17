<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const getImageUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect()}
  },
   { threshold: 0.2 })
  if (sectionRef.value) observer.observe(sectionRef.value)})

const programs = [
  { img: 'programs1.jpg', title: 'Arts Programs', author: 'Charles Banks' },
  { img: 'programs2.jpg', title: 'Foreign Language Programs', author: 'Maria Howard' },
  { img: 'programs3.jpg', title: 'Sports Programs', author: 'Steven Carter' }]
</script>

<template>
  <section ref="sectionRef" class="bg-[#3eb2cf] py-20 px-6" :class="{ 'is-animated': isVisible }">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="anim-up text-4xl lg:text-5xl font-bold text-white mb-4">Our Programs</h2>
      <p class="anim-up delay-1 text-white opacity-90 mb-16 max-w-2xl mx-auto">
        Our Featured Programs are selected through a rigorous process and uniquely created for each semester.
      </p>

     <div class="flex flex-wrap justify-center gap-8 mb-16 max-w-6xl mx-auto">
  
  <div v-for="(p, index) in programs" :key="index" 
       :class="`card-anim card-${index + 1}`" 
       class="bg-white overflow-hidden shadow-xl text-center w-full max-w-[350px] flex-shrink-0">
    
    <img :src="getImageUrl(p.img)" class="w-full aspect-[4/3] object-cover" />
    
    <div class="p-6">
      <p class="text-[#808080] text-xs mb-1">June 3, 2022</p>
      <h3 class="text-[#fec20b] text-xl font-bold mb-1">{{ p.title }}</h3>
      <p class="text-black font-bold text-sm mb-4">{{ p.author }}</p>
      <div class="flex justify-center space-x-4 text-[#3eb2cf]">
        <span>⏳</span> <span>★</span> <span>💻</span>
      </div>
    </div>
  </div>
</div>

      <a href="#" class="btn-anim inline-block bg-white text-[#fec20b] font-bold px-10 py-4 rounded-full border-2 border-white hover:bg-[#fec20b] hover:text-white transition-all duration-500">
        View All Programs
      </a>
    </div>
  </section>
</template>

<style scoped>
.anim-up, .card-anim, .btn-anim { opacity: 0; transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
.is-animated .anim-up, .is-animated .card-anim, .is-animated .btn-anim { opacity: 1; transform: translate(0, 0); }

.anim-up { transform: translateY(50px); }
.card-1 { transform: translateX(100px); }
.card-2 { transform: translateY(100px); }
.card-3 { transform: translateX(-100px); }
.btn-anim { transform: translateY(50px); }

.is-animated .delay-1 { transition-delay: 700ms; }
.is-animated .card-1 { transition-delay: 1000ms; }
.is-animated .card-2 { transition-delay: 1300ms; }
.is-animated .card-3 { transition-delay: 1700ms; }
.is-animated .btn-anim { transition-delay: 30ms; }
</style>