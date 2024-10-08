<template>
  <div class="font-playfair">
    <div class="container mx-auto mt-8 p-4 md:p-8">
      <!-- Main Row -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <!-- Left Column -->
        <div class="text-left md:w-1/2">
          <p class="text-2xl md:text-4xl mb-6">
            thank you for your attention!
          </p>
        </div>
        <!-- Right Column -->
        <div class="md:w-1/2 ml-auto text-right">
          <ul class="flex flex-col space-y-2 md:space-y-4">
            <li>
              <a href="#" class="text-lg md:text-xl hover:text-yellow">
                curriculum vitae ↗
              </a>
            </li>
            <li>
              <a href="#" class="text-lg md:text-xl hover:text-yellow">
                linkedin ↗
              </a>
            </li>
            <li>
              <a href="#" class="text-lg md:text-xl hover:text-yellow">
                instagram ↗
              </a>
            </li>
            <li>
              <a href="#" class="text-lg md:text-xl hover:text-yellow">
                spotify ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Scroll to Top Button -->
      <div class="text-center mt-8">
        <a href="#" @click="scrollToTop">
          <img src="@/assets/back to the top.png" alt="Back to Top" class="mx-auto cursor-pointer w-auto max-w-full h-16 md:h-24">
        </a>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="bg-soft-black text-white p-4 mt-8 w-full">
      <div class="container mx-auto flex flex-col items-center">
        <p class="text-center text-sm md:text-lg mb-2">
          made with ❤️ and figma
        </p>
        <p class="text-center text-xs md:text-sm">
          coded by 
          <a href="https://github.com/guibgoulart" class="underline hover:text-gray-300" target="_blank">@guibgoulart</a> 
          and 
          <a href="https://github.com/leofromhell13" class="underline hover:text-gray-300" target="_blank">@leofromhell13</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped></style>