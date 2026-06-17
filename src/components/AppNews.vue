<template>
  <section ref="newsSection" class="w-full bg-gray-50 py-16 px-4 overflow-hidden">
    
    <div class="max-w-6xl mx-auto mb-12 flex flex-col items-center latest-news-title-anim">
      <h2 class="text-4xl font-extrabold tracking-tight mb-2">
        <span class="text-blue-600">Latest</span>
        <span class="text-amber-500 ml-2">News</span>
      </h2>      
    </div>

    <div class="mx-auto news-gallery-grid mb-12">
      
      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col news-card card-item-1">
        <div class="w-full aspect-video bg-gray-200">
          <img src="/news1.jpg" alt="Mother's Day" class="w-full h-full object-cover" />
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 class="text-amber-500 text-base font-bold mb-3">Mother's Day</h3>
            <p class="text-gray-400 text-xs text-center line-clamp-5 mb-6 leading-relaxed">
              Mother's Day is a celebration honoring the mother of the family, as well as motherhood, maternal bonds, and the influence of mothers in society.
            </p>
          </div>

          <div class="flex items-center text-cyan-600 text-[11px] border-t border-gray-100 pt-3 font-medium">
            <svg class="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <path d="M16 2v4M8 2v4M3 10h18"></path>
            </svg>
            <span class="text-slate-600 italic ml-1">2 days ago</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col news-card card-item-2">
        <div class="w-full aspect-video bg-gray-200">
          <img src="/news2.jpg" alt="Painting Class" class="w-full h-full object-cover" />
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 class="text-amber-500 text-base font-bold mb-3">Painting Class</h3>
            <p class="text-gray-400 text-xs text-center line-clamp-5 mb-6 leading-relaxed">
              In our kids' painting classes, we guarantee the best personalized instruction and one-on-one guidance for every single child who walks through our door.
            </p>
          </div>

          <div class="flex items-center text-cyan-600 text-[11px] border-t border-gray-100 pt-3 font-medium">
            <svg class="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <path d="M16 2v4M8 2v4M3 10h18"></path>
            </svg>
            <span class="text-slate-600 italic ml-1">2 days ago</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col news-card card-item-3">
        <div class="w-full aspect-video bg-gray-200">
          <img src="/news3.jpg" alt="Our New Teacher" class="w-full h-full object-cover" />
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 class="text-amber-500 text-base font-bold mb-3">Our New Teacher</h3>
            <p class="text-gray-400 text-xs text-center line-clamp-5 mb-6 leading-relaxed">
              We are glad to welcome Mary Johnson, our new teacher. She now teaches the class of 5 children aged up to 7 years old at Kids Tree Preschool.
            </p>
          </div>

          <div class="flex items-center text-cyan-600 text-[11px] border-t border-gray-100 pt-3 font-medium">
            <svg class="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <path d="M16 2v4M8 2v4M3 10h18"></path>
            </svg>
            <span class="text-slate-600 italic ml-1">2 days ago</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col news-card card-item-4">
        <div class="w-full aspect-video bg-gray-200">
          <img src="/news4.jpg" alt="We Integrate Creativity" class="w-full h-full object-cover" />
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 class="text-amber-500 text-base font-bold mb-3">We Integrate Creativity</h3>
            <p class="text-gray-400 text-xs text-center line-clamp-5 mb-6 leading-relaxed">
              All children need to be truly creative is the freedom to commit themselves completely to the effort and make whatever activity they are doing their own.
            </p>
          </div>

          <div class="flex items-center text-cyan-600 text-[11px] border-t border-gray-100 pt-3 font-medium">
            <svg class="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <path d="M16 2v4M8 2v4M3 10h18"></path>
            </svg>
            <span class="text-slate-600 italic ml-1">2 days ago</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center latest-news-btn-anim">
      <button class="bg-[#fec20b] hover:bg-[#3eb2cf] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md">
        View All News Posts
      </button>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const newsSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {    
        newsSection.value?.classList.add('animate-start')       
        if (newsSection.value) observer?.unobserve(newsSection.value) } }) }, 
        {
    root: null,
    threshold: 0.15
  })

  if (newsSection.value) {
    observer.observe(newsSection.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

</script>


<style scoped>

.news-gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  max-width: 280px;
}

@media (min-width: 640px) { .news-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 584px; } }
@media (min-width: 1024px) { .news-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 584px; } }
@media (min-width: 1280px) { .news-gallery-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: 1192px; } }


.latest-news-title-anim,
.news-card,
.latest-news-btn-anim {
  opacity: 0;
  will-change: transform, opacity;
}

.latest-news-title-anim { transform: translateY(60px); }
.news-card { transform: translateX(-140px); }
.latest-news-btn-anim { transform: translateY(40px); }
.animate-start .latest-news-title-anim {
  animation: slideUp 2000ms cubic-bezier(0.25, 1, 0.5, 1) forwards;}

.animate-start .news-card {
  animation: slideRight 2200ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;}

.animate-start .latest-news-btn-anim {
  animation: slideUpButton 1800ms cubic-bezier(0.25, 1, 0.5, 1) forwards;
  animation-delay: 2400ms;}

.animate-start .card-item-1 { animation-delay: 800ms; }
.animate-start .card-item-2 { animation-delay: 1200ms; }
.animate-start .card-item-3 { animation-delay: 1600ms; }
.animate-start .card-item-4 { animation-delay: 2000ms; }

@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideRight {
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideUpButton {
  to { opacity: 1; transform: translateY(0); }
}

</style>