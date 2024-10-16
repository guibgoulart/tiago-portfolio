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
              <a href="https://docs.google.com/document/d/18k4KWLUMiHyqHgBTk6UlZxCTfa83Fc-m3r3y946AFuc/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" class="text-lg md:text-xl hover:text-yellow">
                curriculum vitae ↗
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tiagorubensgoulart/" target="_blank" rel="noopener noreferrer" class="text-lg md:text-xl hover:text-yellow">
                linkedin ↗
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/otiagorubens/" target="_blank" rel="noopener noreferrer" class="text-lg md:text-xl hover:text-yellow">
                instagram ↗
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/intl-pt/artist/5sCebujHOIPwB3bx0zzKz9?si=Qp1BRYtST4eU6bF9MafhUQ" target="_blank" rel="noopener noreferrer" class="text-lg md:text-xl hover:text-yellow">
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
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>