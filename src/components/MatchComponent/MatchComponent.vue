<template>
  <div class="bg-red h-screen flex flex-col items-center justify-start pt-10">
    <div class="text-center text-black font-helvetica font-bold mt-8 mb-4">
      <p class="text-4xl">First, let me introduce myself.</p>
      <p class="text-4xl">Perhaps we might be a perfect match.</p>
    </div>
    <div class="relative mt-8">
      <img src="@/assets/iphone.png" alt="iPhone Mockup" class="iphone-mockup" />
      <div class="absolute font-inter top-0 left-0 w-full h-full flex flex-col justify-between items-center text-white pt-6">
        <div class="w-full flex justify-between items-center px-8">
          <div class="flex items-center name-age">
            <span class="font-semibold">Tiago Goulart</span>
            <span class="ml-4">43</span>
            <span class="text-blue-500 text-lg ml-3">✔</span>
          </div>
        </div>
        <!-- Carousel Component -->
        <carousel :items-to-show="1" class="w-full h-full">
          <slide v-for="n in 5" :key="n">
            <img :src="getImageUrl(n)" :alt="`Image ${n}`" class="w-full h-full object-cover" />
          </slide>
        </carousel>
      </div>
      <!-- Status Bar Icons (Simulated) -->
      <div class="absolute font-inter status-ui-text top-8 left-14 right-14 flex justify-between items-center text-white text-sm px-4">
        <span>16:20</span>
        <div class="flex items-center space-x-1">
          <span>📶</span>
          <span>📱</span>
          <span>🔋</span>
        </div>
      </div>
    </div>
  </div>
</template>
