<template>
    <nav class="bg-white w-full py-8 px-6 md:px-12 flex justify-between items-center font-helvetica">
      <div class="logo ml-4 md:ml-8">
        <img src="@/assets/logo.png" alt="Tiago Rubens" class="h-16 md:h-20" />
      </div>
      <div class="hidden md:flex space-x-8 items-center">
        <a href="#about" class="text-black text-lg hover:text-soft-black transition-colors duration-300">about</a>
        <a href="#projects" class="text-black text-lg hover:text-soft-black transition-colors duration-300">projects</a>
        <a href="#contact" class="text-black text-lg hover:text-soft-black transition-colors duration-300 border border-black px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">contact</a>
      </div>
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-black focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white py-4 px-6">
      <a href="#about" class="block text-black text-lg py-2">about</a>
      <a href="#projects" class="block text-black text-lg py-2">projects</a>
      <a href="#contact" class="block text-black text-lg py-2 mt-2 border border-black px-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">contact</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewNavbar',
    data() {
      return {
        isMobileMenuOpen: false
      }
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
      }
    }
  }
  </script>