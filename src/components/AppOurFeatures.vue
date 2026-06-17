<template>
  <section 
    ref="featuresSection" 
    class="relative w-full py-20 px-4 min-h-[600px] flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 features-bg opacity-70 z-0"></div>

    <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      
      <div class="flex flex-col text-left">
        <div class="mb-8 left-anim">
          <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span class="text-[#3eb2cf]">Our</span>
            <span class="text-[#fec20b] ml-2">Features</span>
          </h2>
          <p class="text-gray-800 text-[15px] font-medium leading-relaxed max-w-lg bg-white/40 p-2 rounded-lg backdrop-blur-sm">
            At Kids Tree, we see our aim in providing care and an early learning environment which is tailored to each individual child’s needs, in safe, secure, happy and relaxed surroundings. We are committed to your children’s success!
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-6 gap-y-10 mt-2 max-w-md w-full">
          <div class="flex items-center gap-4 left-anim item-1">
            <div class="text-[#3eb2cf] mt-1"><svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM4.26 12.26l7.74 4.22 7.74-4.22L12 16l-7.74-3.74zM12 18l-6-2.91V18l6 3 6-3v-2.91L12 18z"/></svg></div>
            <div class="flex flex-col"><span class="text-4xl font-black text-[#fec20b]">15</span><span class="text-[15px] font-bold text-slate-800 leading-tight">Awards</span></div>
          </div>

          <div class="flex items-center gap-4 left-anim item-2">
            <div class="text-[#3eb2cf] mt-1"><svg class="w-11 h-11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M8 8V5a2 2 0 012-2h4a2 2 0 012 2v3" stroke-linecap="round"></path><path d="M12 12v4" stroke-linecap="round"></path></svg></div>
            <div class="flex flex-col"><span class="text-4xl font-black text-[#fec20b]">30+</span><span class="text-[15px] font-bold text-slate-800 leading-tight mt-1">Certified<br>Teachers</span></div>
          </div>

          <div class="flex items-center gap-4 left-anim item-3">
            <div class="text-[#3eb2cf] mt-1"><svg class="w-11 h-11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v17" stroke-linecap="round"></path><path d="M9 7h2v2H9V7zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" stroke-linecap="round"></path></svg></div>
            <div class="flex flex-col"><span class="text-4xl font-black text-[#fec20b]">10</span><span class="text-[15px] font-bold text-slate-800 leading-tight mt-1">Featured<br>Programs</span></div>
          </div>

          <div class="flex items-center gap-4 left-anim item-4">
            <div class="text-[#3eb2cf] mt-1"><svg class="w-11 h-11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="8" cy="7" r="4"></circle><circle cx="16" cy="7" r="4"></circle><path d="M2 18a4 4 0 014-4h4a4 4 0 014 4v2H2v-2zm12-4h2a4 4 0 014 4v2h-6v-2a4 4 0 010-4z" stroke-linecap="round"></path></svg></div>
            <div class="flex flex-col"><span class="text-4xl font-black text-[#fec20b]">100</span><span class="text-[15px] font-bold text-slate-800 leading-tight mt-1">Children</span></div>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex justify-end items-center w-full">
        <div class="right-anim relative w-full lg:max-w-[1000px] h-[550px] rounded-2xl overflow-hidden border-8 border-white shadow-2xl bg-gray-200">
           </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const featuresSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        featuresSection.value?.classList.add('animate-start')
        if (featuresSection.value) observer?.unobserve(featuresSection.value) } })
  },

{ threshold: 0.15 })

  if (featuresSection.value) {
    observer.observe(featuresSection.value) } })

onUnmounted(() => {
  if (observer) observer.disconnect() })

</script>

<style scoped>
.features-bg {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-position: center; }

.left-anim {
  opacity: 0;
  transform: translateX(-50px); }

.right-anim {
  opacity: 0;
  transform: translateX(100px); }

.animate-start .left-anim {
  animation: slideIn 1s forwards ease-out; }

.animate-start .right-anim {
  animation: slideIn 1.2s forwards ease-out;
  animation-delay: 0.4s; }

.animate-start .item-1 { animation-delay: 0.2s; }
.animate-start .item-2 { animation-delay: 0.4s; }
.animate-start .item-3 { animation-delay: 0.6s; }
.animate-start .item-4 { animation-delay: 0.8s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0); }}
</style>