<template>
  <div class="relative w-full h-[100vh] md:h-[75vh] overflow-hidden">
    <img 
      src="@/assets/banner_home.png"
      alt="Artistic portrait banner"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-black/40 md:bg-black/0"></div>
    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-4 md:px-6 lg:px-12 flex justify-center md:justify-end">
        <div class="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <div class="p-4 md:p-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-black text-white mb-4 md:mb-6 text-shadow-lg text-center md:text-right">
              who am I?
            </h1>
            <p class="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 font-inter font-light leading-relaxed text-shadow text-center md:text-right">
              I'm Tiago, an inventive designer from Brazil
              <br class="hidden sm:inline" />
              now residing in Barcelona. I am here to aid
              <br class="hidden sm:inline" />
              in the creation of your digital product,
              <br class="hidden sm:inline" />
              prioritizing exceptional user experience.
            </p>
            <div class="text-center md:text-right">
              <a 
                href="/about"
                class="inline-block text-white font-inter bg-transparent px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-light border-2 border-white 
                       shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] 
                       hover:bg-white hover:text-black hover:shadow-none
                       transition-all duration-300 text-shadow"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-lg {
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}
</style>