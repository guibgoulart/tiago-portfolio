<template>
  <div class="flex flex-col justify-start text-white">
    <div class="flex justify-between items-center mt-4 px-8">
      <span class="status-ui-text">16:20</span>
      <div class="flex items-center space-x-1">
        <span class="material-symbols-outlined">signal_cellular_alt</span>
        <span class="material-symbols-outlined">wifi</span>
        <span class="material-symbols-outlined">battery_full</span>
      </div>
    </div>
    <div class="flex items-center mt-6 ml-4 name-age">
      <span class="font-semibold">Tiago Goulart</span>
      <span class="ml-4">43</span>
      <span class="text-blue-500 ml-3 mt-1 material-symbols-outlined">verified</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneHeader'
}
</script>

<style scoped>
.name-age {
  font-size: 1.75rem;
}
.status-ui-text {
  font-size: 1.1rem;
}
</style>
