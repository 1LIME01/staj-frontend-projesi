<template>
  <section 
    class="w-full relative py-24 px-4 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center min-h-[480px]"
    style="background-image: url('/bg2.jpg');">

    <div class="absolute inset-0 bg-black/40 pointer-events-none"></div>
    <div class="relative w-full max-w-3xl mx-auto z-10 text-white text-center px-4 md:px-8">      
      <div class="text-6xl font-serif text-white/20 select-none absolute -top-10 left-4 md:left-0">“</div>
      <div class="overflow-hidden w-full relative min-h-[220px] flex items-center">
        
        <div 
          class="w-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform absolute top-0 left-0"
          :class="currentCustomer === 1 ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-full pointer-events-none'">
          <p class="text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-8 italic">
            "Words truly can't express how grateful I am that a preschool like this exists. I thought that a place like this was a mythical unicorn that parents searched for, but never found."
          </p>
          <div class="flex items-center gap-4 text-left">
            <img src="/customer1.jpg" alt="Debra Banks" class="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-md" />
            <div>
              <h4 class="text-lg font-bold tracking-wide">Debra Banks</h4>
              <p class="text-xs text-gray-300 italic">Sales manager</p>
            </div>
          </div>
        </div>

        <div 
          class="w-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform absolute top-0 left-0"
          :class="currentCustomer === 2 ? 'opacity-100 translate-x-0 relative' : 'opacity-0 -translate-x-full pointer-events-none'">
          <p class="text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-8 italic">
            "I want to take this opportunity to thank you and your staff for all you have done for my daughter. I am in awe at how much Lauren has grown both emotionally and intellectually since last year."
          </p>
          <div class="flex items-center gap-4 text-left">
            <img src="/customer2.jpg" alt="Steven Alvarez" class="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-md" />
            <div>
              <h4 class="text-lg font-bold tracking-wide">Steven Alvarez</h4>
              <p class="text-xs text-gray-300 italic">Taxi driver</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex justify-center items-center gap-3">
        
        <button 
          v-for="dot in 4" 
          :key="'mobile-dot-' + dot"
          @click="selectMobileDot(dot)"
          class="mobile-dots rounded-full transition-all duration-300 bg-white"
          :class="[
            activeMobileDot === dot 
              ? 'bg-amber-500 w-3.5 h-3.5 scale-110 shadow' 
              : 'opacity-60 hover:opacity-100 w-2.5 h-2.5']">
        </button>

        <button 
          v-for="customerIdx in 2" 
          :key="'desktop-dot-' + customerIdx"
          @click="selectDesktopDot(customerIdx)"
          class="desktop-dots rounded-full transition-all duration-300 bg-white"
          :class="[
            currentCustomer === customerIdx 
              ? 'bg-amber-500 w-3.5 h-3.5 scale-110 shadow' 
              : 'opacity-60 hover:opacity-100 w-2.5 h-2.5']">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentCustomer = ref(1)

const activeMobileDot = ref(1)

const selectMobileDot = (dotNumber: number) => {
  activeMobileDot.value = dotNumber
  if (dotNumber === 1 || dotNumber === 3) {
    currentCustomer.value = 1
  } else {
    currentCustomer.value = 2 }
}

const selectDesktopDot = (customerIdx: number) => {
  currentCustomer.value = customerIdx
  activeMobileDot.value = customerIdx }
</script>

<style scoped>
.transition-all {
  will-change: transform, opacity;}

.mobile-dots {
  display: flex;}

.desktop-dots {
  display: none;}


@media (min-width: 992px) {
  .mobile-dots {
    display: none !important;}

  .desktop-dots {
    display: flex !important;
    width: 10px;
    height: 10px;
    justify-content: center;
    align-items: center;}}

</style>