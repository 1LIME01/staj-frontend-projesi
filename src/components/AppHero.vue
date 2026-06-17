<script setup lang="ts">
import { ref } from 'vue'

const slides = ref([
  {
    title: 'Play, Explore and Learn',
    description: 'Programs of Kids Tree PreSchool include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.',
    image: '/hero-1.jpg',  
    align: 'lg:ml-auto lg:text-left lg:items-start'},

  {
    title: 'A perfect learning center for your kids',
    description: 'Providing a safe, supportive, and highly interactive environment equipped with modern educational tools to help young minds thrive.',
    image: '/hero-2.jpg',
    align: 'lg:mr-auto lg:text-left lg:items-start'},

  {
    title: 'We offer different kinds of activities',
    description: 'Our center provides a wide range of engaging activities designed to foster creativity, exploration, and continuous learning for every individual.',
    image: '/hero-3.jpg',    
    align: 'lg:ml-auto lg:text-left lg:items-start'
  }
])

const currentSlide = ref(0)
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden bg-[#f6f7f8]">
    
    <div 
      class="flex h-full w-full transition-transform duration-[1200ms] ease-in-out" 
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="relative w-full h-full flex-shrink-0">
        
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.image})` }">
        </div>
        
        <div class="absolute inset-0 bg-white/60 lg:bg-transparent transition-all duration-1000"></div>

        <div class="absolute inset-0 z-20 flex items-center px-6 sm:px-12 md:px-16 lg:px-24 py-16">
          <div class="max-w-7xl mx-auto w-full">
            
            <div class="max-w-2xl text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-[#212121]" :class="slide.align">
              
              <h1 class="custom-bezier-anim text-3xl sm:text-4xl md:text-5xl font-black font-['Arvo'] leading-tight" 
                :class="{ 'active': index === currentSlide }">
                {{ slide.title }}
              </h1> 
              <p class="custom-bezier-anim text-sm sm:text-base md:text-lg text-[#333333] font-['Montserrat'] font-normal leading-relaxed delay-200" 
                :class="{ 'active': index === currentSlide }">
                {{ slide.description }}
              </p>
              
              <div class="custom-bezier-anim pt-2 delay-400" 
                :class="{ 'active': index === currentSlide }">
                <button class="bg-[#3eb2cf] text-white hover:bg-[#fec20b] font-bold font-body px-8 py-4 rounded-full transition-all duration-300 shadow-lg  text-xs sm:text-sm tracking-wider">
                  Sign Up for Excursion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-4">
      <button 
        v-for="i in slides.length" 
        :key="i" 
        @click="currentSlide = i - 1" 
        class="w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer border-2 border-[#fec20b]" 
        :class="[currentSlide === (i - 1) ? 'bg-[#fec20b]' : 'bg-transparent']">
      </button>

    </div>
  </section>
</template>

<style scoped>
.custom-bezier-anim {
  opacity: 0;
  transform: translateY(60px);
  will-change: transform, opacity;  
  transition: opacity 1600ms cubic-bezier(0.25, 1, 0.5, 1), 
              transform 1600ms cubic-bezier(0.25, 1, 0.5, 1);}

.custom-bezier-anim.active {
  opacity: 1;
  transform: translateY(0);}

/* Harflerin/Satırların sırayla süzülmesi için gecikmeler */
.delay-200 { transition-delay: 1000ms; }
.delay-400 { transition-delay: 1200ms; }
</style>