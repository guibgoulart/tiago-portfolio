<template>
  <div class="bg-yellow_work min-h-screen py-8 font-helvetica">
    <div class="container mx-auto">
      <!-- Frase centralizada -->
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-5xl font-bold leading-tight">
          Now that we've gotten to know each other<br>
          a little bit, let me show you my world.
        </h2>
      </div>

      <!-- UX/UI Design Section -->
      <div class="bg-yellow-200 p-6 rounded-lg">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">ux-ui design</h2>
        <div class="flex flex-col mb-6">
          <div class="mb-4">
            <p class="text-2x1 md:text-3xl mb-4">Case Study: 2024 Master in UX/UI Design<br>
              Program at Nuclio Digital School, Barcelona.</p>
            <img src="@/assets/Mockup.png" alt="Petpals Case Study" class="rounded-lg w-full" />
          </div>
          <p class="text-2x1 md:text-3xl my-4">Case Study: 2024.</p>
          <div>
            <img src="@/assets/Card Vas.png" alt="Vas Case Study" class="rounded-lg w-full" />
          </div>
        </div>
      </div>

      <!-- Graphic Design Section -->
      <div class="bg-yellow-300 p-6 rounded-lg mt-6">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">graphic design</h2>
        <div class="flex flex-col">
          <p class="text-2x1 md:text-3xl mb-4">Branding, Logo and Visual Identity Design for<br>
            Associação Brasil Aué, 2023, Barcelona.</p>
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
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/path/to/HelveticaNeue.woff2') format('woff2'),
       url('/path/to/HelveticaNeue.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.font-helvetica {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>