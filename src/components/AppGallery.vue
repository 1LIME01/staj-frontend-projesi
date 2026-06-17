<template>
  <section class="w-full flex justify-center bg-gray-50 m-0 p-0">
    
    <div class="w-full mx-auto gallery-grid">
      
      <div class="relative overflow-hidden group cursor-pointer w-full aspect-square">
        <img src="/kids1.jpg" alt="Kids 1" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg class="w-12 h-12 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      <div class="relative overflow-hidden group cursor-pointer w-full aspect-square child-2">
        <img src="/kids2.jpg" alt="Kids 2" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg class="w-12 h-12 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      <div class="relative overflow-hidden group cursor-pointer w-full aspect-square child-3">
        <img src="/kids3.jpg" alt="Kids 3" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg class="w-12 h-12 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      <div class="relative overflow-hidden group cursor-pointer w-full aspect-square child-4">
        <img src="/kids4.jpg" alt="Kids 4" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg class="w-12 h-12 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  max-width: 400px;}

.child-2, .child-3, .child-4 {
  display: none; }

@media (min-width: 500px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 700px; 
  }
  .child-2 { display: block; } }

@media (min-width: 750px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 1000px;
  }
  .child-3 { display: block; }}

@media (min-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 1200px;
  }
  .child-4 { display: block; }}
</style>