<template>
  <header class="w-full bg-white sticky top-0 z-50 shadow-sm font-['Arvo'] font-bold select-none border-b border-gray-100">

    <div class="mobile-nav items-center justify-between px-6 h-[70px] relative w-full">
      <button @click="isOpen = true" class="focus:outline-none flex flex-col space-y-1.5 cursor-pointer">
         <span class="w-7 h-1 bg-[#fec20b] rounded-full"></span>
         <span class="w-7 h-1 bg-[#fec20b] rounded-full"></span>
         <span class="w-7 h-1 bg-[#fec20b] rounded-full"></span>
      </button>
      <span class="absolute left-1/2 -translate-x-1/2 text-[#3eb2cf] text-xl tracking-wide">Home</span>
    </div>

    <div class="desktop-nav items-center w-full h-[80px] px-8 max-w-[1400px] mx-auto">
      <div class="flex items-center justify-between w-full h-full">
        
        <div class="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="Logo" class="h-12 w-auto object-contain" />
        </div>

        <nav class="flex items-center space-x-6 text-[16px] text-[#212121] mx-auto">
          <a v-for="item in menuItems" :key="item.name" href="#" 
             class="flex items-center h-[80px] border-b-[3px] box-border transition-colors duration-200"
             :class="item.active ? 'text-[#fec20b] border-[#fec20b]' : 'border-transparent hover:text-[#fec20b]'">
            <span>{{ item.name }}</span>
            <svg v-if="item.hasArrow" class="w-3.5 h-3.5 ml-1 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </nav>

        <div class="flex items-center space-x-6 text-[#212121] flex-shrink-0">
          <button class="hover:text-[#fec20b] transition">
            <svg class="w-5 h-5 font-bold" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
          <button class="flex items-center space-x-2 hover:text-[#fec20b] transition text-[16px]">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span>2</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="mobile-sidebar fixed inset-0 z-50 flex">
      <div class="w-80 bg-white h-full flex flex-col shadow-2xl relative z-10 overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <button @click="isOpen = false" class="text-[#fec20b] text-2xl font-bold focus:outline-none">✕</button>
          <span class="text-[#3eb2cf] text-xl tracking-wide">Home</span>
        </div>

        <div class="px-8 pt-6 pb-8 flex flex-col items-center flex-1">
          <img src="/logo.png" alt="Logo" class="w-28 h-auto mb-6 object-contain" />

          <nav class="w-full text-left">
            <a v-for="item in menuItems" :key="item.name" href="#" 
               class="flex items-center justify-between py-4 border-b border-gray-50 text-[16px]"
               :class="item.active ? 'text-[#fec20b]' : 'text-[#212121]'">
              <span>{{ item.name }}</span>
              <svg v-if="item.hasArrow" class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <a href="#" class="flex items-center py-4 border-b border-gray-50 text-[16px] text-[#212121]">Shopping Cart (2)</a>
          </nav>

          <div class="relative w-full mt-8 mb-4">
            <input type="text" class="w-full border border-gray-300 rounded-full py-3 pl-5 pr-12 text-sm text-gray-700 focus:outline-none focus:border-[#3eb2cf]" placeholder="Search..." />
            <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div @click="isOpen = false" class="bg-black/40 flex-1"></div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = ref([
  { name: 'Home', hasArrow: false, active: true },
  { name: 'Elements', hasArrow: true, active: false },
  { name: 'Pages', hasArrow: true, active: false },
  { name: 'News', hasArrow: true, active: false },
  { name: 'Gallery', hasArrow: true, active: false },
  { name: 'Shop', hasArrow: true, active: false },
  { name: 'Donate', hasArrow: false, active: false },
  { name: 'Contacts', hasArrow: false, active: false }
])
</script>

<style scoped>
@media (min-width: 1024px) {
  .mobile-nav { display: none !important; }
  .mobile-sidebar { display: none !important; }
  .desktop-nav { display: flex !important; }}

@media (max-width: 1023px) {
  .desktop-nav { display: none !important; }
  .mobile-nav { display: flex !important; }}
</style>