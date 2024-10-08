<template>
  <div class="bg-yellow_work min-h-screen py-4 sm:py-8 font-helvetica">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <!-- Frase centralizada -->
      <div class="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
          Now that we've gotten to know each other a <br>
          little bit, let me show you my world.
        </h2>
      </div>

      <!-- UX/UI Design Section -->
      <div class="bg-yellow-200 p-4 sm:p-6 rounded-lg mb-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">ux-ui design</h2>
        <div class="space-y-6 md:space-y-8">
          <div class="mb-6">
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
              Case Study: 2024 Master in UX/UI Design <br>
              Program at Nuclio Digital School, Barcelona.
            </p>
            <router-link to="/petpals">
              <img src="@/assets/Card Petpals.png" alt="Petpals Case Study" class="rounded-lg w-full cursor-pointer" />
            </router-link>
          </div>
          <div class="mb-6">
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">Case Study: 2024.</p>
            <img src="@/assets/Card Vas.png" alt="Vas Case Study" class="rounded-lg w-full" />
          </div>
        </div>
      </div>

      <!-- Graphic Design Section -->
      <div class="bg-yellow-300 p-4 sm:p-6 rounded-lg">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">graphic design</h2>
        <div class="mb-6">
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
            Branding, Logo and Visual Identity Design for<br>
            Associação Brasil Aué, 2023, Barcelona.
          </p>
          <img src="@/assets/Card aue.png" alt="Associação Brasil Aué" class="rounded-lg w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignShowcaseComponent'
}
</script>

<style>
</style>