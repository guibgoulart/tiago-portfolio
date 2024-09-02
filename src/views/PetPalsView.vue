<template>
  <NavbarComponent />
  <div class="bg-blue-500 w-full p-8 flex flex-col items-center bg-blue">
    <img
      src="@/assets/petpals/Header Petpals.png"
      alt="Petpals"
      class="w-full max-w-xs sm:max-w-3xl"
    />
    <h1 class="mt-4 text-center text-white font-bold text-2xl sm:text-3xl">
      We help pet owners find a trustworthy caregiver at a low cost.
    </h1>
    
    <!-- Statistics Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <StatisticCircle
        percentage="50"
        text="prefer to leave their pet in the hands of a friend or family member."
      />
      <StatisticCircle
        percentage="40"
        text="would use a service at an affordable price to care for their pets."
      />
      <StatisticCircle
        percentage="70"
        text="prefer an animal lover even if they don't have a pet or experience caring for them."
      />
      <StatisticCircle
        percentage="60"
        text="would use our service in case of vacation or urgently."
      />
      <StatisticCircle
        percentage="70"
        text="would be willing to take care of a pet in exchange."
      />
    </div>
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue';
import StatisticCircle from '@/components/Petpals/StatisticCircle.vue';
</script>
