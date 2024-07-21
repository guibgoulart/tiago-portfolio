<template>
  <div class="flex flex-col justify-start text-white px-4 md:px-0"> <!-- Added padding -->
    <div class="flex justify-between items-center mt-4 px-4 md:px-8">
      <span class="text-sm md:text-xl">16:20</span>
      <div class="flex items-center space-x-1">
        <span class="material-symbols-outlined text-base md:text-xl">signal_cellular_alt</span>
        <span class="material-symbols-outlined text-base md:text-xl">wifi</span>
        <span class="material-symbols-outlined text-base md:text-xl">battery_full</span>
      </div>
    </div>
    <div class="flex items-center mt-6 ml-2 mb-4 md:ml-4">
      <span class="font-semibold text-2xl md:text-3xl">Tiago Goulart</span>
      <span class="ml-2 md:ml-4 text-2xl md:text-3xl">43</span>
      <span class="text-blue-500 ml-2 md:ml-3 mt-1 material-symbols-outlined text-2xl">verified</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneHeader'
}
</script>
