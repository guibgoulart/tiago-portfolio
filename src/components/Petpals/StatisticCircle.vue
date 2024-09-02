<template>
    <div ref="circleContainer" class="flex flex-col items-center">
      <div class="relative w-24 h-24">
        <!-- Percentage Display -->
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-2xl font-bold text-black">{{ percentage }}%</span>
        </div>
        <!-- Circle SVG -->
        <svg class="w-full h-full" viewBox="0 0 100 100">
          <circle
            class="text-gray-300"
            stroke-width="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            class="text-red-500"
            stroke-width="10"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference"
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            :style="circleStyle"
          />
        </svg>
      </div>
      <p class="text-center mt-4 text-white max-w-xs">{{ text }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const props = defineProps({
    percentage: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });
  
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  
  const circleStyle = ref({
    strokeDasharray: circumference,
    strokeDashoffset: circumference,
  });
  
  // Reference to the container div for observing
  const circleContainer = ref(null);
  
  let observer;
  
  onMounted(() => {
    // Create an intersection observer
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger the animation when the component is in view
          circleStyle.value = {
            strokeDasharray: circumference,
            strokeDashoffset: (1 - props.percentage / 100) * circumference,
            transition: 'stroke-dashoffset 1s ease-out',
          };
          // Stop observing after the animation is triggered
          observer.unobserve(circleContainer.value);
        }
      });
    });
  
    // Start observing the container
    if (circleContainer.value) {
      observer.observe(circleContainer.value);
    }
  });
  
  onBeforeUnmount(() => {
    // Clean up the observer when the component is destroyed
    if (observer && circleContainer.value) {
      observer.unobserve(circleContainer.value);
    }
  });
  </script>
  
  <style scoped>
  /* No additional styles needed */
  </style>
  