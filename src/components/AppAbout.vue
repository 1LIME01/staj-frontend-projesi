<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect() }
  }, 

  { threshold: 0.3 }) 

  if (sectionRef.value) {
    observer.observe(sectionRef.value) }
})
</script>


<template>
  <section ref="sectionRef" class="section-container w-full min-h-[600px] flex items-center overflow-hidden relative" :class="{ 'is-animated': isVisible }">
    
    <div class="flex flex-col md:flex-row w-full h-full items-center">
      
      <div class="video-box delay-0 w-full md:w-1/2 h-full flex justify-center items-center p-10 lg:p-20">
        <a href="https://www.youtube.com/watch?v=-AhmuMqZB0s&source_ve_path=MTc4NDI0" target="_blank" class="play-button-container block w-full max-w-xl shadow-2xl aspect-video relative group">
          <img src="../assets/bg_video.jpg" alt="Video" class="w-full h-full object-cover" />
          
          <div class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-all duration-500">
  <div class="play-icon w-20 h-20 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">

    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>

  </div>
</div>
        </a>
      </div>

      <div class="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left p-10 lg:p-20">
        <h2 class="text-anim delay-1 text-4xl lg:text-6xl font-bold tracking-wide mb-6">
          <span class="text-[#3eb2cf] inline-block">About&nbsp;</span>
          <span class="text-[#fec20b] inline-block">Our Center</span>
        </h2>

        <p class="text-anim delay-2 text-[#808080] text-lg lg:text-xl leading-relaxed mb-8 max-w-md">
          We offer a play-based emergent curriculum complete with low teacher to child ratios. Come see our environment and how it is designed to promote exploration.
        </p>

        <div class="text-anim delay-3">
            <a href="#" class="inline-flex items-center px-8 py-4 rounded-full border-2 border-[#3eb2cf] text-[#3eb2cf] font-bold hover:bg-[#3eb2cf] hover:text-white transition-all">
              Learn More →
            </a>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.section-container {
  background-image: url('../assets/bg.jpg') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}


.video-box, .text-anim { 
  opacity: 0; 
  transition: all 2.0s cubic-bezier(0.16, 1, 0.3, 1) !important; 
}

.video-box { transform: translateX(100px); }
.text-anim { transform: translateX(-100px); }

.is-animated .video-box,
.is-animated .text-anim {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.is-animated .delay-0 { transition-delay: 0ms !important; }
.is-animated .delay-1 { transition-delay: 400ms !important; }
.is-animated .delay-2 { transition-delay: 800ms !important; }
.is-animated .delay-3 { transition-delay: 1200ms !important; }


.play-button-container:hover .play-icon {
  transform: scale(1.15);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}
</style>