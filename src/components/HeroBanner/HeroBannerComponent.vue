<template>
    <div class="relative w-full h-[75vh] overflow-hidden">
      <img 
        src="@/assets/herobanner.png" 
        alt="Designer's portrait" 
        class="absolute inset-0 w-full h-full object-cover object-center"
      >
  
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <div class="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 class="text-7xl md:text-9xl font-extrabold text-red leading-none">
              <span class="block">HO</span>
              <span class="block">LA!</span>
            </h2>
          </div>
  
          <div class="w-full md:w-1/3 md:absolute md:right-12 lg:right-24">
            <div class="p-6 rounded-lg">
              <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">who am I?</h3>
              <p class="text-base font-light md:text-lg text-white mb-8">
                I'm Tiago, a creative designer from Brazil currently located in Barcelona.
                I will help you develop your digital product based on a better user experience.
              </p>
              <a 
                href="/about" 
        
                class="inline-block text-white bg-transparent px-6 py-3 text-lg font-bold border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:bg-opacity-20 transition-colors duration-300 mt-6"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroBanner'
  }
  </script>