<template>
  <section ref="eventsSection" class="w-full bg-white py-16 px-4 overflow-hidden">
    
    <div class="max-w-6xl mx-auto mb-12 flex flex-col items-center latest-events-anim">
      <h2 class="text-4xl font-extrabold tracking-tight mb-2 text-[#3eb2cf]">
        Events
      </h2>      
    </div>

    <div class="mx-auto events-gallery-grid mb-12">
      
      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col event-card card-item-1">
        <div class="w-full aspect-video bg-gray-200 relative overflow-hidden group">
          <img src="/events1.jpg" alt="Preschool Dinner" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-[#3eb2cf]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <button class="w-40 py-2 rounded-full bg-[#fec20b] text-white font-semibold text-sm border-2 border-[#fec20b] hover:bg-white hover:text-[#fec20b] transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[50ms]">
              Book Now
            </button>
            <button class="w-40 py-2 rounded-full bg-transparent text-white font-semibold text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[150ms]">
              Learn more
            </button>
          </div>

          <div class="absolute bottom-0 left-0 bg-[#3eb2cf] text-white flex flex-col items-center justify-center px-3 py-1.5 text-center min-w-[70px]">
            <span class="text-xl font-bold leading-none">31</span>
            <span class="text-[10px] uppercase tracking-wider scale-90">September</span>
            <span class="text-[9px] opacity-80 leading-none mt-0.5">5:00pm</span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div class="text-left">
            <h3 class="text-[#fec20b] text-base font-bold mb-3 hover:text-[#3eb2cf] transition-colors duration-200 cursor-pointer">
              Preschool Dinner
            </h3>
          </div>

          <div class="flex items-center text-gray-400 text-xs border-t border-gray-100 pt-3 font-medium group/author cursor-pointer">
            <svg class="w-4 h-4 mr-2 text-[#fec20b] transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
            <span class="hover:text-[#3eb2cf] transition-colors duration-200">Walter Stanley</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col event-card card-item-2">
        <div class="w-full aspect-video bg-gray-200 relative overflow-hidden group">
          <img src="/events2.jpg" alt="Grandparents Day" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-[#3eb2cf]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <button class="w-40 py-2 rounded-full bg-[#fec20b] text-white font-semibold text-sm border-2 border-[#fec20b] hover:bg-white hover:text-[#fec20b] transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[50ms]">
              Book Now
            </button>
            <button class="w-40 py-2 rounded-full bg-transparent text-white font-semibold text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[150ms]">
              Learn more
            </button>
          </div>

          <div class="absolute bottom-0 left-0 bg-[#3eb2cf] text-white flex flex-col items-center justify-center px-3 py-1.5 text-center min-w-[70px]">
            <span class="text-xl font-bold leading-none">5</span>
            <span class="text-[10px] uppercase tracking-wider scale-90">July</span>
            <span class="text-[9px] opacity-80 leading-none mt-0.5">5:00pm</span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div class="text-left">
            <h3 class="text-[#fec20b] text-base font-bold mb-3 hover:text-[#3eb2cf] transition-colors duration-200 cursor-pointer">
              Grandparents Day
            </h3>
          </div>
          <div class="flex items-center text-gray-400 text-xs border-t border-gray-100 pt-3 font-medium cursor-pointer">
            <svg class="w-4 h-4 mr-2 text-[#fec20b]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
            <span class="hover:text-[#3eb2cf] transition-colors duration-200">Raymond Salazar</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col event-card card-item-3">
        <div class="w-full aspect-video bg-gray-200 relative overflow-hidden group">
          <img src="/events3.jpg" alt="Family Celebration" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-[#3eb2cf]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <button class="w-40 py-2 rounded-full bg-[#fec20b] text-white font-semibold text-sm border-2 border-[#fec20b] hover:bg-white hover:text-[#fec20b] transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[50ms]">
              Book Now
            </button>
            <button class="w-40 py-2 rounded-full bg-transparent text-white font-semibold text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[150ms]">
              Learn more
            </button>
          </div>

          <div class="absolute bottom-0 left-0 bg-[#3eb2cf] text-white flex flex-col items-center justify-center px-3 py-1.5 text-center min-w-[70px]">
            <span class="text-xl font-bold leading-none">15</span>
            <span class="text-[10px] uppercase tracking-wider scale-90">June</span>
            <span class="text-[9px] opacity-80 leading-none mt-0.5">5:00pm</span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div class="text-left">
            <h3 class="text-[#fec20b] text-base font-bold mb-3 hover:text-[#3eb2cf] transition-colors duration-200 cursor-pointer">
              Family Celebration
            </h3>
          </div>

          <div class="flex items-center text-gray-400 text-xs border-t border-gray-100 pt-3 font-medium cursor-pointer">
            <svg class="w-4 h-4 mr-2 text-[#fec20b]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
            <span class="hover:text-[#3eb2cf] transition-colors duration-200">Bruce Hawkins</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col event-card card-item-4">
        <div class="w-full aspect-video bg-gray-200 relative overflow-hidden group">
          <img src="/events4.jpg" alt="Summer Drawing Contest" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-[#3eb2cf]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <button class="w-40 py-2 rounded-full bg-[#fec20b] text-white font-semibold text-sm border-2 border-[#fec20b] hover:bg-white hover:text-[#fec20b] transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[50ms]">
              Book Now
            </button>
            <button class="w-40 py-2 rounded-full bg-transparent text-white font-semibold text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-[150ms]">
              Learn more
            </button>
          </div>

          <div class="absolute bottom-0 left-0 bg-[#3eb2cf] text-white flex flex-col items-center justify-center px-3 py-1.5 text-center min-w-[70px]">
            <span class="text-xl font-bold leading-none">5</span>
            <span class="text-[10px] uppercase tracking-wider scale-90">June</span>
            <span class="text-[9px] opacity-80 leading-none mt-0.5">5:00pm</span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div class="text-left">
            <h3 class="text-[#fec20b] text-base font-bold mb-3 hover:text-[#3eb2cf] transition-colors duration-200 cursor-pointer">
              Summer Drawing Contest
            </h3>
          </div>

          <div class="flex items-center text-gray-400 text-xs border-t border-gray-100 pt-3 font-medium cursor-pointer">
            <svg class="w-4 h-4 mr-2 text-[#fec20b]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
            <span class="hover:text-[#3eb2cf] transition-colors duration-200">Danielle Garza</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center latest-events-btn-anim">
      <button class="bg-[#fec20b] hover:bg-[#3eb2cf] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md flex items-center gap-2">
        <span>View Event Calendar</span>
        <span class="text-xs">➔</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const eventsSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {  
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {        
        eventsSection.value?.classList.add('animate-start')        
        if (eventsSection.value) observer?.unobserve(eventsSection.value) } })},
    {

    root: null,
    threshold: 0.15 })

  if (eventsSection.value) {
    observer.observe(eventsSection.value) } })

onUnmounted(() => {
  if (observer) observer.disconnect() })
</script>

<style scoped>

.events-gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  max-width: 280px; }

@media (min-width: 640px) { .events-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 584px; } }
@media (min-width: 1024px) { .events-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 584px; } }
@media (min-width: 1280px) { .events-gallery-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: 1192px; } }

.latest-events-anim,
.event-card,
.latest-events-btn-anim {
  opacity: 0;
  will-change: transform, opacity;}

.latest-events-anim { transform: translateY(100px); }
.event-card { transform: translateX(-140px); }
.latest-events-btn-anim { transform: translateY(40px); }
.animate-start .latest-events-anim {
  animation: slideUp 2000ms cubic-bezier(0.25, 1, 0.5, 1) forwards;}
.animate-start .event-card {
  animation: slideRight 2200ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;}
.animate-start .latest-events-btn-anim {
  animation: slideUpBtn 1800ms cubic-bezier(0.25, 1, 0.5, 1) forwards;
  animation-delay: 2400ms;}


.animate-start .card-item-1 { animation-delay: 800ms; }
.animate-start .card-item-2 { animation-delay: 1200ms; }
.animate-start .card-item-3 { animation-delay: 1600ms; }
.animate-start .card-item-4 { animation-delay: 2000ms; }


@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }}
@keyframes slideRight {
  to { opacity: 1; transform: translateX(0); }}
@keyframes slideUpBtn {
  to { opacity: 1; transform: translateY(0); }}

</style>